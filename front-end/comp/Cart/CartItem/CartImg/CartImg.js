import styles from "./CartImg.module.scss"
import Image from "next/image";

const CartImg = (props) =>{
	let imgSelect = '/sweatshirt.png';

	if(props. product == 'Sweat Shirt')
		imgSelect = '/sweatshirt.png';
	else if (props. product == 'T-Shirt')
		imgSelect = '/tshirtleave.png';
	else if (props. product == 'Towel')
		imgSelect = '/towel.png';
  	else if (props. product == 'Towel')
		imgSelect = '/towel.png';
	else if (props. product == 'Mouse Pad')
		imgSelect = '/mousepad.png';
	else if (props. product == 'water bottle')
		imgSelect = '/water.png';
	else if (props. product == 'Coffee Mug')
		imgSelect = '/cooffemug.png';

	return(
		<Image src={imgSelect} alt="product-img" className={styles.productimg__2} width="200" height="200"/>
	);
};

export default CartImg