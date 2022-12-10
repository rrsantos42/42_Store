import styles from "./Description.module.css";
import Selector from "./Selector/Selector";
import QuantitySelection from "./QuantitySelection/QuantitySelection";
import AddToCart from "./AddToCart/AddToCart";
import { useRouter } from "next/router";

const Description = (props) => {
  const router = useRouter();
  let i = 0;
  for (;props.product[i].type != router.query.productSelected; i++);

  let SelectedProduct = props.product[i];

  return (
    <div className={styles.descriptionContainer}>
      <h2 className={styles.header}>{SelectedProduct.type}</h2>
      <p className={styles.description}>{SelectedProduct.descreption}</p>
      <p className={styles.price__description}>{SelectedProduct.price}$</p>
      <Selector />
      <QuantitySelection />
      <AddToCart />
    </div>
  );
};

export default Description;
