
const Cardsection = ({cardData}) => {
    const {cover,title,category,} = cardData || {}
    return (
        <div>
            <div className="card mx-auto rounded-none card-compact w-[312px] bg-base-100 shadow-xl">
                <figure><img src={cover} alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cardsection;