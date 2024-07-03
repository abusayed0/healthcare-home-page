
const SatisfactionOrLessonCard = ({title, subTitle, cardImage}) => {
    return (
        <div className="h-full p-5 rounded-3xl bg-[#F1F1F4] border-[rgba(2,0,67,0.20) border-[0.5px]">
            <h3 className="text-[40px] font-semibold text-text-primary">{title}</h3>
            <p className="text-text-secondary text-sm mt-2">{subTitle}</p>
            <img className="mt-6 ml-auto max-w-[120px]" src={cardImage} alt="" />
        </div>
    );
};

export default SatisfactionOrLessonCard;