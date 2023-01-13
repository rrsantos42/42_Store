import { useState, useEffect } from "react";
import styles from "./HeaderBtnCard.module.scss";
import { useRouter } from "next/router";
import { CiShoppingBasket } from "react-icons/ci";
import axios from "axios";

export async function getStaticProps(context) {
  const productsUrl =
    "https://store-test-c9b34-default-rtdb.firebaseio.com/.json";
    const res = await axios.get(productsUrl);
    const posts = await res.json
    return {
        props: {
            posts
        }
    };
}

const HeaderbtnCard = (props) => {
  const router = useRouter();
  const [NbrItems, SetNbrItems] = useState("");
  const [CartItems, SetCartItems] = useState([]);

  function countProperties(obj) {
    return Object.keys(obj).length;
}
console.log(props.post)
  // useEffect(() => {
  //   console.log(props.data)
  //     SetCartItems(props.res)
  //     if(CartItems == undefined)
  //       SetNbrItems(0);
  //     else
  //       SetNbrItems(countProperties(CartItems));
  // },[CartItems]);


  const cartHandler = () => {
    router.push({
      pathname: "/Cart",
    });
  };
  return (
    <button type="button" className="btn btn-info position-relative" onClick={cartHandler}>
      <CiShoppingBasket className={styles.Carticon}/>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {NbrItems}
      </span>
    </button>
  );
};

export default HeaderbtnCard;
