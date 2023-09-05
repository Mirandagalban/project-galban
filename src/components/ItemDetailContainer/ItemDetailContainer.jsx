import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemDetail/itemDetail.css";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const collectionProduct = collection(db, "productos");
    const referenceDoc = doc(collectionProduct, id);
    getDoc(referenceDoc)
      .then((res) => setProducto({ id: res.id, ...res.data() }))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="item-detail">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
