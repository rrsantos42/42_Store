import { useState } from "react";
import styles from "./Cart.module.css"
import CartItem from "./CartItem/CartItem";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const productUrl =
    "https://store-test-c9b34-default-rtdb.firebaseio.com/Cart.json";

    useEffect(() => {
    const getProduct = async () => {
      setCart((await axios(productUrl)).data.Products);
      setLoading("")
    };

    getProduct();
  }, []);
    return(
        <div>
        {loading ? (
         <div className={styles.ldscircle}><div></div></div>
        ) : (
          <div>
            {cart.map( (item) => <CartItem Item={item}/>)}
          </div>
        )}
      </div>
    );
};

export default Cart