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
                            <a href="">Mis viajes🛩</a>
                        </li>
                        <li>
                            <a href="">Vuelos
                            <i class="bi bi-airplane-engines"></i>
                            </a>
                        </li>
                        <li>
                             <a href="">Paquetes
                             <i class="bi bi-suitcase"></i>
                             </a>
                        </li>
                        <li>
                            <a href="">Ofertas🔥</a>
                        </li>
                        <li>
                            <a href="">Asistencia
                            <i class="bi bi-telephone-plus-fill"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">Cupones
                            <i class="bi bi-ticket-perforated-fill"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <CartWidget/>

            </nav>
        </header>

    )
};

export default Navbar;