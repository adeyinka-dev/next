import React from "react"
import UserTable from "./UserTable"

interface Props {
    searchParams: { sortOrder: string }
}


const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {

    return (
        <>
            <div className="divider divider-horizontal">USERS</div>
            <UserTable sortOrder={sortOrder} />

        </>
    )
}

export default UsersPage