import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { SignIn, SignOut } from './actions'
import Image from 'next/image'
import Greeting from './greeting'

export default async function Auth() {
  const session = await getServerSession(authOptions)
  return (
    <header>
      <div className="m-2 flex items-center text-lg">
        {session?.user ? (
          <>
            {session.user.image && (
              <Image
                src={session.user.image}
                width={42}
                height={42}
                alt="GitHub Avatar"
                className="inline-block rounded-full"
              />
            )}
            <div className="ml-2">
              <Greeting>{session.user.name ?? session.user.email}</Greeting>
            </div>
            <SignOut className="ml-auto" />
          </>
        ) : (
          <>
            <span>You are not signed in</span>
            <SignIn className="ml-auto" />
          </>
        )}
      </div>
    </header>
  )
  // console.log(authOptions)
  // const session = await getServerSession(authOptions)
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       {/* <button onClick={() => signOut()}>Sign out</button> */}
  //     </>
  //   )
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <Login />
  //   </>
  // )
  // return null
}
