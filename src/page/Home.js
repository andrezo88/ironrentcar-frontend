import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import AddVehicle from '../components/AddVehicle';
import VehiclesList from '../components/VehiclesList';
import apiVehicles from '../utils/Api';

export const Home = () => {
    return <>
        <Navbar />
    </>
}
export default Home;
