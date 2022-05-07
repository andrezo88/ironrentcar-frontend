import React from 'react'
import { NavLink } from 'react-router-dom';


export const RentCard = ({ _id, createdAt, model, car }) => {


    const created = createdAt.split('', [10])



    return (
        <>
            <div >
                <div className="card mb-2 p-2 col-lg-4 d-flex rounded mx-auto d-block text-center">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Detalhes da locação do veículo:</h5>
                            <p className="card-text"><h3>Carro Locado: {car.factory} {car.model} </h3>
                            </p>

                            <div>
                                <NavLink to={`/rented/${_id}`}>
                                    {created}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



