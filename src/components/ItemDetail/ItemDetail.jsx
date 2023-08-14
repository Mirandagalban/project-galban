import React from "react";
import './itemdetail.css'
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail=({producto})=> {
    const onAdd = (cantidad)=> {
        console.log(`compraste ${cantidad} productos`)
      }
    return (
    
        <div className="container item-detail">
                <div>
                    <h1 className="card-title-detail"> {producto.nombre} </h1>
                    <h6 className="item-text mt-4">El armado del producto {producto.nombre} puede demorar {producto.armado}</h6>
                    <p>{producto.descripcion}</p>
                    <p>Precio: $ {producto.precio} </p>
                    <ItemCount stock= {producto.stock} onAdd={onAdd} initial={1}/>
                </div>
                <div className="grid-img">
                    <img src={producto.imagen} alt="" />
                </div>
        </div>
        
    )
};

export default ItemDetail;