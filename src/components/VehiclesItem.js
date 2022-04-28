import { useState } from 'react';
import styled from 'styled-components';
import apiVehicles from '../utils/Api';

const DeleteButton = styled.button`
  background-color: #f54545;
  color: #f5f5f5;
  font-weight: bold;
  width: 30px;
  height: 30px;
`;


const VehiclesItem = ({ _id, model, factory, getAllVehicles }) => {
  const [rent, setRent] = useState("");

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
      await getAllVehicles();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <input type='rent' rent={rent} onChange={handleRent} />
      <p>{model}</p>
      <DeleteButton onClick={() => deleteVehicle(_id)}></DeleteButton>
    </div>
  )
}
export default VehiclesItem;
