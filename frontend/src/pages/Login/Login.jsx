// Imports
import { useState, useRef } from "react";

// Routing
import { useNavigate } from "react-router";

// api
import callApi from "../../api/callApi";

// Redux Store
import { useDispatch } from "react-redux";
import { setToken, persistToken } from "../../store/slices/authSlice";

// Components
import Layout from "../../layouts/Layout";

// Styles
import styles from "./Login.module.css";

// Page
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form Handling
  const [errorMessage, setErrorMessage] = useState(null);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const rememberMeInputRef = useRef();

  const changeHandler = () => {
    setErrorMessage(null);
  };

  // Form Submission
  const formSubmitHandler = async (event) => {
    event.preventDefault(); // prevents page to reload

    const usernameValue = usernameInputRef.current?.value.trim();
    const passwordValue = passwordInputRef.current?.value.trim();

    // One of the form fiels is empty
    if (usernameValue.length === 0 || passwordValue.length === 0) {
      setErrorMessage("All fields need to be filled in.");
    }

    // All form fiels are filled in
    if (
      usernameValue.length > 0 &&
      usernameValue !== null &&
      passwordValue.length > 0 &&
      passwordValue !== null
    ) {
      const userCredentials = {
        email: usernameValue,
        password: passwordValue,
      };
      const data = await callApi("login", "/user/login", userCredentials);

      if (isNaN(data)) {
        const token = data.body.token;

        dispatch(setToken(token)); // Set token in Redux store
        if (rememberMeInputRef.current.checked) {
          dispatch(persistToken(token)); // Persist token in localStorage
        }

        navigate("/profile"); // Redirect to profile page
      } else {
        setErrorMessage("The username or/and the password are incorrect...");
      }
    }

    return;
  };

  return (
    <Layout customStyle={styles["bg-dark"]}>
      <section className={styles["sign-in-content"]}>
        <i className={`fa fa-user-circle ${styles["sign-in-icon"]}`}></i>
        <h1>Sign In</h1>

        <form onSubmit={formSubmitHandler}>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              ref={usernameInputRef}
              onChange={changeHandler}
              autoComplete="on"
            />
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              onChange={changeHandler}
            />
          </div>

          <div className={styles["input-remember"]}>
            <input type="checkbox" id="remember-me" ref={rememberMeInputRef} />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button className={styles["sign-in-button"]}>Sign In</button>
        </form>
      </section>
    </Layout>
  );
}

export default Login;
