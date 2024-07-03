
const SectionTitleAndSubtitle = ({ title, subTitle }) => {
    return (
        <>
            <span className="text-text-primary px-6 py-3 border border-[#343268] rounded-3xl">{subTitle}</span>
            <h3 className="mt-4 text-text-primary font-semibold text-4xl">{title}</h3>
        </>
    );
};

export default SectionTitleAndSubtitle;