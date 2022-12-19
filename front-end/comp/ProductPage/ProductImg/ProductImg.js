import styles from "./ProductImg.module.css"
import Image from "next/image";


const ProductImg = (props) =>{
	
	let imgSelect = '/sweatshirt.png'
	let i = 0;

	if(props.product.type== 'Sweat Shirt')
    	imgSelect = '/sweatshirt.png';
	else if (props.product.type == 'T-Shirt')
    	imgSelect = '/tshirtleave.png';
	else if (props.product.type == 'Towel')
    	imgSelect = '/towel.png';
  	else if (props.product.type == 'Towel')
    	imgSelect = '/towel.png';
	else if (props.product.type == 'Mouse Pad')
    	imgSelect = '/mousepad.png';
	else if (props.product.type == 'water bottle')
    	imgSelect = '/water.png';
	else if (props.product.type == 'Coffee Mug')
   	 imgSelect = '/cooffemug.png';

	return(
			<Image src={imgSelect} alt="product-img" className={styles.productimg__2} width="400" height="500"/>
	);
};

export default ProductImg