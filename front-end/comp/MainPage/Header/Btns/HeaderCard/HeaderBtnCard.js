import { useState } from "react";
import CartIcon from "./btn-card/CardIcon";
import styles from "./HeaderBtnCard.module.css";
import { useRouter } from "next/router";

const HeaderbtnCard = () =>{
	const router = useRouter();
	const [CartItems, SetCartItems] = useState(0)

	const cartHandler = () => {
		router.push({
			pathname: "/Cart",
		  });
	}
	return(
		<button className={styles.button} onClick={cartHandler}>
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