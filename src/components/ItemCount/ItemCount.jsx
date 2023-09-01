import React, {useState} from "react";
import Button from 'react-bootstrap/Button';


const ItemCount= ({stock, onAdd, initial})=> {
    const [count , SetCount]= useState(initial)


    const restar =() => {
        if (count >0 ){
        SetCount (count-1)
        }
    }
    const sumar =() => {
        //if (count<stock) {
        SetCount(count + 1)
        //}
    }

    return (
    <div className="d-flex flex-column align-items-center opacity-75  ">
        <div >
            <Button onClick={restar}>-</Button>
            <span className="btn">{count}</span>
            <Button onClick={sumar}>+</Button>
        </div>
        <Button className="mt-2" disabled= {count===0 || count>stock} onClick={()=>onAdd(count)} >Comprar</Button>
    </div>
        
    )
}

export default ItemCount;