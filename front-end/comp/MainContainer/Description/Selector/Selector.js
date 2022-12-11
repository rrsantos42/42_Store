import styles from "./Selector.module.css";
import { useState , useEffect } from "react";
const Selector = (props) => {
  const [sizeSclic, setSizeS] = useState(0);
  const [sizeMclic, setSizeM] = useState(0);
  const [sizeLclic, setSizeL] = useState(0);
  const [sizeXLclic, setSizeXL] = useState(0);
  useEffect(() => {

  },[sizeSclic, sizeMclic, sizeLclic, sizeXLclic])
  const sizeSHandler = () => {
    setSizeS(1);
    setSizeM(0);
    setSizeL(0);
    setSizeXL(0);
    console.log(sizeSclic);
  };

  const sizeMHandler = () => {
    setSizeS(0);
    setSizeM(1);
    setSizeL(0);
    setSizeXL(0);
  };

  const sizeLHandler = () => {
    setSizeS(0);
    setSizeM(0);
    setSizeL(1);
    setSizeXL(0);
  };

  const sizeXLHandler = () => {
    setSizeS(0);
    setSizeM(0);
    setSizeL(0);
    setSizeXL(1);
  };

  return (
    <div className={styles.sizesSelector}>
      {sizeSclic ? (
        <button className={styles.sizeClicked} onClick={sizeSHandler}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>S</p>
          </div>
        </button>
      ) : (
        <button className={styles.sizeNotClicked} onClick={sizeSHandler}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>S</p>
          </div>
        </button>
      )}
         {sizeMclic ? (
        <button className={styles.sizeClicked} onClick={sizeMHandler}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>M</p>
          </div>
        </button>
      ) : (
        <button className={styles.sizeNotClicked} onClick={sizeMHandler}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>M</p>
          </div>
        </button>
      )}
         {sizeLclic ? (
        <button className={styles.sizeClicked} onClick={sizeLHandler}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>L</p>
          </div>
        </button>
      ) : (
        <button className={styles.sizeNotClicked} onClick={sizeLHandler}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>L</p>
          </div>
        </button>
      )}
         {sizeXLclic ? (
        <button className={styles.sizeClicked} onClick={sizeXLHandler}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>Xl</p>
          </div>
        </button>
      ) : (
        <button className={styles.sizeNotClicked} onClick={sizeXLHandler}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>XL</p>
          </div>
        </button>
      )}
    </div>
  );
};

export default Selector;
