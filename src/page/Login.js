import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
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
            navigate("/rent")
        } catch (error) {
            setMessage(error.data.msg)
            console.log(error.status)
        }
    }

    return (
        <>
            <Navbar />
            <div>Login</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <button type="submit">Login</button>
                </form>
                {message !== "" && <p>{message}</p>}
            </div>
        </>
    )
}
