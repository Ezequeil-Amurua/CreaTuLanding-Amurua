import React from "react";
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";

function Navbar () {
    return (

        <header>
            <nav className="navBarContainer">
                <div>
                    <a className="logo" href="">Logo</a>
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
                            <a href="">Ofertas</a>
                        </li>
                        <li>
                            <a href="">Vuelos</a>
                        </li>
                    </ul>
                </div>

                <CartWidget/>

            </nav>
        </header>

    )
};

export default Navbar;