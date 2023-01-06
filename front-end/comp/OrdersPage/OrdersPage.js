import styles from "./OrdersPage.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Order from "./Order/Order";

const OrdersPage = () => {

    const [OrdersData, setOrders] = useState([]);
    const [Loading, setLoading] = useState("loading");
    const OrdersUrl = "https://store-test-c9b34-default-rtdb.firebaseio.com/.json";
    useEffect(() =>{
        const getOrders = async () =>{
            setOrders((await axios(OrdersUrl)).data.orders);
            setLoading("");
        };

        getOrders();

    },[]);


  return(
  <div className={styles.OrdersMainContainer}>
    {Loading ? (<div>Loading</div>) : 
    (OrdersData.map((order) =>  <Order Order={order} key={order.id}/>))}
  </div>
  );
};

export default OrdersPage