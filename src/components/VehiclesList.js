import VehiclesItem from './VehiclesItem';

const Vehicleslist = ({ vehicles, getAllVehicles }) => {
  return (
    <div>
      {vehicles.map(vehicle => <VehiclesItem
        key={vehicle._id}
       {...vehicle}
        getAllVehicles={getAllVehicles} />)}
    </div>
  )
}
export default Vehicleslist;
