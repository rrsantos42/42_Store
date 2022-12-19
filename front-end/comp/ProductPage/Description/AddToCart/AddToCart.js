import styles from "./AddToCart.module.scss"

const AddToCart = () =>{

	const BtnCartHandler = async () => {
	}
	return(
		<button className={styles.cartBtn}  onClick={BtnCartHandler}>Add To Cart</button>
	);
};

export default AddToCart