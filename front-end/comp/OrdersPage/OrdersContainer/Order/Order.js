import OrderItems from "./OrderItems/OrderItems"

const Order = (props) => {
    return(
        <div>
            <p>==========OB===============</p>
            <p>id = {props.order.id}</p>
            <p>date = {props.order.date}</p>
            <p>Final Price = {props.order.final_price}</p>
            <p>status = {props.order.status}</p>
            <p>Items<OrderItems items={props.order.items}/></p>
            <p>-----------OE--------------</p>
        </div>
    )
}

export default Order
