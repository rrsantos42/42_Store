import styles from "./CartItem.module.scss"

const CartItem = (props) => {

    return(
        <>
        <p>{props.item.Product}</p>
        <p>{props.item.size}</p>
        <p>{props.item.quantity}</p>
        </>     
    );
};

export default CartItem