import { FiArrowUpRight } from "react-icons/fi";

const ServiceCard = ({image, title, descrip}) => {
    return (
        <div className="relative rounded-[30px]">
            <img className="w-full rounded-[30px]" src={image} alt="" />
            <div className="absolute rounded-[20px] p-4 text-white bg-[rgba(2,0,67,0.6)] left-5 bottom-5 max-w-[300px]">
                <h5 className="text-lg font-semibold">{title}</h5>
                <p className="mt-2 text-xs">{descrip}</p>
                <div className="size-10 rounded-full bg-[#FFC637] ml-auto flex justify-center items-center">
                <FiArrowUpRight className="text-3xl" />

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;