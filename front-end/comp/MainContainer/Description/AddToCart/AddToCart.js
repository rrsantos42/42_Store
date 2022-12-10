import styles from "./AddToCart.module.css"

const AddToCart = () =>{

	const BtnCartHandler = () => {

	}
	return(
				<button className={styles.cradBtn}  onClick={BtnCartHandler}>Add To Cart</button>
	);
};

export default AddToCart