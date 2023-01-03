const Order = (props) =>{

    return(
        <div>
            <h1>{props.Order.date}</h1>
            <p>{props.Order.final_price}</p>
            
        </div>
    )
};

export default Order