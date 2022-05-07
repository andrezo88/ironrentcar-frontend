import { NavLink } from "react-router-dom"

export const VehiclesItem = ({ _id, model, factory, image, description, plate, optional, value, category }) => {

  return (

    <div className="card p-2" style={{ maxWidth: "300px" }}>
      <div>
        <img src={image} className="img-fluid rounded-start" alt={model} />
      </div>
      <div >
        <div className="card-body">
          <h5>Carro:</h5>
          <h5 className="card-title">{model}</h5>
          <p className="card-text">{factory}</p>
          <h5>Descrição:</h5>
          <p className="card-text">{description}</p>
          <h5>Valor diária:</h5>
          <p className="card-text">R${value},00</p>
        </div>
        <NavLink to={`/rent/${_id}`}>
          <button className="btn btn-primary">Alugue já</button>
        </NavLink>
      </div>
    </div>

  )
}
