import { useState } from "react";
import styles from "./HeaderBtnCard.module.scss";
import { useRouter } from "next/router";
import { CiShoppingBasket } from "react-icons/ci";

const HeaderbtnCard = () => {
  const router = useRouter();
  const [CartItems, SetCartItems] = useState(0);

  const cartHandler = () => {
    router.push({
      pathname: "/Cart",
    });
  };
  return (
    <button type="button" class="btn btn-primary position-relative" onClick={cartHandler}>
      <CiShoppingBasket className={styles.Carticon}/>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {CartItems}
      </span>
    </button>
  );
};

export default HeaderbtnCard;
