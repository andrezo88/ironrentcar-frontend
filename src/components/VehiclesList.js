<<<<<<< HEAD
/* import VehiclesList from './VehiclesItem';
=======
import VehiclesItem from './VehiclesItem';
>>>>>>> 3f8ef3eb73b33c408c994179cde469122a64af87

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
<<<<<<< HEAD
export default VehiclesList; */
=======
export default Vehicleslist;
>>>>>>> 3f8ef3eb73b33c408c994179cde469122a64af87
