import React from 'react'
import { RentCard } from './RentCard'

export const UserProfile = ({ name, email, rents }) => {


    return (
        <>
            <div>
                <h3 className="p-2 mb-2">  Nome: </h3> <span className="p-2">{name}</span>
            </div>
            <div>
                {rents.map(rent => <RentCard key={rent._id} {...rent} />)}
            </div>
        </>
    )
}

