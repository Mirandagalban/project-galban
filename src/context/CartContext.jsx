import { createContext, useEffect, useState } from "react";

 export const CartContext= createContext ()

 export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([])

     // Local storage 
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);

      /*useEffect(() => {
        const cartStored = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
         setCart(cartStored);
        }
      }, []);*/
    console.log(cart)
    const addItem = (item, quantity) => {
        if (isInCart (item.id )){
            setCart(cart.map((product)=> {
                if (product.id === item.id){
                    return{...product, quantity: product.quantity + quantity}
                }else {
                    return product
                }
            }))
        }else {
            setCart([...cart, {...item,quantity}])
            
            }
        }
    

    const cartQuantity=()=>{
        return cart.reduce((acc,item)=> acc + item.quantity, 0)
    }

    const clear = ()=> {
        setCart([])
    }

    const deleteItem = (id) => {
        setCart (cart.filter ((item)=> item.id !== id ))
    }
    const isInCart= (id)=> {
        return cart.find ((item)=> item.id === id)
    }

    const total = ()=>{
        return cart.reduce ((acc, item)=> acc + item.quantity * item.precio, 0 )
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, cartQuantity, deleteItem, isInCart, total}}>
            {children}
        </CartContext.Provider>
    )
 }