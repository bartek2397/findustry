import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== "GET") {
        return res.status(405).end();
    }

    const { email, password } = req.body

    const user = await prisma.user.findUnique({
        where: {
            email,
            password,
        },
        
    })
    res.status(200).json(user)
    
} catch (error) {
    res.status(404).json({ message: 'User not found' })
}
}