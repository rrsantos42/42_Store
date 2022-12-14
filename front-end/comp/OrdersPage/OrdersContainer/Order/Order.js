const Order = (props) => {
    
    const RenderSize = () => {
        return (
            <p>Size: {props.order.size}</p>
        );
    };
    
    return(
        <div>
            <p>ID: {props.order.id}</p>
            <p>ITEM: {props.order.item}</p>
            {props.order.size != "NULL"? RenderSize() : null}
            <p>Quantidade: {props.order.quantity}</p>
            <p>Preco total: {props.order.quantity * props.order.price}</p>
            <p>-------------------------</p>

        </div>
    )
}

export default Order
