import React, { useContext } from "react";
import logo from "../Assests/trac_.png";
import userIcon from "../Assests/icons8-user-50.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setactive] = useState("Home");
    const navigate = useNavigate();
    return (
        <>
            <div className=" relative z-1  w-[100%] z-[1]  bg-[#5fd6f4] flex  justify-between items-center p-3 text-lg">
                <div className="h-[65px] order-1 md:order-1">
                    <Link
                        to={"/"}
                        className={`cursor-pointer  ${active === "Home" &&
                            "text-red-600 font-bold border-b border-red-600"
                            }`}
                        onClick={() => {
                            setOpen(false);
                            setactive("Home");
                        }}
                    >
                        <img
                            src={logo}
                            alt="Logo_Scrubs"
                            className="h-[80%] md:ml-3 md:mt-1 filter drop-shadow-white-lg hover:scale-110" />
                    </Link>
                </div>
                {/*  */}
                <div className=" order-3 md:order-2 flex  ">
                    <ul
                        className={`md:flex md:space-x-8 font-bold ${open
                            ? "absolute flex top-20   flex-col w-[100%] right-0 space-y-6 bg-gray-900  text-white p-10 "
                            : "hidden "
                            } `}
                    >
                        <Link
                            to={"/"}
                            className={`cursor-pointer ${active === "Home" &&
                                "text-red-600 font-bold border-b border-red-600 "
                                }`}
                            onClick={() => {
                                setOpen(false);
                                setactive("Home");
                            }}
                        >
                            Home
                        </Link>
                        <a
                            href="/#about"
                            className={`cursor-pointer font-bold ${active === "About" &&
                                "text-red-600 font-bold border-b border-red-600"
                                }`}
                            onClick={() => {
                                setOpen(false);
                                setactive("About");
                            }}
                        >
                            About
                        </a>
                        <a
                            href="/#contact"
                            className={`cursor-pointer font-bold ${active === "Contact" &&
                                "text-red-600 font-bold border-b border-red-600"
                                }`}
                            onClick={() => {
                                setOpen(false);
                                setactive("Contact");
                            }}
                        >
                            Contact
                        </a>
                        <Link
                            to={"/course"}
                            className={`cursor-pointer font-bold ${active === "Men" &&
                                "text-red-600 font-bold border-b border-red-600"
                                }`}
                            onClick={() => {
                                setOpen(false);
                                setactive("Men");
                            }}
                        >
                            Courses
                        </Link>

                        <Link
                            to={"/pricing"}
                            className={`cursor-pointer font-bold ${active === "pricing" &&
                                "text-red-600 font-bold border-b border-red-600"
                                }`}
                            onClick={() => {
                                setOpen(false);
                                setactive("pricing");
                            }}
                        >
                            Pricing
                        </Link>

                    </ul>

                    <Link to="/login">
                        <div className="flex items-center justify-center py-1.5 bg-blue-600 px-2 rounded-full font-semibold hover:text-white md:ml-6  hover:scale-110 w-10 h-10" style={{ backgroundColor: '#1676BC' }}>

                            <img
                                onClick={()=>navigate('/login')}
                                src={userIcon}
                                alt="Login"
                                className="object-contain"
                                style={{ width: '5rem', height: '1.6rem', pointerEvents: 'none' , cursor:'pointer'}} // Adding pointerEvents none here
                            />

                        </div>

                    </Link>

                    <div className="flex w-[50%] justify-end ">
                        <div className=" flex mx-4 "></div>
                        <div
                            className=" p-1 cursor-pointer md:hidden block h-[40px] "
                            onClick={() => setOpen(!open)}
                        >
                            <div className="w-[30px] m-1 h-[3px] bg-black"></div>
                            <div className="w-[30px] m-1 h-[3px] bg-black"></div>
                            <div className="w-[30px] m-1 h-[3px] bg-black"></div>
                        </div>
                    </div>
                    {/* </dv> */}
                </div>

                {/*  */}
            </div>
        </>
    );
};

export default Navbar;
