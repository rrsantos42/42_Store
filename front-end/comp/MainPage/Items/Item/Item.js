import img from "../../../../public/imgs/sweat.png"
import styles from "./Item.module.css"


const Item = (props) => {

	const history = useHistory();
	return(
		<button className={styles.productbtns} onClick={() => 
			history.push('/42Store/product')}
			>
			<div className={styles.productcontainer}>
				<img src={img} alt="Product" className={styles.productimg}></img>
				<p>{props.product.type}</p>
				<p className={styles.price}>{props.product.price} €</p>

			</div>
		</button>
	);
}

export default Item