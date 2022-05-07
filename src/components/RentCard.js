import React from 'react'
import { NavLink } from 'react-router-dom';


export const RentCard = ({ _id, createdAt, model, car }) => {


    const created = createdAt.split('', [10])



    return (
        <div >
            <div >
                <div className="card mb-2 p-2 col-lg-4 d-flex rounded mx-auto d-block text-center" style={{ backgroundColor: "#E6E6E6" }}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Detalhes da locação do veículo:</h5>
                            <p className="card-text"><h3>Carro Locado: {car.factory} {car.model} </h3>
                            </p>

                            <div>
                                <span> Data da Locação:
                                </span>
                                <NavLink to={`/rented/${_id}`}>
                                    {created}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



