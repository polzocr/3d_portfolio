import { Outlet } from "react-router-dom"
import { Navbar } from "../../components"

export default function Layout(){
    return (
        <div className="relative z-0 bg-primary">
            <Navbar />
            <Outlet />
        </div>
    )
}