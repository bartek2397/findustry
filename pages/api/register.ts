import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method !== 'POST') {
        return res.status(405).end();
      }
  
      const { email, company, password } = req.body;
  
      const existingUser = await prisma.user.findUnique({
        where: {
          email
        }
      })
  
      if (existingUser) {
        return res.status(422).json({ error: 'Email taken' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const user = await prisma.user.create({
        data: {
          email,
          company,
          hashedPassword,
          image: '',
          emailVerified: new Date(),
        }
      })
  
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
  }