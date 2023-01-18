import Header from "../../comp/Header/header";
import ProductPage from "../../comp/ProductPage/ProductPage";
import styles from '../../styles/Backgroud.module.scss'
import axios from 'axios';


export async function getStaticPaths() {
    const res = await axios.get( "https://store-test-c9b34-default-rtdb.firebaseio.com/.json");
    const products = res.data.Products;
  
    const paths = products.map((product) => ({
      params: { id: product.id.toString() },
    }));
  
    return { paths, fallback: false };
  }

export async function getStaticProps() {
	const productsUrl =
    "https://store-test-c9b34-default-rtdb.firebaseio.com/.json"
  
	const res = await axios.get(productsUrl);
	const data = res.data.Cart;

	return {
		props: {
      		data,
    	},
  	};
}


const ProductIdPage = (props) => {
  
        return(
            <div className={styles.mainbody}>
                <Header data={props.data}/>
                <ProductPage/>
            </div>
        );
};

export default ProductIdPage