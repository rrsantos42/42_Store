import styles from "./ProductPage.module.scss";
import ProductImg from "./ProductImg/ProductImg";
import Description from "./Description/Description";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductPage = () => {
  const router = useRouter();
  let SelectedProduct = [];

  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState("Loading");

  const productUrl =
    "https://store-test-c9b34-default-rtdb.firebaseio.com/.json";

  useEffect(() => {
    const getProduct = async () => {
      setProducts((await axios(productUrl)).data.Products);
      setLoading("")
    };

    getProduct();
  }, []);

  if(!loading)
  {
    let i = 0;
    for (;product[i].type != router.query.productSelected; i++);
    
    SelectedProduct = product[i];
  }

  return (
    <div className={styles.ContainerProduct}>
      {loading ? (
       <div className={styles.ldscircle}><div></div></div>
      ) : (
        <div className={styles.mainContainer}>
          <ProductImg product={SelectedProduct}/>
          <Description product={SelectedProduct} />
        </div>
      )}
    </div>
  );
};

export default ProductPage;