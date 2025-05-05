// Components
//import Header from "../components/Header/Header";
//import Footer from "../components/Footer/Footer";

// Styling
import styles from "./Layout.module.css";

// Component
function Layout({ customStyle, children }) {
  return (
    <>
      <Header />

      <main className={`${styles.main} ${customStyle}`}>{children}</main>

      <Footer />
    </>
  );
}

export default Layout;
