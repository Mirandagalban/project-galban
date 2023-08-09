import React from "react";
import './itemdetail.css'
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail=({producto})=> {
    const oferta = producto.precio - ((producto.precio*20)/100);
    const onAdd = (cantidad)=> {
        console.log(`compraste ${cantidad} productos`)
      }


    return (
    
        <div className="container item-detail">
                <div className="grid">
                    <h3 className="card-title">Aprovecha nuestra OFERTA!</h3>
                    <h6 className="item-text mt-4">¡Promo lanzamiento!</h6>
                    <p> {producto.nombre} con un 20% de descuento!</p>
                    <p> solo por: ${oferta}</p>
                    <ItemCount stock= {producto.stock} onAdd={onAdd} initial={1}/>
                </div>
                <div className="grid-img">
                    <img  src={producto.imagen} alt="" />
                </div>
        </div>
        
    )
};

export default ItemDetail;