const Order = (props) => {
    return(
        <div>
            <p>ID: {props.order.id}</p>
            <p>ITEM: {props.order.item}</p>
            <p>Quantidade: {props.order.quantity}</p>
            <p>Preco total: {props.order.quantity * props.order.price}</p>
            <p>-------------------------</p>

        </div>
    )
}

export default Order
