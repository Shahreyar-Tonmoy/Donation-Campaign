import { NavLink } from "react-router-dom";
import Logo from "/Assignment/Assignment-8/src/assets/Logo.png";


const Navbar = () => {
    return (
        <div>
            {/* <nav class="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                <div class="flex items-center text-gray-900">
                    <img className="w-32 md:w-40" src="/src/assets/Logo.png" alt="" />
                    <ul class="ml-auto mr-8 hidden items-center gap-6 lg:flex">
                        <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <NavLink
                                to="/Donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <NavLink
                                to="/Statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>

                    </ul>

                    <button
                        class="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                        data-collapse-target="sticky-navar"
                    >
                        <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>
                <div
                    class="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
                    data-collapse="sticky-navar"
                >
                    <ul class="mt-2 mb-4 flex flex-col gap-2 pb-2">
                        <li class="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to=""
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <NavLink
                                to="/Donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <NavLink
                                to="/Statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>


                    </ul>
                </div>
            </nav> */}



            <div className="navbar bg-base-100 lg:mt-5 md:px-8">
                <div className="navbar-start">
                    <div className="dropdown dropdown-start">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>



                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/Donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Donation
                                </NavLink>
                            </li>
                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/Statistics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    <img className="w-32 md:w-40" src={Logo} alt="" />
                                </NavLink>
                            </li>
                   
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/Donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/Statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>







        </div>
    );
};

export default Navbar;