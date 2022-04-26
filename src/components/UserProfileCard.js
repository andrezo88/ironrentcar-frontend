import React from 'react'

export const UserProfileCard = ({ _id, name, email, rent, periodRent, value, car, payment }) => {
    return (
        <>
            <div>UserProfileCard</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>Rent ID: {_id}</div>
            <div>Period Rent: {periodRent}</div>
            <div>Value: {value}</div>
            <div>Car: {car} </div>
            <div>Payments: {payment}</div>
        </>
    )
}
