import React from 'react';
import './Navbar.css';
import homeImage from "../images/home2.png"
import avatarLogin from "../images/avatarlogin.png"
export const Navbar = () => {



    return (
        <nav>

            <ul className="esquerda">
                <li >
                    <img className="homeImg" src={homeImage} alt="Home" />
                </li>
            </ul>
            <ul className="direita">

                <li>Veículos</li>
                <li>
                    <img className="avatarImg" src={avatarLogin} alt="avatar" />
                </li>
                <li>Cadastrar</li>
                <li>
                    <img className="avatarImg" src={avatarLogin} alt="avatar" />
                </li>
                <li>
                    Login
                </li>
            </ul>



        </nav>
    )
}
