import React from "react";
import "./ItemListContainer.css";

function ItemListContainer ({bienvenida}) {
    return (
        <main>
            <div className="containerCards">
                <h1>{bienvenida}</h1>
            </div>
        </main>
    )
}

export default ItemListContainer;