import { useEffect, useState } from "react";
import "../NavBar/navbar.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ItemListContainer = ({ greeting, title }) => {
  const [products, setProducts] = useState([]);
  const { categoriaId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const coleccionProductos = categoriaId
      ? query(
          collection(db, "productos"),
          where("categoria", "==", categoriaId)
        )
      : collection(db, "productos");
    getDocs(coleccionProductos)
      .then((res) => {
        const list = res.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        setProducts(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border spinner-border-lg " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="welcome">
            <h1 className="welcome-title">{greeting}</h1>
            <p className="welcome-txt"> {title}</p>
          </div>
          <div className="item-list-container">
            <ItemList products={products} />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
