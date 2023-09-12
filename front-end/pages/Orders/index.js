import Header from "../../comp/Header/header"
import OrdersPage from "../../comp/OrdersPage/OrdersPage";
import styles from '../../styles/Backgroud.module.scss'
import axios from "axios";

export async function getStaticProps() {
	const productsUrl =
    "https://store-test-c9b34-default-rtdb.firebaseio.com/.json"
  
	const res = await axios.get(productsUrl);
	let data = undefined;
    const Orders = res.data.orders
    if(res.data.Cart == undefined)
        data = 0;
    else
        data = res.data.Cart
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