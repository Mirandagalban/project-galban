import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <Card style={{ width: "16rem" }} className="product-card">
      <Card.Img variant="top" src={prod.imagen} />
      <Card.Body>
        <Card.Title className="card-title">{prod.nombre}</Card.Title>
        <Card.Text>Precio: $ {prod.precio}</Card.Text>
        <Button
          as={Link}
          to={`/item/${prod.id}`}
          className="opacity-75 "
          id={prod.id}
          variant="primary"
        >
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
