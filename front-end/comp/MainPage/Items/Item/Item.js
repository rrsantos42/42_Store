
import styles from "./Item.module.scss";
import { useRouter } from "next/router";
import Card from 'react-bootstrap/Card';


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
      <Card border="dark">
        <Card.Img
          src="/sweat.png"
          alt="Product"
          className={styles.productimg}
          width="220"
          height="280"
        />
        <Card.Title bsPrefix='card-text' className={styles.descrep}>{props.product.type}</Card.Title>
        <Card.Text className={styles.price}>{props.product.price}€</Card.Text>
      </Card>
    </button>
  );
};

export default Item;
