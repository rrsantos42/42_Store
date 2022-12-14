import Header from '../../comp/MainPage/Header/header';
import styles from '../../styles/Backgroud.module.scss'
import OrdersPage from '../../comp/OrdersPage/OrdersPage';

const Orders = () =>{

    return(
        <div className={styles.mainbody}>
            <Header/>         
            <OrdersPage/>
        </div>

    );
};

export default Orders
