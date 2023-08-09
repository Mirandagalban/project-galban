import React from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import './item.css'

const Item = ({prod})=> {
    return (
    <Card style={{ width: '18rem' }} className="product-card">
      <Card.Img variant="top" src= {prod.imagen} />
      <Card.Body>
        <Card.Title className="card-title">{prod.nombre}</Card.Title>
        <Card.Text>
        {prod.descripcion}
        <p>El armado del producto {prod.nombre} puede demorar {prod.armado}</p>
        <h6>Precio: $ {prod.precio}</h6>
        </Card.Text>
        <Button className="opacity-75 " id= {prod.id} variant="primary" >Agregar</Button>
      </Card.Body>
    </Card>
    )
}

export default Item;
