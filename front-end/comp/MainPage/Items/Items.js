import Item from "./Item/Item";
import styles from "./Items.module.css";
import { useState, useEffect } from "react";
const Items = (props) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://store-test-c9b34-default-rtdb.firebaseio.com")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // });

  return (
    <div className={styles.Productcontainer}>
      {/* {props.product.map((product) => (
        <Item product={product} key={product.id} />
      ))} */}
    </div>
  );
};

export default Items;
