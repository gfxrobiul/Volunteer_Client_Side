import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/Faq/Faq";
import FeedbackAdd from "../../Components/FeedbackAdd/FeedbackAdd";
import Tesimonials from "../../Components/Tesimonials/Tesimonials";
import VolunteerNeedsSection from "../../Components/VolunteerNeedsSection/VolunteerNeedsSection";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <VolunteerNeedsSection></VolunteerNeedsSection>
            <Faq></Faq>
            <FeedbackAdd></FeedbackAdd>
            <Tesimonials></Tesimonials>
        </div>
    );
};

export default Home;