import styles from './Order.module.scss'

const Order = (props) =>{

    return(
        <div>
            <h1 className={styles.date}>{props.Order.date}</h1>
            <p className={styles.price}>{props.Order.final_price}€</p>
            
        </div>
    )
};

export default Order