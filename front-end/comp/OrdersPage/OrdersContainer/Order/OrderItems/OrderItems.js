import OrderItem from "./OrderItem/OrderItem";

const OrderItems = (props) => {

    return (
        <div>
            {props.items.map((item) => { return (<OrderItem item={item} key={item.id} />) })}
        </div>
    );
};

export default OrderItems