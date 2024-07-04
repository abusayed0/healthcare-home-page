import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import arrow1 from './../assets/Arrow 1.png';


const RightSidebar = ({ rightNavOpen, setRightNavOpen }) => {
    return (
        <div className={`absolute top-0 right-0 overflow-x-clip  bg-[#F1F1F4]  h-full min-h-screen z-30 rounded-md  ${rightNavOpen ? "w-[300px]" : "w-0"} transition-all duration-500 md:hidden`}>
            <div className={`sticky top-0 `}>
                <div className="absolute top-2 left-2 p-2 bg-[#555]  rounded-full opacity-80 hover:opacity-100 cursor-pointer transition-all duration-500 " onClick={() => setRightNavOpen(!rightNavOpen)}>
                    <RxCross1 className="text-2xl text-white" />
                </div>


                <ul className="p-10 pt-16 flex  flex-col gap-5 items-start">
                    <li className="relative">
                        <NavLink to="/" className="text-text-primary">Home</NavLink>
                    </li>
                    <li className="relative">
                        <NavLink to="/" className="text-text-primary">Services</NavLink>

                    </li>
                    <li className="relative">
                        <NavLink to="/" className="text-text-primary">Blog</NavLink>

                    </li>
                    <li className="relative">
                        <NavLink to="/" className="text-text-primary">About Us</NavLink>

                    </li>
                    <li>
                        <button className="px-7 py-4 font-medium  border border-text-primary text-text-primary rounded-xl flex items-center gap-2">Appointment <img src={arrow1} alt="" /></button>
                    </li>


                </ul>

            </div>
        </div>


    );
};

export default RightSidebar;