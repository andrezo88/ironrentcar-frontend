import { useState } from 'react';
import apiVehicles from '../utils/Api';
import styled from 'styled-components';

const Input = styled.button`
  width: 300px;
`
const AddButton = styled.button`
  padding: 5px;
  border-radius: 3px;
  background-color: #001117;
  color: #f5f5f5;
`

const AddVehicle = ({ getAllVehicles }) => {
  const [model, setModel] = useState('');

  const handleInput = (event) => {
    setModel(event.currentTarget.value);
  }

  const handleAdd = async () => {
    try {
      await apiVehicles.AddVehicle(model);
      setModel('');
      await getAllVehicles();
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <Input value={model} onChange={handleInput} />
      <AddButton onClick={handleAdd}>Adcionar</AddButton>
    </div>
  )
}

export default AddVehicle;
