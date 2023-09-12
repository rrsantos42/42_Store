import styles from "./header.module.scss"
import Logo from "./logo/logo";
import SearchBar from "./SearchBar/SearchBar";
import Btns from "./Btns/Btns";


const Header = (props) => {

	return(
		<div className={styles.navcontainer}>
			<Logo/>
			<SearchBar/>
			<Btns data={props.data}/>
		</div>
	);
}


export default Header