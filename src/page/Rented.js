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

    return (
        <>
            <Navbar />
            <div>Period Rent: {rent.periodRent}</div>

            <div>Payments: {rent.payment}</div>
            <div>Value: {rent.value}</div>
            <div>Código da locação:  {rent._id}</div>
            <div>
                <span>Locação dia: </span>
                {rent.createdAt}
            </div>

            <NavLink to="/profile">
                <button className="btn btn-primary">Voltar</button>
            </NavLink>
        </>
    )
}
