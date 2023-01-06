import Header from "../../comp/MainPage/Header/header"
import OrdersPage from "../../comp/OrdersPage/OrdersPage";
import styles from '../../styles/Backgroud.module.scss'
const Orders = () =>{

    return(
        <div className={styles.mainbody}>
            <Header/>
            <OrdersPage/>
        </div>

    );
};

export default Orders