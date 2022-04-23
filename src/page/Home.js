import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../components/Navbar"
import AddVehicles from '../components/AddVehicles';
import VehiclesList from '../components/VehiclesList';
import apiVehicles from '../utils/Api';

export const Home = () => {
  const [ cars, setCars] = useState([]);

  const navigate = useNavigate();

  const getAllVehicles = async () => {
    try {
      const vehicles = await apiVehicles.getCars();
      setCars(cars);
    } catch (error) {
      console.error('na home!', error.status)
      navigate('/login')
    }
  }

  useEffect(() => {
    getAllVehicles();
  }, [])

    return (
        <div>
            <Navbar />
        <AddVehicles getAllVehicles={getAllVehicles} />
        <VehiclesList cars={cars} getAllVehicles={getAllVehicles} />
            teste desde home
        </div>
    )
}
