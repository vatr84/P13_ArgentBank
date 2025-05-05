// Redux
import { useSelector, useDispatch } from "react-redux";
import { switchEditMode } from "../../store/slices/userSlice";

// Styles
import styles from "./User.module.css";

// Component
function User() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const openEditMode = () => {
    dispatch(switchEditMode(true));
  };

  return (
    <div className={styles.header}>
      <h1>
        Welcome back
        <br />
        {`${user.firstname} ${user.lastname} !`}
      </h1>

      <button onClick={openEditMode} className={styles["edit-button"]}>
        Edit Name
      </button>
    </div>
  );
}

export default User;
