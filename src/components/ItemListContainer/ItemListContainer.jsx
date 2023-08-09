import React, { useEffect, useState } from "react";
import '../NavBar/navbar.css'
import { getProducts } from "../../mock/data";
import ItemList from "../ItemList/itemList";

 const ItemListContainer = ({greeting, title }) => {
  const [products, setProducts] = useState ([])
  useEffect (()=>{
  getProducts()
  .then((res)=> setProducts(res))
  .catch((error)=>console.error(error))
   }, [] )
  
 

    return (
        <>
        <div className="welcome">
            <h1 className="welcome-title">{greeting}</h1>
            <p className="welcome-txt"> {title}</p>
         </div>
         <ItemList products={products}/>
         </>
    )
};

export default ItemListContainer;