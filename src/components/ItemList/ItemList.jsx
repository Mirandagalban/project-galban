import Item from "../Item/Item";
import "../Item/item.css";

const ItemList = ({ products }) => {
  return (
    <div className="product-container">
      {products.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;
