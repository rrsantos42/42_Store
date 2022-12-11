import Image from "next/image"
import styles from "./logo.module.css"
import { useRouter } from "next/router"
const Logo = () =>{
	const router = useRouter();
	const logoHandler = () => {
		router.push({
			pathname: "/"
		})
	}

	return(
		<Image src="/logo.png" className={styles.logoimg} alt="logo" width= "300" height="100" onClick={logoHandler}></Image>
	);
}
export default Logo