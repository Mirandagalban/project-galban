import React from "react";

const Item = ({prod})=> {
    return (
        <>
        <div className="product-container" key = {id}>
            <img src={prod.imagen} alt="" />
            <h3>{prod.nombre}</h3>
            <p>{prod.descripcion}</p>
            <p>${prod.precio}</p>
            <p>El armado del producto {prod.nombre} puede demorar {armado}</p>
            <button id= {prod.id}>Agregar</button>
        </div>
        </>
    )
}

export default Item;
