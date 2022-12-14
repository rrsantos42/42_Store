import styles from "./SearchBar.module.scss"


const SearchBar = () =>{
	return(
		<div className={styles.Search}>
			<input type="text" placeholder="Search.." className={styles.Searchbar}/>
			<button className={styles.searchbtn}>&#128269;</button>
		</div>
	);
}

export default SearchBar