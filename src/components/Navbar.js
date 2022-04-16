import React from 'react';
import './Navbar.css';
import homeImage from "../images/home2.png"
import avatarLogin from "../images/avatarlogin.png"
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

            <ul className="direita">

                <NavLink to="/">
                    <li>
                        Veículos
                    </li>
                </NavLink>

                <NavLink to="/signup">
                    <li>
                        <img className="avatarImg" src={avatarLogin} alt="avatar" />
                    </li>
                    <li>Cadastrar</li>
                </NavLink>

                <NavLink to="/login">
                    <li>
                        <img className="avatarImg" src={avatarLogin} alt="avatar" />
                    </li>
                    <li>
                        Login
                    </li>
                </NavLink>

            </ul>



        </nav>
    )
}
