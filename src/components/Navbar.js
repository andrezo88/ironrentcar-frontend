import './Navbar.css';
import login from "../images/login.svg";
import register from "../images/register.svg";
import home from "../images/home.svg"
import ironrentcar from "../images/iron-rent.png";
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    }

    const isLoggedIn = () => {
        const auth = localStorage.getItem('loginInfo')
        return auth

        //auth ? <Outlet /> : <Navigate to='/login' />
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark static-top" >
                <div className="container">
                    <div >
                        <img src={ironrentcar} alt="logo" weight="40px" />
                    </div>

                    <ul className="navbar-nav ms-auto flex-row">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" aria-current="page">
                                <img src={home} alt="avatarLogin" style={{ width: "30px" }} />Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/signup" className="nav-link" aria-current="page">
                                <img src={register} alt="avatarLogin" style={{ width: "30px", color: "white" }} />Registrar</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">
                                <img src={login} alt="avatarLogin" style={{ width: "30px" }} /> Logar</NavLink>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>

                </div>
            </nav >
        </>

    )
    //teste
}
