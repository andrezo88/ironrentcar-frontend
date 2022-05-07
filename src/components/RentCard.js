import React from 'react'
import { NavLink } from 'react-router-dom';


export const RentCard = ({ _id, createdAt, }) => {

    const created = createdAt.split('', [10])



    return (
        <>
            <div >
                <div className="card mb-2 p-2 col-lg-2 d-flex rounded mx-auto d-block text-center">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Detalhe locação do veículo:</h5>
                            <p className="card-text"><span>Locação dia: </span>
                                <NavLink to={`/rented/${_id}`}>
                                    {created}
                                </NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



