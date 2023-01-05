import styles from "./Description.module.scss";
import Selector from "./Selector/Selector";
import QuantitySelection from "./QuantitySelection/QuantitySelection";
import AddToCart from "./AddToCart/AddToCart";

const Description = (props) => {

  return (
    <div className={styles.descriptionContainer}>
      <h2 className={styles.header}>{props.product.type}</h2>
      <p className={styles.description}>{props.product.descreption}</p>
      <p className={styles.price__description}>{props.product.price}€</p>
      <Selector product={props.product}/>
      <QuantitySelection />
      <AddToCart />
    </div>
  );
};

export default Description;
