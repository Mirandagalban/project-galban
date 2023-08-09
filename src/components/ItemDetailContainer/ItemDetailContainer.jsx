import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getItem } from "../../mock/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import '../ItemDetail/itemDetail.css'



const ItemDetailContainer = ()=> {
    const [producto, setProducto] = useState ({})
    useEffect(()=>{
        getItem()
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

