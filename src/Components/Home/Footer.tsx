// import React from 'react'
import logo from "../../Images/logo.svg";
import facebook from "../../Images/facebook.svg";
import instagram from "../../Images/instagram.svg";
import whatsapp from "../../Images/whatsapp.svg";

const Footer = () => {
    const SitePages1: Array<string> = [
        "Home",
        "Menu",
        "Order Online",
        "Reservation",
        "catering",
    ];
    const SitePages2: Array<string> = ["AboutUs", "Testimonials", "Events"];
    return (
        <div className="text-white bg-zinc-800">
            <section className="flex flex-col md:flex-row md:px-[10em] md:pb-3 md:pt-10 px-5">
                <div className="w-auto h-[33%] md:h-auto md:w-[33%]">
                    <div className="my-5 flex items-center gap-3 font-bold ">
                        <img src={logo} alt="foodio" className="md:h-10 md:w-10 h-[2em] w-[2em]" />
                        Foodio.
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus, ducimus voluptates maxime similique minima nam ab
                        nihil deserunt voluptatem nulla?
                    </p>
                    <div className="logo my-7 flex gap-5">
                        <img
                            src={facebook}
                            alt="fb "
                            className="h-[2em] w-[2em] md:h-[2.5em] md:w-[2.5em] transition duration-[.7] ease-linear hover:scale-125"
                        />
                        <img
                            src={instagram}
                            alt="fb"
                            className="h-[2em] w-[2em] md:h-[2.5em] md:w-[2.5em] transition duration-[.7] ease-linear hover:scale-125"
                        />
                        <img
                            src={whatsapp}
                            alt="fb"
                            className="h-[2em] w-[2em] md:h-[2.5em] md:w-[2.5em] transition duration-[.7] ease-linear hover:scale-125"
                        />
                    </div>
                </div>
                <div className="flex w-auto h-[33%] md:h-auto md:w-[33%] gap-11 md:p-10">
                    <ul>
                        {SitePages1.map((page, index) => {
                            return (
                                <li
                                    key={index}
                                    className=" py-1 md:py-2 transition duration-[.7] ease-linear hover:scale-125 hover:text-primary-btn hover:underline"
                                >
                                    <a href="http://" target="_blank" rel="noopener noreferrer">
                                        {page}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <ul>
                        {SitePages2.map((page, index) => {
                            return (
                                <li
                                    key={index}
                                    className="py-2 transition duration-[.7] ease-linear hover:scale-125 hover:text-primary-btn hover:underline"
                                >
                                    <a href="http://" target="_blank" rel="noopener noreferrer">
                                        {page}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="w-auto h-[33%] md:h-auto md:w-[33%] md:px-10 md:py-10">
                    <p className=" pt-4 md:py-4 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
                        odio!
                    </p>
                    <p className="md:py-4 ">
                        foodio.bussiness@gmail.com
                    </p>

                    <p className="md:py-4 ">
                        +13 687 4362 907
                    </p>
                </div>
            </section>
            <section className="py-4">
                <p className="text-center transition duration-[.7] ease-linear hover:scale-105">Copyright @ kR. Kolase</p>
            </section>
        </div>
    );
};

export default Footer;
