import styles from "./ProductImg.module.css"
import Image from "next/image";
const ProductImg = () =>{
	return(
			<Image src="/sweat.png" alt="product-img" className={styles.productimg__2} width="400" height="500"/>
	);
};

export default ProductImg