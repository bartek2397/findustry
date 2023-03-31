import bcrypt from 'bcryptjs'
import prisma from '../../../prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function hanlder(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { email, password, company } = req.body

        // Create User
        try {
            const result = await prisma.user.create({
                data: {
                    email,
                    password,
                    company,
                },
            })
            res.status(200).json({ result })
        } catch (err) {
            res.status(500).json({
                message: 'Error has occured while creating new user',
            })
        }
    } else {
        res.status(404).json({ message: 'Route not found'})
    }
}
