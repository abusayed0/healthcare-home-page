import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RightSidebar from "../../components/RightSidebar";
import { useState } from "react";

const MainLayout = () => {
    const [rightNavOpen, setRightNavOpen] = useState(false);

    return (
        <>
            <div className=" relative">
            <Navbar rightNavOpen={rightNavOpen} setRightNavOpen={setRightNavOpen}/>
            <RightSidebar rightNavOpen={rightNavOpen} setRightNavOpen={setRightNavOpen}/>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;