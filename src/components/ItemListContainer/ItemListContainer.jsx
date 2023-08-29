import React, { useEffect, useState } from "react";
import '../NavBar/navbar.css'
import { getProducts } from "../../mock/data";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router-dom";


 const ItemListContainer = ({greeting, title }) => {
  const [products, setProducts] = useState ([])
  const{categoriaId} = useParams()
  const [loading, setLoading]= useState(false)

  useEffect (()=>{
    setLoading(true)
  getProducts()
  .then((res)=> {
    if (categoriaId){
        setProducts (res.filter((item)=> item.categoria == categoriaId))
    }else{
        setProducts(res)
    }
  })
  .catch((error)=>console.error(error))
  .finally(()=> setLoading(false))
   }, [categoriaId] )


    return (
       <div>
        {
            loading ? 
            <div className="d-flex justify-content-center mt-5" >
            <div className="spinner-border spinner-border-lg "  role="status" >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div> 
          :
          <>
        <div className="welcome">
            <h1 className="welcome-title">{greeting}</h1>
            <p className="welcome-txt"> {title}</p>
         </div>
         <div className="item-list-container"> 
         <ItemList products={products}/>
         </div>
         </>
        }
        </div>
       
        
    )
};

export default ItemListContainer;