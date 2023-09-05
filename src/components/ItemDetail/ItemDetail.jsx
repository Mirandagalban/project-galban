import { useState, useContext } from "react";
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetail = ({ producto }) => {
  const [quantityAdded, setQuantityAdded] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    Swal.fire({
      icon: "success",
      title: "Item agregado al carrito",
    });
    setQuantityAdded(cantidad);
    addItem(producto, cantidad);
  };
  return (
    <div className="container item-detail">
      <div>
        <h1 className="card-title-detail"> {producto.nombre} </h1>
        <h6 className="item-text mt-4">
          El armado del producto {producto.nombre} puede demorar{" "}
          {producto.armado}
        </h6>
        <p>{producto.descripcion}</p>
        <p>Precio: $ {producto.precio} </p>
        {!quantityAdded ? (
          <ItemCount stock={producto.stock} onAdd={onAdd} initial={1} />
        ) : (
          <Link to="/Cart" className="btn btn-primary mt-2">
            Ir al carrito
          </Link>
        )}
      </div>
      <div className="grid-img">
        <img src={producto.imagen} alt="" />
      </div>
    </div>
  );
};

export default ItemDetail;
