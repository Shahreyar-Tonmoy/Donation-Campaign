/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import CardInfo from "../../Components/card/Cardinfo";

import Banner from "../../Components/Header/Banner/Banner";
import useGetCampaigns from "./useGetCampaigns";

const Home = () => {

    const { campaigns } = useGetCampaigns();
    const [donateCampaigns, setDonateCampaigns] = useState([...campaigns]);

    useEffect(() => {
        setDonateCampaigns(campaigns);
    }, [campaigns])

    const handleSearchClick = (event) => {
        let searchText = event.current.value;
        if (searchText) {
            let filterData = campaigns.filter((campaign) => campaign.category.toLowerCase() === searchText.toLowerCase());
            if (filterData.length > 0) {
                setDonateCampaigns(filterData);
                event.current.value = ''
            } else {
                setDonateCampaigns([]);
                event.current.value = ''
            }
        }
    }

    return (
        <main>
            <section>
                <Banner handleSearchClick={handleSearchClick}></Banner>
            </section>
            <section className="py-[50px] px-4 lg:px-0">
                <div className="container mx-auto">
                 <CardInfo campaigns={donateCampaigns}></CardInfo>
                </div>
            </section>
        </main>
    );
};

export default Home;

