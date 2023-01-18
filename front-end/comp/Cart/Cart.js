import { useState,useEffect } from "react";
import styles from "./Cart.module.scss"
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
    const [cart, setCart] = useState(0);
    const [loading, setLoading] = useState(1)
    const productsUrl =
    "https://store-test-c9b34-default-rtdb.firebaseio.com/.json";

    useEffect(() => {
      setCart(Object.entries(props.data))
      setLoading(0);
  }, []);
    return(
        <div>
        {loading ? (
         <div className={styles.ldscircle}><div></div></div>
        ) : (
          <div>
            {cart.map( (item) => <CartItem Item={item} key={item[1].id}/>)}
          </div>
        )}
      </div>
    );
};

export default Cart