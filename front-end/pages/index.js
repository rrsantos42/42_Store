import Header from "../comp/MainPage/Header/header";
import Items from '../comp/MainPage/Items/Items';


const MainPage = (props) => {
	return(
	<div>
		<Header/>
		<Items product={props.product}/>
	  </div>
	);
}
export default MainPage