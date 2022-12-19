import styles from "./header.module.scss"
import Logo from "./logo/logo";
import SearchBar from "./SearchBar/SearchBar";
import Btns from "./Btns/Btns";

const Header = () => {
	return(
		<div className={styles.navcontainer}>
			<Logo/>
			<SearchBar/>
			<Btns/>
		</div>
	);
}


export default Header