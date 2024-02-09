import { Outlet } from "react-router-dom"
import { Navbar } from "../../components"

export default function Layout(){
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
            </div>
            <Outlet />
        </div>
    )
}