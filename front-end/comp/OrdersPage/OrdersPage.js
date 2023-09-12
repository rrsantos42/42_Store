import styles from "./OrdersPage.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Order from "./Order/Order";

const OrdersPage = (props) => {

    const [OrdersData, setOrders] = useState([]);
    const [Loading, setLoading] = useState("loading");
    useEffect(()=>{
        setOrders(props.Orders);
        setLoading("")

    },[]);


  return(
  <div className={styles.OrdersMainContainer}>
    {Loading ? (<div>Loading</div>) : 
    (OrdersData.map((order) =>  <Order Order={order} key={order.id}/>))}
  </div>
  );
};

export default OrdersPage