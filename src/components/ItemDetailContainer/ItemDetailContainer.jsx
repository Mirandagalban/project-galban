import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getItem } from "../../mock/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import '../ItemDetail/itemDetail.css'
import { useParams } from "react-router-dom";



const ItemDetailContainer = ()=> {

    const [producto, setProducto] = useState ({})
    const {id} = useParams()


    useEffect(()=>{
        getItem(Number(id))
            .then((res) => setProducto(res))
            .catch((error) => console.error(error));
    } , [])

    return (
        
        <div className="item-detail">
            <ItemDetail producto={producto}/>
        </div>
        
    )
}

export default ItemDetailContainer;

