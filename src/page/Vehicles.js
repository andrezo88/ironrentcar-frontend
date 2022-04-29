import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import AddVehicle from '../components/AddVehicle';
import VehiclesList from '../components/VehiclesList';
import apiVehicles from '../utils/Api';

export const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);

    const navigate = useNavigate();

    const getAllVehicles = async () => {
        try {
            const vehicles = await apiVehicles.getAllVehicles();
            setVehicles(vehicles);
        } catch (error) {
            console.error(error.status)
            navigate('/login')
        }
    }

    useEffect(() => {
        getAllVehicles();
    }, [])

    return (
        <div>
            <Navbar />
            <AddVehicle getAllVehicles={getAllVehicles} />
            <VehiclesList vehicles={vehicles} getAllVehicles={getAllVehicles} />
            teste desde home
        </div>
    )

}
