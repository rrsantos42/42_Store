import Header from "../comp/MainPage/Header/header";
import Items from '../comp/MainPage/Items/Items';
import styles from '../styles/Backgroud.module.scss'

const MainPage = () => {
	return(
	<div className={styles.mainbody}>
		<Header/>
		<Items/>
	  </div>
	);
}
export default MainPage