import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import '../CartList/cartlist.css'

const Cart = ()=> {
    const{cart, clear, total}= useContext(CartContext)
    return (   
        <div>
            {cart.length ? 
            <div>
            <h5 className="mt-4 ms-4">Productos seleccionados:</h5>
             {cart.map ((item)=> <CartList key={item.id} item={item}/>)}
            <h3>Total a pagar : ${total()}</h3>
            <section>
            <button className= 'btn btn-danger m-4 mt-2' onClick={clear}> Vaciar carrito </button>
            <button className="btn btn-primary m-4 mt-2"> Finalizar compra </button>
            </section>
            </div>
            :<div className="empty-cart">
            <h4>Tu carrito esta vacio :( </h4>
            <Link to='/' className='btn btn-light'>Ir a comprar</Link>
            </div> }
        </div>
    )
 
}
export default Cart
