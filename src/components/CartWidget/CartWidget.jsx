import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { RiShoppingCartLine } from 'react-icons/ri';
import { CartContext } from '../../context/CartContext';
const CartWidget = () => {

  const {cartQuantity} = useContext (CartContext)
  return (
    <div className='btn-cart'>
    < Button type="button" variant="light" className='cart-btn'>
      <RiShoppingCartLine fontSize="23px" /> 
      {cartQuantity () > 0 && <Badge bg="light" style={{color:'black', padding:'6px' }}>{cartQuantity()}</Badge>}
      </Button>
    </div>
  );
};

export default CartWidget;
