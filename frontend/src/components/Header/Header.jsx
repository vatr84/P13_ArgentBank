// Imports
import { NavLink, useLocation } from "react-router";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { resetUserState } from "../../store/slices/userSlice";

// Styling
import styles from "./Header.module.css";
import Logo from "../../assets/images/argentBankLogo.png";

// Component
function Navbar() {
  // Authentication
  const isAuth = useSelector((state) => state.auth.isValid);
  const dispatch = useDispatch();

  const currentLocation = useLocation();

  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(resetUserState());
  };

  return (
    <header className={styles["main-nav"]}>
      <NavLink
        to={
          currentLocation.pathname !== "/" ? "/" : null
        }
        className={styles["main-nav-logo"]}
      >
        <img
          className={styles["main-nav-logo-image"]}
          src={Logo}
          alt="Argent Bank Logo"
        />

        <h1 className={styles["sr-only"]}>Argent Bank</h1>
      </NavLink>

      <nav>
        {isAuth ? (
          <div className={styles["main-nav-items"]}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? styles["router-link-exact-active"]
                  : styles["main-nav-item"]
              }
              to={"/profile"}
            >
              <i className="fa fa-user-circle"></i>
              {user.firstname}
            </NavLink>

            <NavLink
              to={"/"}
              onClick={logoutHandler}
              className={styles["main-nav-item"]}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </div>
        ) : (
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? styles["router-link-exact-active"]
                : styles["main-nav-item"]
            }
          >
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
