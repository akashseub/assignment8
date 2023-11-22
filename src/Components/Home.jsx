import Banner from "./Banner";
import DonationCardList from "./DonationCardList";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <DonationCardList></DonationCardList>
        </div>
    );
};

export default Home;