'use client'
import React from 'react'
import NavBar from '../components/NavBar'



// export default function LayoutAuth() {
//     const { data: session } = useSession()
//     if (session) {
//         return <>
//             Signed in as {session.user.email} <br />
//             <button onClick={() => signOut()}>Sign out</button>
//         </>
//     }
//     return <>
//         Not signed in <br />
//         <button onClick={() => signIn()}>Sign in</button>
//     </>
// }


function LayoutAuth({ children }) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}

export default LayoutAuth