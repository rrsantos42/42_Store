import  Header  from "../../comp/Header/header";
import styles from '../../styles/Backgroud.module.scss'
import Cart from "../../comp/Cart/Cart";
const CartPage = () => {

  return (
    <div className={styles.mainbody}>
      <Header/>
      <Cart/>
    </div>
  );
};

export default CartPage