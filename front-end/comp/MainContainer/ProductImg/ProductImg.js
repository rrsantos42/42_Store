import styles from "./ProductImg.module.css"
import Image from "next/image";
import { useRouter } from "next/router";

const ProductImg = (props) =>{
	
	const router = useRouter();
	let imgSelect = '/sweatshirt.png'
	let i = 0;
	
	for (;props.product[i].type != router.query.productSelected; i++);
	
	let SelectedProduct = props.product[i];

	if(SelectedProduct.type== 'Sweat Shirt')
    	imgSelect = '/sweatshirt.png';
	if(SelectedProduct.type == 'T-Shirt')
    	imgSelect = '/tshirtleave.png';
	if(SelectedProduct.type == 'Towel')
    	imgSelect = '/towel.png';
  	if(SelectedProduct.type == 'Towel')
    	imgSelect = '/towel.png';
	if(SelectedProduct.type == 'Mouse Pad')
    	imgSelect = '/mousepad.png';
	if(SelectedProduct.type == 'water bottle')
    	imgSelect = '/water.png';
	if(SelectedProduct.type == 'Coffee Mug')
   	 imgSelect = '/cooffemug.png';

	return(
			<Image src={imgSelect} alt="product-img" className={styles.productimg__2} width="400" height="500"/>
	);
};

export default ProductImg