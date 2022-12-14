import Order from './Order/Order';
import orders from '../../../Compras.json'
const OrdersContainer = () => {
    return(
    <div>
        {orders.map((order) => {return(<Order order={order} key={order.id}/>)})}
    </div>
    );
};

export default OrdersContainer