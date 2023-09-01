import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './cartlist.css'

const CartList = ({item}) => {
    const {deleteItem}= useContext(CartContext)
return (
   <div className="cart-list">
            <div className="cart-list-table mt-2">
                <img src={item.imagen} alt={item.nombre} width={90}/>
                <p>{item.nombre}</p>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad seleccionada: {item.quantity}</p>
                <p>Subtotal: ${item.quantity*item.precio}</p>
                <button className="btn btn-danger btn-x " onClick={()=> deleteItem(item.id)}>X</button>
                </div>
    </div>
   )
}

export default CartList