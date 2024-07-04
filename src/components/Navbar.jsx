import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from './../assets/logo dark.png';

const Navbar = ({ rightNavOpen, setRightNavOpen }) => {
    return (
        <>
            <nav className="my-10">
                {/* medium and large navbar  */}
                <div className="hidden md:flex justify-between items-center ">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <ul className="flex gap-5">
                        <li className="relative">
                            <NavLink to="/" className="text-text-primary">Home</NavLink>
                        </li>
                        <li className="relative">
                            <NavLink to="/services" className="text-text-primary">Services</NavLink>

                        </li>
                        <li className="relative">
                            <NavLink to="/blog" className="text-text-primary">Blog</NavLink>

                        </li>
                        <li className="relative">
                            <NavLink to="/about-us" className="text-text-primary">About Us</NavLink>

                        </li>


                    </ul>
                    <div>
                        <button className="px-7 py-4 font-medium  border border-text-primary text-text-primary rounded-xl">Appointment</button>
                    </div>
                </div>
                {/* small navbar  */}
                <div className="flex md:hidden justify-between items-center ">
                    <div>
                        <img src={logo} alt="" />
                    </div>

                    <div className="p-2 bg-[#555] rounded-full opacity-80 hover:opacity-100 cursor-pointer transition-all duration-500 " onClick={() => setRightNavOpen(!rightNavOpen)}>
                        <RxHamburgerMenu className="text-2xl text-white" />

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;