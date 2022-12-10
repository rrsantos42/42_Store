import styles from "./Selector.module.css";

const Selector = (props) => {
  // let classe = null
  // if(props.Available = 1)
  // 	classe =

  return (
    <div>
      <ul className={styles.Ul}>
        <li className={styles.Li}>
          <input
            className={styles.Input}
            type="checkbox"
            id="check_1"
            name="check_1"
            value="check_1"
          />
          <label for="check_1">S</label>
        </li>
        <li className={styles.Li}>
          <inpu
            className={styles.Input}
            t
            type="checkbox"
            id="check_2"
            name="check_2"
            value="check_2"
          />
          <label for="check_2">M</label>
        </li>
        <li className={styles.Li}>
          <inpu
            className={styles.Input}
            t
            type="checkbox"
            id="check_3"
            name="check_3"
            value="check_3"
          />
          <label for="check_3">L</label>
        </li>
        <li className={styles.Li}>
          <inpu
            className={styles.Input}
            t
            type="checkbox"
            id="check_4"
            name="check_4"
            value="check_4"
          />
          <label for="check_4">XL</label>
        </li>
      </ul>
    </div>
  );
};

export default Selector;
