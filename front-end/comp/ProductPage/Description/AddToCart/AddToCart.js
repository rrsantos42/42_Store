import styles from "./AddToCart.module.scss"

const AddToCart = (props) =>{

	const BtnCartHandler =  () => {
	}
	return(
		<button className={styles.cartBtn}  onClick={BtnCartHandler}>Add To Cart</button>
	);
};

export default AddToCart