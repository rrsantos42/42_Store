import Item from "./Item/Item";
import styles from "./Items.module.scss";
import { useState, useEffect } from "react";

const Items = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("Loading");

  useEffect(() => {

      setProducts(props.Products);
      setLoading("");

  },[]);

  return (
    <div className={styles.Productcontainer}>
      {loading ? (
       <div className={styles.ldscircle}><div></div></div>
      ) : (
        products.map((product) => <Item product={product} key={product.id} />)
      )}
    </div>
  );
};


export default Items;
