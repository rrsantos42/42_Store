import styles from "./SearchBar.module.scss"
import { CiSearch } from "react-icons/ci"

const SearchBar = () =>{
	return(
		<div className={styles.Search}>
			<input type="text" placeholder="Search.." className={styles.Searchbar}/>
			<button className={styles.searchbtn}><CiSearch/></button>
		</div>
	);
}

export default SearchBar