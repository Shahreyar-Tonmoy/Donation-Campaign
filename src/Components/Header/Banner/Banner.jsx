import backgroundImage from "/Assignment/Assignment-8/src/assets/Banner.png";

// const Banner = () => {
//     return (

//     );
// };

// export default Banner;






/* eslint-disable react/prop-types */

import { useRef } from "react";

/* eslint-disable no-unused-vars */
const Banner = ({ handleSearchClick }) => {

    const inputRef = useRef();

    return (

        <div>
            <div className="">
                <div className="hero h-[500px] " style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="hero-overlay bg-white bg-opacity-90"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className=" text-[#0B0B0B] bg-opacity-0">
                            <h1 className="mb-5 text-2xl md:text-4xl  lg:text-5xl font-bold">I Grow By Helping People In Need</h1>




                            <div className="relative w-7/12 mt-10  mx-auto">
                                <input ref={inputRef} className="block p-2.5 w-full z-20 text-sm  bg-gray-50 rounded-lg   border-[#FF444A]" placeholder="Search here...." type="text" />
                                <button onClick={() => handleSearchClick(inputRef)} type="submit"
                                    className="absolute cursor-pointer top-0 right-0 p-2.5 px-5 text-sm font-medium h-full text-white  bg-[#FF444A] rounded-r-lg border-[#FF444A]   ">
                                    <h1>
                                        Search
                                    </h1>
                                    <span className="sr-only"></span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;