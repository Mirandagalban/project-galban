import React, { useEffect, useState } from "react";
import '../NavBar/navbar.css'
import ItemCount from "../ItemCount/ItemCount";
import { getProducts } from "../../mock/data";

 const ItemListContainer = ({greeting, title }) => {
  const [products, setProducts] = useState ([])
  useEffect (()=>{
  getProducts()
  .then((res)=> setProducts(res))
  .catch((error)=>console.error(error))
   }, [] )
  
  const onAdd = (cantidad)=> {
    console.log(`compraste ${cantidad} productos`)
  }

    return (
        <>
        <div className="welcome">
            <h1 className="welcome-title">{greeting}</h1>
            <p className="welcome-txt"> {title}</p>
         </div>
         <ItemCount stock= {5} onAdd={onAdd} initial={1}/>
         </>
    )
};

export default ItemListContainer;