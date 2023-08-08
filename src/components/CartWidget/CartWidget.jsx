import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { RiShoppingCartLine } from 'react-icons/ri';

const CartWidget = () => {
  return (
    <div className='btn-cart'>
    < Button type="button" variant="light" className='cart-btn'>
      <RiShoppingCartLine fontSize="23px" /> <Badge bg="light" style={{color:'black'}}>0</Badge>
    </Button>
    </div>
  );
};

export default CartWidget;
