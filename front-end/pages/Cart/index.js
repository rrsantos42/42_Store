import  Header  from "../../comp/Header/header";
import styles from '../../styles/Backgroud.module.scss'
import Cart from "../../comp/Cart/Cart";
import axios from "axios";


export async function getStaticProps() {
	const productsUrl =
    "https://store-test-c9b34-default-rtdb.firebaseio.com/.json"
  
	const res = await axios.get(productsUrl);
	let data = undefined 
	if(res.data.Cart == undefined)
		data = 0;
	else	
		data = res.data.Cart;
	return {
		props: {
      		data,
    	},
  	};
}


const CartPage = (props) => {

  return (
    <div className={styles.mainbody}>
      <Header data={props.data}/>
      <Cart data={props.data}/>
    </div>
  );
};

export default CartPage