import { Outlet } from "react-router-dom"
import Footer from "../components/FooterComponent/Footer"
import Navbar from "../components/NavComponent/Navbar"

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
