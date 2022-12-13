import styles from "./Btns.module.css"
import HeaderbtnCard from "./HeaderCard/HeaderBtnCard";
import Profile from "./Profile/Profile";

const Btns = () =>{
	return(
		<div className={styles.Btns}>
				<HeaderbtnCard/>
				<Profile/>
		</div>
	);
}

export default Btns