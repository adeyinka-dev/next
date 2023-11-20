import React from 'react'

interface props {
    params: { id: number; photoId: number; }
}
const UserPhotoPage = ({ params: { id, photoId } }: props) => {
    return (
        <div>UserPhotoPage {id} {photoId}</div>
    )
}

export default UserPhotoPage