import { Link } from "react-router-dom";


const Cardsection = ({ cardData }) => {
    const {id, picture, title, category, category_bg_color, card_bg_color, text_and_button_bg_color} = cardData || {}







    return (
        <div >
            
            <Link to ={`/Donation/${id}`}>

            <div style={{ backgroundColor: `${card_bg_color}` }} className="card w-[312px]  lg:w-auto color mx-auto cursor-pointer rounded-lg card-compact  bg-base-100 shadow-xl">
                <figure><img src={picture} alt="image" /></figure>
                <div className="px-4 py-4 mt-3">
                    <button style={{ backgroundColor: `${category_bg_color}`, color: `${text_and_button_bg_color}` }} className="py-1 rounded-md px-3 text-[14px] font-medium">{category}</button>

                    <h2 style={{ color: `${text_and_button_bg_color}` }} className="card-title text-[20px] font-semibold mt-2">{title}</h2>



                </div>
            </div>
            </Link>

           
        </div>
    );
};

export default Cardsection;