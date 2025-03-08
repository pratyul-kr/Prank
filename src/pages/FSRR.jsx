import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FSRR.module.css";
import myImage from "../assets/myimage.png";
import hehe from "../assets/hehe.jpeg";

function FSRR() {
  const [showElement, setShowElement] = useState(false);
  
  return (
    <main className={styles.main}>
      <img src={myImage} alt="Example" />
      <div className={styles.title}>5th Semester - Results</div>
      <div className={styles.content}>
        <input placeholder="Registration Number"></input>
        <input type="date"></input>
        <Link className={styles.view} onClick={() => setShowElement(true)}>View</Link>
        <Link className={styles.reset} onClick={() => setShowElement(false)}>Reset</Link>
      </div>
       {showElement && <img className={styles.hehe} src={hehe} alt="Example" />}
    </main>
  )
}

export default FSRR