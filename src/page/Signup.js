import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../components/Navbar"
import apiRentCar from "../utils/Api"
import ironrentcar from "../images/iron-rent.png"

export const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const resetForm = () => {
        setEmail("");
        setPassword("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiRentCar.signup({ name, email, password })
            resetForm();
            navigate("/login");
        } catch (error) {
            setMessage(error.data.msg)
            console.log(message)
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
                                            <h3 className="mb-2">SIGN-UP</h3>
                                        </div>
                                        <label htmlFor="name">Nome</label>
                                        <label htmlFor="name" className="visually-hidden" >name</label>
                                        <div className="row mb-3" >
                                            <div className="input-group">
                                                <div className="input-group-text">📝</div>
                                                <input type="text" className="input-group-text col-xl-10 col-lg-10 col-md-10 col-sm-10 col-9" id="name" placeholder="Nome Completo" onChange={e => setName(e.target.value)} />
                                            </div>
                                        </div>
                                        <label htmlFor="email" >Email</label>
                                        <div className="row mb-3" >
                                            <div className="input-group">
                                                <div className="input-group-text">
                                                    <span>✉️</span>
                                                </div>
                                                <input className="input-group-text col-lg-10 col-md-10 col-sm-10 col-9" id="email" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <label htmlFor="email" >Password</label>
                                        <div className="row mb-3" >
                                            <div className="input-group">
                                                <div className="input-group-text">
                                                    <span>🔒</span>
                                                </div>
                                                <input className="input-group-text col-lg-10 col-md-10 col-sm-10 col-9" id="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            {message !== "" && <p>{message}</p>}
                                        </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary btn-lg" type="submit">Login</button>
                                        </div>

                                        <hr className="my-4" />

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


