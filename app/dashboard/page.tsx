'use client'

import { getServerSession } from "next-auth"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import { redirect } from "next/navigation"


export default async function Dashboard ()  {

    const session = await getServerSession(authOptions)
    if (!session) {
        redirect('/login')
    }

  return (
    <div>Welcome to your Dashboard!</div>
  )
}
