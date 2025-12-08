import { Outlet, ScrollRestoration } from "react-router"
import Navbar from "../Reuse/Navbar"
import Footer from "../Reuse/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <ScrollRestoration/>
    </div>
  )
}

export default MainLayout;