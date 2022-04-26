import React from 'react'
import { UserProfileCard } from './UserProfileCard'
//import apiRentCar from "../utils/Api";

export const UserProfile = ({ rents }) => {
    return (
        <>
            <div>
                {rents.map(rent => <UserProfileCard key={rent._id} {...rent} />)}</div>
        </>
    )
}

