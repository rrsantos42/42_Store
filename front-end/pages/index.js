import Header from "../comp/Header/header";
import Items from '../comp/MainPage/Items/Items';
import styles from '../styles/Backgroud.module.scss'
import axios from 'axios';
export async function getStaticProps() {
	const productsUrl =
    "https://store-test-c9b34-default-rtdb.firebaseio.com/.json"
  
	const res = await axios.get(productsUrl);
	const data = res.data.Cart;
	const Item = res.data.Products

	return {
		props: {
      		data,
			Item

    	},
  	};
}

const MainPage = (props) => {
	return(
	<div className={styles.mainbody}>
		<Header data={props.data}/>
		<Items Products={props.Item}/>
	  </div>
	);
}
export default MainPage