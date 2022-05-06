import React from 'react'
//import { VehiclesItem } from './VehiclesItem';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from "../utils/Api"

export const Rent = ({ vehicles, getAllVehicles }) => {

  const [car, setCar] = useState({});

  const { carId } = useParams();


  const getOneCar = async () => {
    try {
      const cars = await api.getAllVehicles();
      const car = cars.find((car) => {
        return carId === car._id
      })
      setCar(car);
      console.log(car)
    } catch (error) {
      console.error(error.status);
    }
  }

  useEffect(() => {
    getOneCar();
  }, []);

  return (
    <section className='container'>
      <div>
        <h4>Rent</h4>
        <img src={car.image} alt={car.model} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{car.model}</h5>
        <p className="card-text">{car.factory}</p>
        <p className="card-text">{car.description}</p>
        <p className="card-text">{car.optional}</p>

      </div>
    </section>
  )
}
