import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0); // Using useRef to prevent unnecessary re-renders

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      lastScrollY.current = window.scrollY; // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Only runs on mount

  return (
    <nav className={`${styles.nav} ${showNavbar ? styles.show : styles.hide}`}>
      <div className={styles.upper_container}>
        <Link to="/" className={styles.logo}>
          Cypher
        </Link>
        <div className={styles.icons}>
          <i className={`${styles.icon} material-symbols-rounded`}>light_mode</i>
          <i className={`${styles.icon} material-symbols-rounded`}>account_circle</i>
        </div>
      </div>
      <div className={styles.lower_container}>
        <Link to="/Home" className={styles.Link}>Home</Link>
        <Link to="/Posts" className={styles.Link}>Posts</Link>
        <Link to="/Projects" className={styles.Link}>Projects</Link>
        <Link to="/Socials" className={styles.Link}>Socials</Link>
      </div>
    </nav>
  );
};

export default NavBar;