import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../components/Navbar"
import apiRentCar from "../utils/Api"


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
            <div>Sign Up</div>
            <div>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="name">Full Name</label>
                        <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <button type="submit">Login</button>
                </form>
                {message !== "" && <p>{message}</p>}
            </div>
        </>
    )
}
