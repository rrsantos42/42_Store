import styles from "./Btns.module.scss"
import HeaderbtnCard from "./HeaderCard/HeaderBtnCard";
import Profile from "./Profile/Profile";

const Btns = (props) =>{
	return(
		<div className={styles.Btns}>
				<HeaderbtnCard data={props.data}/>
				<Profile/>
		</div>
	);
}

export default Btns