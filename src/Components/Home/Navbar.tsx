// import React from 'react'
import { useState } from "react";
import logo from "../../Images/logo.svg";
import Popup from "./Popup";


const Navbar = () => {
    const [popup, setpopup] = useState(false)

    const OpenPopup = () => {
        setpopup(true);
    }
    const ClosePopup = () => {
        setpopup(false);
    }
    const SitePages: Array<string> = [
        "Home",
        "Menu",
        "About Us",
        "Order Online",
        "Reservation",
        "Contact Us",
    ];
    return (
        <div>
            <Popup isOpen={popup} closeFn={ClosePopup} />
            <section className="flex items-center justify-between md:px-[10em] md:py-[2em] px-5 py-4">
                <div className="flex items-center gap-3 font-bold select-none">
                    <img src={logo} alt="foodio" className="h-10 w-10" />
                    Foodio.
                </div>
                <ul className="hidden lg:flex gap-7 text-[.9em]">
                    {SitePages.map((page, index) => {
                        return (
                            <a href="http://" key={index}>
                                <li
                                    className="select-none hover:text-primary-btn hover:underline"
                                >
                                    {page}
                                </li>
                            </a>
                        );
                    })}
                </ul>
                <button className="hidden md:block h-[2.9em] w-[5.5em] rounded-2xl bg-primary-btn text-white transition duration-[.7] ease-linear hover:scale-105 hover:opacity-[0.7]">
                    Log In
                </button>
                {/* hamberger menu */}
                <div className=" md:hidden" onClick={OpenPopup}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>

                </div>
            </section>
        </div>
    )
}

export default Navbar
