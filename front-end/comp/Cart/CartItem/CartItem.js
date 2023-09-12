import styles from"./CartItem.module.scss"
import { useEffect, useState } from "react";
import CartImg from "./CartImg/CartImg";
import ModalDeleteItem from "./ModalDeleteItem/ModalDeleteIte.js"

const CartItem = (props) => {
    const [items, setItems] = useState(props.Item[1].quantity)


    const dHandler = () =>{
        setItems(items == 0 ? 0 : items - 1)
    }
    const iHandler = () =>{
        setItems(items + 1)
    }
 
    return(
        <div className={styles.Card}>
            <CartImg product={props.Item[1].Product}/>
            <div className={styles.container}>
                <h1 className={styles.Type}>{props.Item[1].Product}</h1>
                <h3 className={styles.Size}>{props.Item[1].size}</h3>
                <h2 className={styles.descreption}>{props.Item[1].descreption}</h2>
            </div>
                <div className={styles.btnContainer}>
                    <div className={styles.quantityselector}>
                        <div className={styles.Box}>
                        <button onClick={dHandler}>&mdash;</button>
                        <input type="text" value={items} readonly className={styles.Input} />
                        <button onClick={iHandler}>&#xff0b;</button>
                    </div>  
                </div>
            </div>
                   <ModalDeleteItem item={props.Item[0]}/>       
        </div>
    );
};

export default CartItem