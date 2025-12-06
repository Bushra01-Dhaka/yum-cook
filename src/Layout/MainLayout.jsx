import { Outlet, ScrollRestoration } from "react-router"
import Navbar from "../Reuse.jsx/Navbar"


const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>

        <ScrollRestoration/>
    </div>
  )
}

export default MainLayout;