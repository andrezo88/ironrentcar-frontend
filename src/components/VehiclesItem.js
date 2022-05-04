import { NavLink } from "react-router-dom"

export const VehiclesItem = ({ _id, model, factory, image, description, plate, optional, value, category }) => {

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt="..." />
          <NavLink to={`/rent/${_id}`}>
            <button className="btn btn-primary">Alugue já</button>
          </NavLink>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{model}</h5>
            <p className="card-text">{factory}</p>
            <p className="card-text">{description}</p>
            <p className="card-text">{optional}</p>

          </div>
        </div>
      </div>
    </div >
  )
}
