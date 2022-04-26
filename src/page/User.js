import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import apiRentCar from "../utils/Api"

import { UserProfile } from "../components/UserProfile"

export const User = () => {

    const [user, setUser] = useState({ userInfo: {}, rents: [] });

    const navigate = useNavigate();

    useEffect(() => {
        const getProfile = async () => {
            try {
                const userInfo = await apiRentCar.getProfile();
                const rents = await apiRentCar.getRentbyUser()
                setUser({ userInfo, rents });
            } catch (error) {
                console.log(error);
                navigate('/login');
            }
        }
        getProfile();
    }, [navigate]);


    return (
        <>
            <h1>User</h1>
            <UserProfile {...user.userInfo} rents={user.rents} />
        </>
    )
}
