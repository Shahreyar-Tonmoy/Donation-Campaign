import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Card from "../../Components/cardsection/Cardinfo";

const Home = () => {

    const donationData = useLoaderData()
   

    return (
        <div>
            {/* <Banner></Banner> */}
            <Card donationData={donationData}></Card>
        </div>
    );
};

export default Home;