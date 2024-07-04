import { useState } from "react";
import Faq from "./Faq";

const FaqContainer = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const clickHandler = (index) => {
        console.log({index: index ===activeIndex});
        if(index === activeIndex){
            setActiveIndex(null);
        }
        else{
            setActiveIndex(index);
        }
    }
    return (
        <div className="mt-7 flex flex-col gap-3">
            <Faq
                title=" What are your office hours?"
                descrip="Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
                clickHandler={() =>clickHandler(0)}
                isActive={activeIndex === 0}
            />
            <Faq
                title="How can I schedule an appointment?"
                descrip="Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
                clickHandler={() =>clickHandler(1)}
                isActive={activeIndex === 1}
            />
            <Faq
                title="Do you accept insurance?"
                descrip="Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
                clickHandler={() =>clickHandler(2)}
                isActive={activeIndex === 2}
            />
            <Faq
                title="What should I bring to my appointment?"
                descrip="Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
                clickHandler={() =>clickHandler(3)}
                isActive={activeIndex === 3}
            />
            <Faq
                title="Do you offer telemedicine appointments?"
                descrip="Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
                clickHandler={() =>clickHandler(4)}
                isActive={activeIndex === 4}
            />
        </div>
    );
};

export default FaqContainer;