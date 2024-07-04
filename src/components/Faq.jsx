import { MdKeyboardArrowDown } from "react-icons/md";

const Faq = ({ title, descrip, isActive, clickHandler }) => {
    return (
        <div className="cursor-pointer" onClick={clickHandler}>
            <div className="flex justify-between items-center bg-[#FFFFF5] py-4 px-8  rounded-lg">
                <h3 className="text-text-primary text-xl font-medium">{title}</h3>
                {!isActive && <MdKeyboardArrowDown className="text-3xl" />
                }
            </div>

            {
                isActive
                &&
                <>
                    <hr />
                    <p className="text-text-secondary text-sm py-4 rounded-lg px-8">{descrip}</p>
                </>
            }


        </div>
    );
};

export default Faq;