import star from './../assets/fi-sr-star.png';
import patient from './../assets/patient.jpg';

const PatientCard = () => {
    return (
        <div className="p-5 rounded-3xl bg-[#F1F1F4] border-[rgba(2,0,67,0.20) border-[0.5px]">
            <div className="flex items-center gap-2">
                <h3 className="text-[40px] font-semibold text-text-primary">4.8</h3>
                <img className="w-8" src={star} alt="" />
            </div>
            <p className="text-text-secondary text-sm mt-1">Over 20,000 Patient</p>
            <div className="mt-5 flex items-center">
                <img className="size-[35px] rounded-full" src={patient} alt="" />
                <img className="-ml-[10px] size-[35px] rounded-full" src={patient} alt="" />
                <img className="-ml-[10px] size-[35px] rounded-full" src={patient} alt="" />
                <img className="-ml-[10px] size-[35px] rounded-full" src={patient} alt="" />
                </div>
        </div>
    );
};

export default PatientCard;