import Banner from "../../components/Banner";
import SatisfactionOrLessonCard from "../../components/SatisfactionOrLessonCard";
import chart from '../../assets/chart.png';
import video from '../../assets/video.png';
import badge from '../../assets/badge.png';
import coin from '../../assets/coin.png';
import DoctorsOrMoneyCard from "../../components/DoctorsOrMoneyCard";
import PatientCard from "../../components/PatientCard";

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
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
            </div>
        </div>
    );
};

export default Home;