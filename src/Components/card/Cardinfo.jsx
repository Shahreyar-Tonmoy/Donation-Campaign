import Cardsection from "./Cardsection";


const CardInfo = ({campaigns}) => {

    // console.log(donationData);

    return (
        <div className=" max-w-screen-xl mx-auto grid gap-5  md:grid-cols-2 lg:grid-cols-4 md:mb-32 lg:mb-48">
            {
                campaigns?.map(data =><Cardsection key={data.id} cardData={data} ></Cardsection>)
            }
            
        </div>
    );
};

export default CardInfo;















