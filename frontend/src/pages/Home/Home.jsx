// Styles
import styles from "./Home.module.css";
import Banner from "../../assets/images/bank-tree.jpeg";
import Layout from "../../layouts/Layout";

// Page
function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <section className={styles["hero-content"]}>
          <h2 className={styles["sr-only"]}>Promoted Content</h2>

          <p className={styles.subtitle}>No fees.</p>
          <p className={styles.subtitle}>No minimum deposit.</p>
          <p className={styles.subtitle}>High interest rates.</p>

          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles["sr-only"]}>Features</h2>
        <div className={styles["feature-item"]}>
          <img
            src="../../src/assets/images/icon-chat.png"
            alt="Chat Icon"
            className={styles["feature-icon"]}
          />

          <h3 className={styles["feature-item-title"]}>You are our #1 priority</h3>
          <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
        </div>
        <div className={styles["feature-item"]}>
          <img
            src="../../src/assets/images/icon-money.png"
            alt="Chat Icon"
            className={styles["feature-icon"]}
          />

          <h3 className={styles["feature-item-title"]}>More savings means higher rates</h3>
          <p>The more you save with us, the higher your interest rate will be!</p>
        </div>
        <div className={styles["feature-item"]}>
          <img
            src="../../src/assets/images/icon-security.png"
            alt="Chat Icon"
            className={styles["feature-icon"]}
          />

          <h3 className={styles["feature-item-title"]}>Security you can trust</h3>
          <p>We use top of the line encryption to make sure your data and money is always safe.</p>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
