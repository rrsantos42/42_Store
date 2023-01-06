import Header from "../../comp/MainPage/Header/header";
import ProductPage from "../../comp/ProductPage/ProductPage";
import styles from '../../styles/Backgroud.module.scss'
const ProductIdPage = () => {
  
        return(
            <div className={styles.mainbody}>
                <Header/>
                <ProductPage/>
            </div>
        );
};

export default ProductIdPage