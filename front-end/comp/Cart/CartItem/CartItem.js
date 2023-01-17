import styles from "./CartItem.module.scss"

const CartItem = (props) => {
    return(
        <>
        <p>{props.Item[1].Product}</p>
        <p>{props.Item[1].size}</p>
        <p>{props.Item[1].quantity}</p>
        </>     
    );
};

export default CartItem