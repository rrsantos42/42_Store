
import styles from "./Item.module.scss";
import { useRouter } from "next/router";
import Card from 'react-bootstrap/Card';

const Item = (props) => {
  const router = useRouter();
  let imgSelect = '/sweatshirt.png';
  
  const productHandler = () => {
    router.push({
      pathname: "/[id]",
      query: {id: props.product.id,
				productSelected: props.product.type},
    });
  };

  if(props.product.type == 'Sweat Shirt')
    imgSelect = '/sweatshirt.png';
  else if(props.product.type == 'T-Shirt')
    imgSelect = '/tshirtleave.png';
  else if(props.product.type == 'Towel')
    imgSelect = '/towel.png';
  else if(props.product.type == 'Towel')
    imgSelect = '/towel.png';
  else if(props.product.type == 'Mouse Pad')
    imgSelect = '/mousepad.png';
  else if(props.product.type == 'water bottle')
    imgSelect = '/water.png';
  else if(props.product.type == 'Coffee Mug')
    imgSelect = '/cooffemug.png';

  return (
    <button className={styles.productbtns} onClick={productHandler}>
      <Card border="dark">
        <Card.Img
          src={imgSelect}
          alt="Product"
          className={styles.productimg}
          width="200"
          height="240"
        />
        <Card.Title bsPrefix='card-text' className={styles.descrep}>{props.product.type}</Card.Title>
        <Card.Text className={styles.price}>{props.product.price}€</Card.Text>
      </Card>
    </button>
  );
};

export default Item;
