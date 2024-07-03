import bannerImage from "./../assets/Rectangle 5.png"
const Banner = () => {
    return (

        <div className="relative ">
            <img className="" src={bannerImage} alt="banner image" />
            <div className="rounded-[48px] absolute bg-gradient-to-b from-[rgba(0,193,157,0.00)-25.42%] to-[rgba(2,0,67,0.47)107.11%] inset-0" />
        </div>



    );
};

export default Banner;