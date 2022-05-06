import React from 'react'
import { NavLink } from 'react-router-dom';


export const RentCard = ({ _id, createdAt, car }) => {

    const created = createdAt.split('', [10])



    return (
        <>

            <div>
                <span>Carro Locado: </span>
                {car.model}
            </div>
            <div>
                <span>Locação dia: </span>
                <NavLink to={`/rented/${_id}`}>
                    {created}
                </NavLink>
            </div>
        </>
    )
}
