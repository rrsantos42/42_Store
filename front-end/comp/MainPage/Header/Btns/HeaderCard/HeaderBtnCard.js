import { useState } from "react";
import CartIcon from "./btn-card/CardIcon";
import styles from "./HeaderBtnCard.module.css";
const HeaderbtnCard = () =>{

	const [CartItems, SetCartItems] = useState(0)

	return(
		<button className={styles.button}>
			<span className={styles.icon}>
				<CartIcon/>
			</span>
			<span>
				Your Cart
			</span>
			<span className={styles.badge}>
				{CartItems}
			</span>

		</button>
	);
};

export default HeaderbtnCard