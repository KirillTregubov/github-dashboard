import { getServerSession, DefaultSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { SignIn, SignOut } from './actions'
import { getToken } from 'next-auth/jwt'

export default async function Auth() {
  const session = await getServerSession<DefaultSession>(authOptions)
  return (
    <header>
      <div>
        {session?.user ? (
          <>
            {session.user.image && (
              <span
                style={{ backgroundImage: `url('${session.user.image}')` }}
              />
            )}
            <span>
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            <SignOut />
          </>
        ) : (
          <>
            <span>You are not signed in</span>
            <SignIn />
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
