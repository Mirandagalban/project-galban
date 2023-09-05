import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Local storage
  const storedCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          if (product.id === item.id) {
            return { ...product, quantity: product.quantity + quantity };
          } else {
            return product;
          }
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const clear = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  const total = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.precio, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clear,
        cartQuantity,
        deleteItem,
        isInCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
