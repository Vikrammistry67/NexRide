import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Register from "../pages/Register"
import Home from "../pages/Home"
import Login from "../pages/Login"

const Approutes = () => {
    const myRoutes = createBrowserRouter(
        [
            {
                path: '/',
                element: <MainLayout />,
                children: [
                    {
                        path: '/',
                        element: <Home />
                    },
                    {
                        path: '/register',
                        element: <Register />
                    },
                    {
                        path: '/login',
                        element: <Login />
                    }
                ]
            }
        ]
    )
    return (
        <RouterProvider router={myRoutes}>
            <Approutes />
        </RouterProvider>
    )
}

export default Approutes