import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MainLayout = () => {
    return (
        <>
            <div className="max-w-[1160px] mx-auto">
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;