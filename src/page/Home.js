import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../components/Navbar"
import AddVehicle from '../components/AddVehicle';
import VehiclesList from '../components/VehiclesList';
import apiVehicles from '../utils/Api';

export const Home = () => {
  const [vehicles, setVehicles] = useState([]);

  const navigate = useNavigate();

  const getAllVehicles = async () => {
    try {
      const vehicles = await apiVehicles.getVehicles();
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
export default Home;
