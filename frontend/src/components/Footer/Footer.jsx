// Styling
import styles from "./Footer.module.css";

// Component
function Footer() {

  return (
    <footer className={styles.footer}>
      <p className={styles["footer-text"]}>
        Copyright 2020 Argent Bank
      </p>
    </footer>
  );
}

export default Footer;
