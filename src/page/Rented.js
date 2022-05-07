import React from 'react'
import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navbar } from "../components/Navbar"
import api from "../utils/Api"

export const Rented = () => {

    const [rent, setRent] = useState({});

    const { rentId } = useParams();


    const getOneRent = async () => {
        try {
            const rents = await api.getRentbyUser();
            const rent = rents.find((rent) => {
                return rentId === rent._id
            })
            setRent(rent);
        } catch (error) {
            console.error(error.status);
        }
    }

    useEffect(() => {
        getOneRent();
    }, []);

    const total = rent.periodRent * rent.value

    return (
        <>
            <Navbar />
            <div className="card  p-2 col-lg-3 d-flex rounded mx-auto d-block text-center">
                <section className="p-5">
                    <div>
                        <h4>Detalhes da locação:</h4>
                        {/* <img src={image} alt={model} style={{ height: "400px" }} /> */}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Período da locação: {rent.periodRent}</h5>
                        <p className="card-title">Valor total da locação: {total}</p>
                        <p className="card-title">Código da locação: {rent._id}</p>
                        <p className="card-title">Data da locação: {rent.createdAt}</p>
                    </div>
                    <NavLink to="/profile">
                        <button className="btn btn-primary">Voltar</button>
                    </NavLink>
                </section>
            </div>
        </>
    )
}


