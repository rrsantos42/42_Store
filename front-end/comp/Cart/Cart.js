import { useState,useEffect } from "react";
import styles from "./Cart.module.scss"
import CartItem from "./CartItem/CartItem";
import Receipt from "./receipt/receipt";


const Cart = (props) => {
    const [cart, setCart] = useState(0);
    const [loading, setLoading] = useState(1)

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
          <div className={styles.CardContainer}>
            {cart.map( (item) => <CartItem Item={item} key={item[1].id}/>)}
          </div>
              <Receipt/>
          </div>
        )}
      </div>
    );
};

export default Cart