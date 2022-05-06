import React from 'react'
import { RentCard } from './RentCard'

export const UserProfile = ({ name, email, rents }) => {


    return (
        <>
            <div>{name}</div>
            <div>{email}</div>
            <div>
                {rents.map(rent => <RentCard key={rent._id} {...rent} />)}
            </div>
        </>
    )
}

