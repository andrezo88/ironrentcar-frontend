/* import { useState } from 'react';
import apiVehicles from '../utils/Api';

const VehiclesItem = ({ inserir as chaves da api}) => {
  const [ rent, setRent ] = useState("rent");

  const handleRent = async (event) => {
    try {
      setRent(event.currentTarget.rent);
      await apiVehicles.updateVehicle(_id)
      await getAllVehicles();
    } catch (error) {
      console.errror(error);
    }
  }
  const deleteVehicle = async (id) => {
    try {
      await apiVehicles.deleteVehicle(id);
      await getlAllVehicles();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Row>
      <input type='rent' rent={rent} onChange={handleRent} />

    </Row>
  )
} */
