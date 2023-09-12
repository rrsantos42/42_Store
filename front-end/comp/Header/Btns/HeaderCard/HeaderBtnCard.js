import { useState, useEffect } from "react";
import styles from "./HeaderBtnCard.module.scss";
import { useRouter } from "next/router";
import { AiOutlineShoppingCart } from "react-icons/ai";



const HeaderbtnCard = (props) => {
  const router = useRouter();
  const [NbrItems, SetNbrItems] = useState(0);
  const [CartItems, SetCartItems] = useState(0);

  function countProperties(obj) {
    if(obj == undefined)
      return(0);
    return Object.keys(obj).length;
  }

  useEffect(() => {
      SetCartItems(props.data);
      SetNbrItems(countProperties(CartItems));

  },[CartItems]);

  const cartHandler = () => {
    router.push({
      pathname: "/Cart",
    });
  };
  return (
    <button type="button" className="btn btn-info position-relative" onClick={cartHandler}>
      <AiOutlineShoppingCart className={styles.Carticon}/>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {NbrItems}
      </span>   
    </button>
  );
};


export default HeaderbtnCard;
