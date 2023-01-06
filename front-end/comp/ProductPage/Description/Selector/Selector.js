import styles from "./Selector.module.scss";
import { useState , useEffect } from "react";
const Selector = (props) => {
  const [sizeSclic, setSizeS] = useState(0);
  const [sizeMclic, setSizeM] = useState(0);
  const [sizeLclic, setSizeL] = useState(0);
  const [sizeXLclic, setSizeXL] = useState(0);
  const [sizeSAval, setSizeSAval] = useState(true);
  const [sizeMAval, setSizeMAval] = useState(true);
  const [sizeLAval, setSizeLAval] = useState(true);
  const [sizeXLAval, setSizeXLAval] = useState(true);
  if(!props.product.Size)
    return(
      <>
      </>
    );
  useEffect(() => {
    if(props.product.Size.S)
      setSizeSAval(false);
    if(props.product.Size.M)
      setSizeMAval(false);
    if(props.product.Size.L)
      setSizeLAval(false);
    if(props.product.Size.XL)
      setSizeXLAval(false);

  },[])
  const sizeSHandler = () => {
    setSizeS(1);
    setSizeM(0);
    setSizeL(0);
    setSizeXL(0);
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
        <button className={styles.sizeClicked} onClick={sizeSHandler} disabled={sizeSAval}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>S</p>
          </div>
        </button>
      ) : (
        <button className={styles.sizeNotClicked} onClick={sizeSHandler} disabled={sizeSAval} >
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>S</p>
          </div>
        </button>
      )}
         {sizeMclic ? (
        <button className={styles.sizeClicked} onClick={sizeMHandler} disabled={sizeMAval}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>M</p>
          </div>
        </button>
      ) : (
        <button className={styles.sizeNotClicked} onClick={sizeMHandler} disabled={sizeMAval}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>M</p>
          </div>
        </button>
      )}
         {sizeLclic ? (
        <button className={styles.sizeClicked} onClick={sizeLHandler} disabled={sizeLAval}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>L</p>
          </div>
        </button>
      ) : (
        <button className={styles.sizeNotClicked} onClick={sizeLHandler} disabled={sizeLAval}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>L</p>
          </div>
        </button>
      )}
         {sizeXLclic ? (
        <button className={styles.sizeClicked} onClick={sizeXLHandler} disabled={sizeXLAval}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>XL</p>
          </div>
        </button>
      ) : (
        <button className={styles.sizeNotClicked} onClick={sizeXLHandler} disabled={sizeXLAval}>
          <div className={styles.paragrafcont}>
            <p className={styles.paragraf}>XL</p>
          </div>
        </button>
      )}
    </div>
  );
};

export default Selector;
