import Image from "next/image"
import styles from "./Item.module.css"


const Item = (props) => {

	return(
		<button className={styles.productbtns}>
			<div className={styles.productcontainer}>
				<Image src="/sweat.png" alt="Product" className={styles.productimg} width="220" height="280" />
				<p>{props.product.type}</p>
				<p className={styles.price}>{props.product.price} €</p>

			</div>
		</button>
	);
}

export default Item