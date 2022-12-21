const OrderItem = (props) => {
    return (<div>
        <p>==</p>
        <p>id = {props.item.id}</p>
        <p>price = {props.item.price}</p>
        <p>quantity = {props.item.quantity}</p>
        <p>--</p>
        </div>
    );
};

export default OrderItem