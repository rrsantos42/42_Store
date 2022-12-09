import styles from "./SearchBar.module.css"


const SearchBar = () =>{
	return(
		<div className={styles.Search}>
			<input type="text" placeholder="Search.." className="Search-bar"/>
			<button className={styles.searchbtn}>&#128269;</button>
		</div>
	);
}

export default SearchBar