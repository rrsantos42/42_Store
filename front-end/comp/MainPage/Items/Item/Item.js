import Image from "next/image";
import styles from "./Item.module.css";
import { useRouter } from "next/router";

const Item = (props) => {
  const router = useRouter();

  const productHandler = () => {
    router.push({
      pathname: "/[id]",
      query: {id: props.product.id,
				productSelected: props.product.type},
    });
  };
  return (
    <button className={styles.productbtns} onClick={productHandler}>
      <div className={styles.productcontainer}>
        <Image
          src="/sweat.png"
          alt="Product"
          className={styles.productimg}
          width="220"
          height="280"
        />
        <p>{props.product.type}</p>
        <p className={styles.price}>{props.product.price} €</p>
      </div>
    </button>
  );
};

export default Item;
