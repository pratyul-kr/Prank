import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 SCTE&VT, All Rights Reserved. Designed & Developed by COEMPT</p>
    </footer>
  )
}

export default Footer;