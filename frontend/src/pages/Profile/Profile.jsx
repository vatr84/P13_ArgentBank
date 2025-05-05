// Redux
import { useSelector } from "react-redux";

// Components
import User from "../../components/User/User";
import EditName from "../../components/User/EditName/EditName";
import Accounts from "../../components/Accounts/Accounts";

// Layout
import Layout from "../../layouts/Layout";

// Styles
import styles from "./Profile.module.css";

// Page
function Profile() {
  const isEditMode = useSelector((state) => state.user.isEditMode);

  return (
    <Layout customStyle={styles["bg-dark"]}>
      {!isEditMode ? <User /> : <EditName />}
      <Accounts />
    </Layout>
  );
}

export default Profile;
