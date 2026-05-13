"use client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import UserSignUp from "../pages/users/UserSignUp"
import UserLogin from "../pages/users/Userlogin"
import CaptainSignUp from "../pages/captains/CaptainSignUp"
import CaptainLogin from "../pages/captains/CaptainLogin"
import Start from "../pages/Start"
import Home from "../pages/Home"
import UserprotectedRoute from "../protectedRoutes/usersRoutes/userprotectedRoute"
import LogoutUser from "../pages/users/LogoutUser"

const Approutes = () => {
    const myRoutes = createBrowserRouter(
        [
            {
                path: '/',
                element: <MainLayout />,
                children: [
                    {
                        path: '/',
                        element: <Start />
                    },
                    {
                        path: '/home',
                        element: <UserprotectedRoute><Home /></UserprotectedRoute>
                    },
                    // user ---> 
                    {
                        path: '/user-signup',
                        element: <UserSignUp />
                    },
                    {
                        path: '/user-login',
                        element: <UserLogin />
                    },
                    {
                        path: '/user-logout',
                        element: <LogoutUser />
                    },
                    // captain --->
                    {
                        path: '/captain-signup',
                        element: <CaptainSignUp />
                    },
                    {
                        path: '/captain-login',
                        element: <CaptainLogin />
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