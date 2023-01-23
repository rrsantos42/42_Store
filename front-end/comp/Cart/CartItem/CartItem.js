import styles from "./CartItem.module.scss"
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

const CartItem = (props) => {
    let imgSelect = '/sweatshirt.png'
    let productObj = props.Item[0]
    
    const deleteHandler = async () =>{

        await axios.delete(`https://store-test-c9b34-default-rtdb.firebaseio.com/Cart/${productObj}.json`);
        window.location.reload(false);
    }

	if(props.Item[1].Product == 'Sweat Shirt')
    	imgSelect = '/sweatshirt.png';
	else if (props.Item[1].Product == 'T-Shirt')
    	imgSelect = '/tshirtleave.png';
	else if (props.Item[1].Product == 'Towel')
    	imgSelect = '/towel.png';
  	else if (props.Item[1].Product == 'Towel')
    	imgSelect = '/towel.png';
	else if (props.Item[1].Product == 'Mouse Pad')
    	imgSelect = '/mousepad.png';
	else if (props.Item[1].Product == 'water bottle')
    	imgSelect = '/water.png';
	else if (props.Item[1].Product == 'Coffee Mug')
   	 imgSelect = '/cooffemug.png';

    return(
        <div className={styles.Card}>
            <Image src={imgSelect} alt="product-img" className={styles.productimg__2} width="200" height="200"/>
            <div className={styles.container}>
                <h1 className={styles.Type}>{props.Item[1].Product}</h1>
            <h3 className={styles.Size}>{props.Item[1].size}</h3>
                <h2 className={styles.descreption}>{props.Item[1].descreption}</h2>
            </div>
            <div className={styles.btnContainer}>
                <p className={styles.Quantity}>{props.Item[1].quantity}</p>
               <button className={styles.deleteBtn} onClick={deleteHandler}>{<FaTrashAlt/>}</button>           
            </div>
        </div>    
    );
};

export default CartItem