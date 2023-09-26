/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useGetCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    useEffect(() => {
        fetch("/Donation.json")
            .then((res) => res.json())
            .then((data) => setCampaigns(data));
    }, []);
    return {campaigns};
};

export default useGetCampaigns;
