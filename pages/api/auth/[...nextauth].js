import NextAuth from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../prisma/client'
import EmailProvider from 'next-auth/providers/email'
import { createTransport } from 'nodemailer'

const adapter = PrismaAdapter(prisma)

async function sendVerificationRequest(params) {
    const { identifier, url, provider, theme } = params
    const { host } = new URL(url)
    const transport = createTransport(provider.server)
    const result = await transport.sendMail({
        to: identifier,
        from: provider.from,
        subject: `Sign in to ${host}`,
        text: text({ url, host }),
        html: html({ url, host, theme }),
    })
    const failed = result.rejected.concat(result.pending).filter(Boolean)
    if (failed.length) {
        throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`)
    }
}

export const authOptions = {
    adapter: adapter,
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
            sendVerificationRequest({
                identifier: email,
                url,
                provider: { server, from },
            }) {sendVerificationRequest},
        }),
    ],
}

export default NextAuth(authOptions)
