import React from 'react'
import styles from "./Footer.module.css"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles.footer}>
      <div className={styles.socialmedia}>
        <a href="https://facebook.com" target="_blank">
          <FaFacebook size={20} />
        </a>
        <a href="https://twitter.com" target="_blank">
          <FaTwitter size={20} />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FaSquareInstagram size={20} />
        </a>
      </div>

      <div className={styles.copy}>
        <p>© 2024 MovieApp. <br />
           All rights reserved.
        </p>
      </div>

      <button className={styles.btn} onClick={scrollToTop}>Go up</button>
    </div>
  );
}

export default Footer