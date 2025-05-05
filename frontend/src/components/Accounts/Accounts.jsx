// Imports
import { Children } from "react";

// Styles
import styles from "./Accounts.module.css";

// Component
function Accounts() {
  const accountsList = [
    {
      id: 1,
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      id: 2,
      title: "Argent Bank Savings (x67124)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      id: 3,
      title: "Argent Bank Credit Card (x5201)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  return (
    <>
      <h2 className={styles["sr-only"]}>Accounts</h2>

      {Children.toArray(
        accountsList.map((a) => (
          <section key={a.id} className={styles.account}>
            <div className={styles["account-content-wrapper"]}>
              <h3 className={styles["account-title"]}>{a.title}</h3>
              <p className={styles["account-amount"]}>{a.amount}</p>
              <p className={styles["account-amount-description"]}>{a.description}</p>
            </div>

            <div className={styles["account-content-wrapper cta"]}>
              <button className={styles["transaction-button"]}>
                View transactions
              </button>
            </div>
          </section>
        ))
      )}
    </>
  );
}

export default Accounts;
