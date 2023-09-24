import Cardsection from "./Cardsection";


const CardInfo = ({donationData}) => {

    // console.log(donationData);

    return (
        <div className="mt-[100px] grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {
                donationData?.map(data => <Cardsection key={data.id} cardData={data}></Cardsection>)
            }
            
        </div>
    );
};

export default CardInfo;