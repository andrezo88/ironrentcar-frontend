import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { VehiclesList } from '../components/VehiclesList';
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
        <div style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: "#E6E6E6" }}>
            <div>
                <VehiclesList vehicles={vehicles} getAllVehicles={getAllVehicles} />
            </div>
        </div>
    )

}
