import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";



const Donation = () => {


    const [donation, setDonation] = useState([])
    const [noDataFound, setNoDataFound] = useState("")
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        const donationData = JSON.parse(localStorage.getItem('donation'))

        if (donationData) {
            setDonation(donationData)
        }
        else {
            setNoDataFound("No Donation Here !!!");
        }




    }, [])

    // console.log(donation);

    const hendleShowAll = () => {
        setShowAll(true)
        const btn = document.getElementById('showAllBtn')
        btn.classList.add("hidden")
    }




    return (

        <div>
            {noDataFound ? <p className="h-[80vh] flex justify-center items-center text-3xl font-semibold ">{noDataFound}</p> :

                <div>
                    <div className="max-w-screen-xl mt-20 mb-20 mx-auto">
                        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2" >
                            {
                                showAll ?
                                    donation?.map(cardData => <DonationCard key={cardData?.id} cardData={cardData}></DonationCard>) : 
                                        donation?.slice(0,4).map(cardData => <DonationCard key={cardData?.id} cardData={cardData}></DonationCard>)
                            
         
                                
    
                            }



                        </div>
                    </div>
                    {
                        donation.length > 4 && <div>
                            <button id="showAllBtn" onClick={hendleShowAll} className=" btn hover:bg-[#29cc75] bg-[#009444] px-7 py-4 rounded-lg font-semibold text-white mx-auto mt-20
                    mb-20 flex items-center justify-center">See All</button>
                        </div>
                    }
                </div>}
        </div>
    );
};

export default Donation;