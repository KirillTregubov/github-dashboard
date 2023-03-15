'use client'
import { signIn, signOut } from 'next-auth/react'
import Button from './button'

type Props = {
  className?: string
}

export function SignOut({ className }: Props) {
  return (
    <Button className={className} onClick={() => signOut()}>
      Sign out
    </Button>
  )
}

export function SignIn({ className }: Props) {
  return (
    <Button className={className} onClick={() => signIn('github')}>
      Sign in
    </Button>
  )
}
