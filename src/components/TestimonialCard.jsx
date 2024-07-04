
const TestimonialCard = ({title, subtitle, authorImage, authorName, authorProfession}) => {
    return (
        <div className="p-5 rounded-2xl bg-[#FFFFF5]">
            <h5 className="text-xl font-semibold text-text-secondary">{title}</h5>
            <p className="text-text-secondary mt-3">{subtitle}</p>
            <div className="mt-4 flex gap-2 items-center">
                <img className="size-10 rounded-full" src={authorImage} alt="" />
                <div className="">
                    <h4 className="text-text-primary text-xs"><span className="font-semibold">{authorName}, </span><span className="font-medium">{authorProfession}</span></h4>
                    <div className="mt-1">
                        star
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;