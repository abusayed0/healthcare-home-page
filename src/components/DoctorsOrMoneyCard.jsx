
const DoctorsOrMoneyCard = ({ title, subTitle, cardImage }) => {
    return (

        <div className="h-full p-5 rounded-3xl bg-[#FFFFF5]  border-[rgba(2,0,67,0.20) border-[0.5px]">
            <h3 className="text-[40px] font-semibold text-text-primary">{title}</h3>
            <p className="text-text-secondary text-sm">{subTitle}</p>
            <img className="ml-auto max-w-[75px]" src={cardImage} alt="" />
        </div>
    );
};

export default DoctorsOrMoneyCard;