import Banner from "../../components/Banner";
import SatisfactionOrLessonCard from "../../components/SatisfactionOrLessonCard";
import chart from '../../assets/chart.png';
import video from '../../assets/video.png';
import badge from '../../assets/badge.png';
import coin from '../../assets/coin.png';
import DoctorsOrMoneyCard from "../../components/DoctorsOrMoneyCard";
import PatientCard from "../../components/PatientCard";
import SectionTitleAndSubtitle from "../../components/SectionTitleAndSubtitle";
import BtnPrimary from "../../components/BtnPrimary";
import aboutUsImage from './../../assets/Rectangle 24.png';
import service1 from './../../assets/Rectangle 27-2.png';
import service3 from './../../assets/Rectangle 27.png';
import service2 from './../../assets/Rectangle 27-1.png';
import ServiceCard from "../../components/ServiceCard";
import TestimonialCard from "../../components/TestimonialCard";
import patient from './../../assets/patient.jpg';


const Home = () => {
    return (
        <div>

            {/* banner section  */}
            <section>
                <Banner />
            </section>

            {/* states section  */}
            <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
                {/* chid 1 */}
                <div className="order-1 lg:order-none">
                    <SatisfactionOrLessonCard
                        title="90%"
                        subTitle="Patient satisfaction rate, reflecting our commitment."
                        cardImage={chart}

                    />
                </div>
                {/* chid 2 */}
                <div className="md:col-span-2 lg:col-span-3">
                    <div className="h-full">

                        <h1 className="text-5xl font-semibold text-text-primary text-center">Comprehensive Care for Every Patient</h1>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                            {/* child 1  */}
                            <div>
                                <DoctorsOrMoneyCard
                                    title="500+"
                                    subTitle="Board-certified doctors"
                                    cardImage={badge}
                                />
                            </div>

                            {/* chid 2  */}

                            <div className="self-end">
                                <PatientCard />
                            </div>

                            {/* child 3 */}
                            <div>
                                <DoctorsOrMoneyCard
                                    title="$5000"
                                    subTitle="Money spend for poor patient"
                                    cardImage={coin}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* child 3  */}
                <div>
                    <SatisfactionOrLessonCard
                        title="50+"
                        subTitle="Free lession video for patient"
                        cardImage={video}
                    />
                </div>
            </section>

            {/* about us section  */}
            <section className="mt-28 lg:mt-36 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <div>
                    <SectionTitleAndSubtitle
                        title="We Help To Get Soultions"
                        subTitle="Who we are"
                    />
                    <p className="mt-4 text-text-secondary mb-11">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                    </p>
                    <BtnPrimary text="Learn more" />

                </div>
                <div className="relative">
                    <img className="w-full" src={aboutUsImage} alt="" />

                    {/* badge */}
                    <div className="bg-[#343268] rounded-[32px] max-w-[400px] py-11 pl-7 pr-4 absolute -bottom-10 left-[50%] -translate-x-[50%] lg:translate-x-0 lg:-left-16">
                        <h4 className="font-medium text-2xl text-white">Our mission is simple</h4>
                        <p className="mt-5 text-white ">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>
            </section>

            {/* services section  */}
            <section className="mt-28 lg:mt-36 grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 p-5 md:p-10 bg-[#FFFFF5] rounded-[32px]">
                <div>
                    <SectionTitleAndSubtitle
                        title="Empowering Health, Enriching Lives"
                        subTitle="Service"
                    />
                    <p className="mt-4 text-text-secondary mb-11">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                    </p>
                    <BtnPrimary text="Appointment" />

                </div>
               
                    <ServiceCard
                        image={service1}
                        title="Advanced Technology"
                        descrip="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
                    />
                    <ServiceCard
                        image={service2}
                        title="Online Doctor Meet"
                        descrip="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
                    />
                    <ServiceCard
                        image={service3}
                        title="Consultancy your health"
                        descrip="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
                    />
                
            </section>

            {/* testimonial section  */}
            <section className="mt-28 lg:mt-36">
                <SectionTitleAndSubtitle
                    subTitle="Testimonial"
                    title="What they say about us"
                />
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <TestimonialCard
                        title="Expertise and Compassion Combined"
                        subtitle="I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way."
                        authorImage={patient}
                        authorName="Sarah D"
                        authorProfession="IT Professional"
                    />
                    <TestimonialCard
                        title="Life-Saving Care, Life-Changing Experience"
                        subtitle="My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life."
                        authorImage={patient}
                        authorName="Michael R"
                        authorProfession="Business Executive"
                    />
                    <TestimonialCard
                        title="A Partner in Health and Wellness"
                        subtitle="As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and"
                        authorImage={patient}
                        authorName="David S"
                        authorProfession="Lawyer"
                    />
                </div>
            </section>

            <section className="mt-28 lg:mt-36">
                <SectionTitleAndSubtitle
                    subTitle="FAQ"
                    title="Frequntly Asked Question"
                />
                <div className="mt-7">

                </div>
            </section>
        </div>
    );
};

export default Home;