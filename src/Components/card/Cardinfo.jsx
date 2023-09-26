import Cardsection from "./Cardsection";


const CardInfo = ({campaigns}) => {

    

    return (
        <div className=" max-w-screen-xl mx-auto grid gap-5 mt-20  md:grid-cols-2 lg:grid-cols-4 md:mb-20 lg:mb-48">
            {
                campaigns?.map(data =><Cardsection key={data.id} cardData={data} ></Cardsection>)
            }
            
        </div>
    );
};

export default CardInfo;















