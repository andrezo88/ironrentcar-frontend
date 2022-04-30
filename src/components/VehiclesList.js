import { VehiclesItem } from './VehiclesItem';

export const VehiclesList = ({ vehicles, getAllVehicles }) => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-3">
          {vehicles.map(vehicle =>
            <VehiclesItem key={vehicle._id} {...vehicle} /* getAllVehicles={getAllVehicles} */ />)}
        </div>
      </div>
    </div>
  )
}
