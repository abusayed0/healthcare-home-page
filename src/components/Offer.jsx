import { FiArrowUpRight } from "react-icons/fi";
import BtnPrimary from "./BtnPrimary";

const Offer = () => {
    return (
        <div>
            <h3 className="text-4xl font-semibold text-white">Get Your
<br /> First Appointment <br />
at 50% Off!</h3>
            <div className="mt-6 flex gap-3 items-center">
                <BtnPrimary text="Appointment" />
                <button className="text-white font-medium border border-white px-6 py-3 rounded-xl flex items-center gap-2">
                    Learn More
                    <FiArrowUpRight className="text-2xl " />

                </button>
            </div>
        </div>
    );
};

export default Offer;