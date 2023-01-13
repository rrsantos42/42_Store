import styles from "./Description.module.scss";
import Selector from "./Selector/Selector";
import QuantitySelection from "./QuantitySelection/QuantitySelection";
import { useState} from "react";
import axios from "axios";
import { useRouter } from "next/router"

const Description = (props) => {

  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);
  const router = useRouter();

  const BtnCartHandler = async () => {
    const res = await axios.post("https://store-test-c9b34-default-rtdb.firebaseio.com/Cart.json", {
      Product : props.product.type,
      size : size,
      quantity : quantity

    })
    router.push({
			pathname: "/"
		})
	}
  const Sizehandler = (value) =>{
    setSize(value)
  }

  const QuantityHandler = (value) => {
    setQuantity(value)
  }

  return (
    <div className={styles.descriptionContainer}>
      <h2 className={styles.header}>{props.product.type}</h2>
      <p className={styles.description}>{props.product.descreption}</p>
      <p className={styles.price__description}>{props.product.price}€</p>
      <Selector product={props.product} size={Sizehandler}/>
      <QuantitySelection   quantity={QuantityHandler}/>
      <button className={styles.cartBtn}  onClick={BtnCartHandler}>Add To Cart</button>
    </div>
  );
};

export default Description;
