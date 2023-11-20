import Link from 'next/link'
import React from 'react'

interface props {
    params: { id: number }
}



const UserDetailPage = ({ params: { id } }: props) => {
    return (
        <main>
            <div> UserDetailPage{id}</div>
            <Link href="/photos">MyPhoto</Link>
        </main>

    )
}

export default UserDetailPage