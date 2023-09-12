import Image from "next/image"
import styles from "./logo.module.scss"
import { useRouter } from "next/router"
const Logo = () =>{
	const router = useRouter();
	const logoHandler = () => {
		router.push({
			pathname: "/"
		})
	}

	return(
		<Image src="/logo.png" className={styles.logoimg} alt="logo" height={100} width={300} onClick={logoHandler}></Image>
	);
}
export default Logo