import VehiclesItem from './VehiclesItem';

const Vehicleslist = ({ Cars, getAllVehicles }) => {
  return (
    <div>
      {Cars.map(car => <VehiclesItem key={car._id} {...car} getAllVehicles={getAllVehicles} />)}
    </div>
  )
}
export default VehiclesList;
