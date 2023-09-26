import { NavLink } from "react-router-dom";
import Logo from "/Assignment/Assignment-8/src/assets/Logo.png";


const Navbar = () => {
    return (
        <div>
            


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