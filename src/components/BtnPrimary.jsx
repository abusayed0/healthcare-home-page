import arrow1 from './../assets/Arrow 1.png';

const BtnPrimary = ({text}) => {
    return (
        <button className="font-medium bg-[#FFC637] px-6 py-3 rounded-xl flex items-center gap-2">
            {text}
            <img src={arrow1} alt="" />
        </button>
    );
};

export default BtnPrimary;