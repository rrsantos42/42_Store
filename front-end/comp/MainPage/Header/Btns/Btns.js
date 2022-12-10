import styles from "./Btns.module.css"
import HeaderbtnCard from "./HeaderCard/HeaderBtnCard";

const Btns = () =>{
	return(
		<div className={styles.Btns}>
				<HeaderbtnCard/>
				<button className={styles.user}>&#128512;</button>
		</div>
	);
}

export default Btns