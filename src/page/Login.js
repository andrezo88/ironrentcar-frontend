import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import ironrentcar from "../images/iron-rent.png"
import apiRentCar from "../utils/Api"

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiRentCar.login({ email, password })
            resetForm();
            navigate("/")
        } catch (error) {
            setMessage(error.data.msg)
            console.log(error.status)
        }
    }

    return (
        <>
            <Navbar />
            <section className="vh-100" style={{ backgroundColor: "#E6E6E6" }}>
                <div className="container py-5 h-100">
                    <form onSubmit={handleSubmit} >
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className=" col-12 col-md-8 col-lg-6 col-xl-5" >
                                <div className="card shadow-2-strong" style={{ borderRadius: "1rem", backgroundColor: "#652CB3", color: "White" }}>
                                    <div className="card-body p-5 ">
                                        <div className="card-body p-5 text-center">
                                            <img src={ironrentcar} alt="Logo" style={{ height: "100px" }} />
                                        </div>
                                        <div>
                                            <h3 className="mb-2">SIGN-IN</h3>
                                        </div>
                                        <label htmlFor="email">Email</label>
                                        <label htmlFor="email" className="visually-hidden" >Email</label>
                                        <div className="row mb-3" >
                                            <div className="input-group">
                                                <div className="input-group-text">✉️</div>
                                                <input type="text" className="input-group-text col-xl-10 col-lg-10 col-md-10 col-sm-10 col-9" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <label htmlFor="email" >Password</label>
                                        <div className="row mb-3" >
                                            <div className="input-group">
                                                <div className="input-group-text">
                                                    <span>🔒</span>
                                                </div>
                                                <input className="input-group-text col-lg-10 col-md-10 col-sm-10 col-9"
                                                    id="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    value={password} onChange={e => setPassword(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            {message !== "" && <p>{message}</p>}
                                        </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary btn-lg" type="submit">Login</button>
                                        </div>

                                        <hr className="my-4" />
                                        <div>
                                            <p className="form-label">Novo no Iron RentCar?
                                                <NavLink style={{ textDecoration: "none" }} to="/signup">
                                                    <span>     Criar Usuário</span>
                                                </NavLink></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}


