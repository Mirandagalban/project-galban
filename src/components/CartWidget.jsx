import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { RiShoppingCartLine } from 'react-icons/ri';
import './components.css'

const CartWidget = () => {
  return (
    <div className='btn-cart'>
    < Button type="button" variant="light">
      <RiShoppingCartLine fontSize="23px" /> <Badge bg="dark">0</Badge>
    </Button>
    </div>
  );
};

export default CartWidget;
