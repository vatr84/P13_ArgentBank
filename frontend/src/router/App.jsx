import Home from "../pages/Home/Home";
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Outlet />,
            children: [
                {
                    element: <Home />
                },
            ],
        }
    ])
    return <RouterProvider router={router} />
}

export default App;