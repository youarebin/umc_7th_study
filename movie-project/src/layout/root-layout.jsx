import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import SideBar from "../components/side-bar";

const RootLayout = () => {
    return (
        <>
            <SideBar/>
            <Navbar />
            <Outlet />
        </>
    );
;}

export default RootLayout;