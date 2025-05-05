import Home from "../pages/Home/Home";
import { RouterProvider, createBrowserRouter } from 'react-router'

export function Router() {
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