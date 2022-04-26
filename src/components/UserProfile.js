import React from 'react'
//import apiRentCar from "../utils/Api";

export const UserProfile = ({ _id, name, email, rents }) => {
    return (
        <>
            <div>{name}</div>
            <div>{email}</div>
            <div>{rents.map((rent) => {
                return <p key={rent._id}> Rent ID: {rent._id}<br /> Period Rent: {rent.periodRent} <br />
                    Value: {rent.value} <br /> Car: {rent.car} <br /> Payments: {rent.payment} <br /> </p>;
            })}</div>
        </>
    )
}

/* 
{"_id":"62672e484139490613b595ee",
"periodRent":5,
"payment":"credit",
"value":100,
"user":"6266e4235041f85b29670127",
"car":"6256f65acf194559374eaef0",
"createdAt":"2022-04-25T23:27:04.367Z",
"updatedAt":"2022-04-25T23:27:04.367Z",
"__v":0} */