import NextAuth from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../prisma/client'
import { EmailProvider } from 'next-auth/providers'

const adapter = PrismaAdapter(prisma)

export default authOptions({
    adapter: adapter,
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            
        })
    ],
})