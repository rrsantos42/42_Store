import Item from "./Item/Item";
import styles from "./Items.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Items = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("Loading");

  const productsUrl =
    "https://store-test-c9b34-default-rtdb.firebaseio.com/.json";

  useEffect(() => {
    console.log("USE_EF");

    const getProducts = async () => {
      setProducts((await axios(productsUrl)).data.Products);
      setLoading("");
    };

    getProducts();
  },[]);

  return (
    <div className={styles.Productcontainer}>
      {loading ? (
        <p>{loading}</p>
      ) : (
        products.map((product) => <Item product={product} key={product.id} />)
      )}
    </div>
  );
};

export default Items;
