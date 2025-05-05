// Imports
import { useEffect } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Navigate,
} from "react-router";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../store/slices/authSlice";
import { setFirstname, setLastname } from "../store/slices/userSlice";

// api
import callApi from "../api/callApi";

// Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";

function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isValid);
    const tokenFromStore = useSelector((state) => state.auth.token);
    const tokenFromLocalStorage = localStorage.getItem("token");

    // Set token from localStorage if available
    if (
        !isAuth &&
        tokenFromLocalStorage !== null &&
        tokenFromLocalStorage.length > 0
    ) {
        dispatch(setToken(tokenFromLocalStorage));
    }

    // Fetch user info
    useEffect(() => {
        const token = tokenFromLocalStorage ?? tokenFromStore;

        if (token) {
            callApi("getUserInfo", "/user/profile", token).then((data) => {
                dispatch(setFirstname(data.body.firstName));
                dispatch(setLastname(data.body.lastName));
            });
        }
    }, [dispatch, tokenFromLocalStorage, tokenFromStore]);

    // Routes definition with access control
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Outlet />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "login",
                    element: isAuth ? <Navigate to="/profile" replace /> : <Login />,
                },
                {
                    path: "profile",
                    element: isAuth ? <Profile /> : <Navigate to="/login" replace />,
                },

            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
