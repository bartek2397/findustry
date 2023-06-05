import bcrypt from 'bcryptjs';
import NextAuth, { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../prisma/client'
import CredentialsProvider from 'next-auth/providers/credentials'

const adapter = PrismaAdapter(prisma)

export const authOptions: AuthOptions = {
    adapter: adapter,
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password'
                },
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password) {
                    throw new Error('Email and password required')
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user || !user.hashedPassword) {
                    throw new Error('Email does not exist')
                }

                const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword)

                if (!isCorrectPassword) {
                    throw new Error('Invalid Credentials')
                }

                return user;
            }

        })
    ],
    pages: {
        signIn: '/',
    },
    debug: process.env.NODE_ENV === 'development', 
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)