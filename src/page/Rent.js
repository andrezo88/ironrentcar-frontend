import React from 'react'
//import { VehiclesItem } from './VehiclesItem';
import { Navbar } from '../components/Navbar';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from "../utils/Api"

export const Rent = ({ vehicles, getAllVehicles }) => {

  const [car, setCar] = useState({});
  const [rent, setRent] = useState({})
  const [value, setValue] = useState()
  const [periodRent, setPeriodRent] = useState("");
  const { carId } = useParams();
  const payment = "credit card";
  const navigate = useNavigate();

  const getOneCar = async () => {
    try {
      const cars = await api.getAllVehicles();
      const car = cars.find((car) => {
        return carId === car._id
      })
      setCar(car);
      setValue(car.value);
    } catch (error) {
      console.error(error.status);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.newRent(carId, car, periodRent, value, payment);
      navigate("/vehicles");
    } catch (error) {
      console.error(error.status);
    }
  }

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/');
  }

  console.log(periodRent);
  useEffect(() => {
    getOneCar();
  }, []);

  let total = periodRent * car.value;

  return (
    <>
      <Navbar />
      <div className="d-flex p-5 justify-content-center align-middle">
        <section className="p-5">
          <div>
            <h4>Rent</h4>
            <img src={car.image} alt={car.model} />
          </div>
          <div className="card-body">
            <h5 className="card-title">Modelo: {car.model}</h5>
            <p className="card-title">Fabricante: {car.factory}</p>
            <p className="card-title">Descrição: {car.description}</p>
            <p className="card-title">Opcionais: {car.optional}</p>
            <p className="card-title">Valor: {car.value}</p>
          </div>
        </section>
        <section section className="align-self-center p-5">
          <div>
            <label>Dias de aluguel:</label>
            <input
              type='number'
              id='days_rents'
              value={periodRent}
              placeholder="Digite dias de locação"
              onChange={(e) => setPeriodRent(e.target.value)}
            />
          </div>
          <div>
            <p>Valor da diária: R$ {car.value},00</p>
          </div>
          <div>
            {!isNaN(total) &&
              <p>Total: R$ {total},00</p>
            }
          </div>
          <div>
            <button
              className="btn btn-primary btn-lg"
              onClick={handleCancel}>Cancelar
            </button>
            <button
              className="btn btn-primary btn-lg"
              type="submit"
              onClick={handleSubmit}
            >Confirmar
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
