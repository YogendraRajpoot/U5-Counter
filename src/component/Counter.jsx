import React, { useState } from "react";
import styles from "../component/counter.module.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  // const changeCount=()=>{
  //     setCount(count+1)
  // }
  function changeCount(val) {
    setCount(count + val);
  }

  return (
    <>
      <h1 className={styles.heading}>Counter</h1>
      <div className={styles.component}>
        <button onClick={() => changeCount(1)} className={styles.btn}>
          +
        </button>
        <span className={styles.span}>{count}</span>
        <button onClick={() => changeCount(-1)} className={styles.btn}>
          -
        </button>
      </div>
      <div>
        <button onClick={() => setCount(count * 2)} className={styles.btn}>*2</button>
      </div>
    </>
  );
};
