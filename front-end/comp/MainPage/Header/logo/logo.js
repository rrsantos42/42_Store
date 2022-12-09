import Mylogo from "../../../../public/imgs/logo.png"
import styles from "./logo.module.css"
const Logo = () =>{
	return(
		<img src={Mylogo} className={styles.logoimg} alt="logo"></img>
	);
}
export default Logo