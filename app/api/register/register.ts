import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server'
import prisma from '../../../prisma/client'


export async function POST(request: Request) {
  const body = await request.json()
  const { 
    email,
    company,
    password
  } = body

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: {
      email,
      company,
      hashedPassword
    }
  })

  return NextResponse.json(user)
}