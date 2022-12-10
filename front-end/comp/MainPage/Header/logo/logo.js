import Image from "next/image"
import styles from "./logo.module.css"
const Logo = () =>{
	return(
		<Image src="/logo.png" className={styles.logoimg} alt="logo" width= "300" height="100"></Image>
	);
}
export default Logo