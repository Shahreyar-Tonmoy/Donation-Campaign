import { useEffect, useState } from "react";
import {useLoaderData, useParams } from "react-router-dom";


import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";



const Card = () => {

    const [card, setcard] = useState({})

    const { id } = useParams()
    // console.log(id); 
    const cards = useLoaderData()

    // console.log(cards);

    useEffect(() => {
        const findData = cards?.find(card => card?.id == id)
        setcard(findData);
    }, [id, cards])




    const hendleDonationBtn = () => {

        const addDonationItems = []
        const Donation = JSON.parse(localStorage.getItem('donation'))
        if (!Donation) {
            addDonationItems.push(card)
            localStorage.setItem('donation', JSON.stringify(addDonationItems))
            swal("Thanks for donation!!!", "", "success");
            
        }
        else {
            const isExists = Donation.find(card => card.id == parseInt(id))
            if (!isExists) {
                addDonationItems.push(...Donation, card)
                localStorage.setItem('donation', JSON.stringify(addDonationItems))
                swal("Thanks for donation!!!", "", "success");


            }
            else {
                swal("You are already donated!!!", "", "warning");
                
            }




        }

    }






    return (
        <div>
            
            <div className="mx-auto max-w-screen-xl px-9 py-12">


                <div className="hero rounded-lg h-[36rem]" style={{ backgroundImage: `url(${card?.picture})` }}>
                    <div className="hero-overlay rounded-b-lg h-32 mt-[28rem]  bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="mt-[28rem] lg:mr-[62rem]">


                            <button onClick={hendleDonationBtn} className="px-6 py-4 rounded-md text-white bg-[#FF444A]">Donate ${card?.price}</button>
                        </div>
                    </div>
                </div>

                <h2 className="mb-2 block mt-14 font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
                    {card?.title}
                </h2>
                <p className="block font-sans text-[15px] font-normal leading-relaxed text-gray-700 antialiased">
                    {card?.description}
                </p>
            </div>
        </div>
    );
};

export default Card;