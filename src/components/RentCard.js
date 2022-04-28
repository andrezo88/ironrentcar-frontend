import React from 'react'

export const RentCard = ({ _id, periodRent, value, car, payment }) => {
    return (
        <>

            <div>Rent ID: {_id}</div>
            <div>Period Rent: {periodRent}</div>
            <div>Value: {value}</div>
            <div>Car: {car.model} </div>
            <div>Payments: {payment}</div>
        </>
    )
}
