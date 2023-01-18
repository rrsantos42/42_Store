import Header from "../../comp/Header/header"
import OrdersPage from "../../comp/OrdersPage/OrdersPage";
import styles from '../../styles/Backgroud.module.scss'
import axios from "axios";

export async function getStaticProps() {
	const productsUrl =
    "https://store-test-c9b34-default-rtdb.firebaseio.com/.json"
  
	const res = await axios.get(productsUrl);
	const data = res.data.Cart;
    const Orders = res.data.orders

	return {
		props: {
      		data,
            Orders
    	},
  	};
}



const Orders = (props) =>{

    return(
        <div className={styles.mainbody}>
            <Header data={props.data}/>
            <OrdersPage Orders={props.Orders}/>
        </div>

    );
};

export default Orders