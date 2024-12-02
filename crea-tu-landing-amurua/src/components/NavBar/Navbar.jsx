import React from "react";
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import logo from '../../assets/logo.png'

function Navbar () {
    return (
        <header>
            <nav className="navBarContainer">
                <div>
                    <a className="logoContainer" href="">
                        <img className="logoSkyVibes" src={logo} alt="SkyVibes"/>
                    </a>
                </div>

                <div>
                    <ul className="itemsContainer">
                        <li>
                            <a href="">Mis viajes</a>
                        </li>
                        <li>
                             <a href="">Paquetes</a>
                        </li>
                        <li>
                            <a href="">Ofertas🔥</a>
                        </li>
                        <li>
                            <a href="">Vuelos</a>
                        </li>
                        <li>
                            <a href="">Disney</a>
                        </li>
                        <li>
                            <a href="">Asistencia</a>
                        </li>
                        <li>
                            <a href="">Cupones</a>
                        </li>
                    </ul>
                </div>

                <CartWidget/>

            </nav>
        </header>

    )
};

export default Navbar;