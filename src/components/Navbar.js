import React from 'react';
import './Navbar.css';
import homeImage from "../images/home2.png"
import avatarLogin from "../images/avatarlogin.png"
import ironrentcar from "../images/iron-rent.png"
import { NavLink } from 'react-router-dom';
export const Navbar = () => {


    return (
        <nav>

            <ul className="esquerda">
                <NavLink to="/">
                    <li >
                        <img className="homeImg" src={homeImage} alt="Home" />
                    </li>
                </NavLink>
            </ul>
            <ul>
                <li className="rent-car">
                    <img className="logo" src={ironrentcar} alt="Home" />
                </li>
            </ul>
            <ul className="direita">

                <NavLink to="/vehicles"
                    style={({ isActive }) =>
                        isActive
                            ? {
                                color: "black",

                            }
                            : {
                                color: "white",
                                textDecoration: "none"
                            }
                    }
                >
                    <li>
                        Veículos
                    </li>
                </NavLink>

                <NavLink to="/signup"
                    style={({ isActive }) =>
                        isActive
                            ? {
                                color: "black",

                            }
                            : {
                                color: "white",
                                textDecoration: "none"
                            }
                    }
                >
                    <li>
                        <img className="avatarImg" src={avatarLogin} alt="avatar" />
                        Cadastrar
                    </li>
                </NavLink>

                <NavLink to="/login"
                    style={({ isActive }) =>
                        isActive
                            ? {
                                color: "black",

                            }
                            : {
                                color: "white",
                                textDecoration: "none"
                            }
                    }

                >
                    <li>
                        <img className="avatarImg" src={avatarLogin} alt="avatar" />
                        Login
                    </li>
                </NavLink>

            </ul>

            {/* <ul>
                <li>Information</li>
            </ul> */}

        </nav>
    )
}
