import styles from "./MainContainer.module.css";
import ProductImg from "./ProductImg/ProductImg";
import Description from "./Description/Description";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const MainContainer = () => {
  const router = useRouter();

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
  return (
    <div>
      {loading ? (
       <div className={styles.ldscircle}><div></div></div>
      ) : (
        <div className={styles.mainContainer}>
          <ProductImg />
          <Description product={product} />
        </div>
      )}
    </div>
  );
};

export default MainContainer;