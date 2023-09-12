import styles from"./QuantitySelection.module.scss"

const SizeSelection = (props) =>{

	const getQuantity = (e) => {
		props.quantity(e.target.value)
	};
	
	return(
		<select name="Quantity.." className={styles.quantity} onChange={getQuantity}>
			<option value="0">Quantity...</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
	
  		</select>
	);
};

export default SizeSelection