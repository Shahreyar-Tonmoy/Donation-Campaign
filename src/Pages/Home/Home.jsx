import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import CardInfo from "../../Components/card/Cardinfo";


const Home = () => {

    const donationData = useLoaderData()
   

    return (
        <div>
            <Banner></Banner>
            
            <CardInfo donationData={donationData}></CardInfo>
        </div>
    );
};

export default Home;