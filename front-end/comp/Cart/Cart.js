import { useState,useEffect } from "react";
import styles from "./Cart.module.scss"
import CartItem from "./CartItem/CartItem";
import axios from "axios";
const Cart = () => {
    const [cart, setCart] = useState(0);
    const [loading, setLoading] = useState(1)
    const productsUrl =
    "https://store-test-c9b34-default-rtdb.firebaseio.com/.json";

    useEffect(() => {
    const getProduct = async () => {
      setCart(Object.entries(((await axios(productsUrl)).data.Cart)))
      setLoading(0);
      console.log(cart)
    };

    getProduct();
  }, []);
    return(
        <div>
        {loading ? (
         <div className={styles.ldscircle}><div></div></div>
        ) : (
          <div>
            {cart.map( (item) => <CartItem Item={item} key={item.id}/>)}
          </div>
        )}
      </div>
    );
};

export default Cart