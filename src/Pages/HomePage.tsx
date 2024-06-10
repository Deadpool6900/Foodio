// import React from 'react'

import Navbar from "../Components/Home/Navbar";
import img1 from "../Images/home page.png";
import img2 from "../Images/home page 2.png";
import Header from "../Components/Home/Header";
import CardContainer from "../Components/Home/CardContainer";
import FeedBack from "../Components/Home/FeedBack";
import Footer from "../Components/Home/Footer";

const HomePage = () => {
    return (
        <div className="bg-slate-200">
            
            <div className="bg-red-100">
                <Navbar />
                </div>
            <section className="flex bg-red-100 md:px-[5em] flex-col md:flex-row pt-5 md:pt-0">
                <div className="md:w-[50%] px-4 md:px-0 ">
                    <h1 className="text-[3em] md:text-[5em] font-bold leading-[1.1em] md:leading-normal">
                        Best restrorunt in <span className="text-primary-btn">Town</span>
                    </h1>
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
                        iure repellat ipsa atque quidem eaque eligendi minus ipsum veniam
                        adipisci.
                    </p>
                    <div className="flex gap-7 py-5">
                        <button className="flex items-center justify-center rounded-2xl bg-primary-btn p-4 text-white transition duration-[.7] ease-linear hover:scale-105 hover:opacity-[0.7]">
                            Order Now
                        </button>
                        <button className="flex items-center justify-center rounded-2xl bg-red-200 p-4 text-primary-btn transition duration-[.7] ease-linear hover:scale-105 hover:opacity-[0.7]">
                            Reservation
                        </button>
                    </div>
                </div>
                <div className="md:w-[50%]">
                    <img src={img1} alt="noodle img" className="h-[20em] w-auto md:h-[30em] md:w-[35em] my-5 md:my-0" />
                </div>
            </section>

            <section className="flex bg-green-100 py-10 md:px-[5em] flex-col md:flex-row">
                <div className="md:w-[35%] flex justify-center">
                    <img
                        src={img2}
                        alt="noodle img"
                        className="h-[20em] w-auto md:h-[30em] md:w-[30em]"/>
                </div>
                <div className="md:w-[50%] md:pl-[5em]  ">
                    <h1 className="text-[3em] md:text-[5em] font-bold leading-[1.1em] md:leading-normal p-5 md:p-0 ">
                        Our most Popular <span className="text-primary-btn">Dish</span>
                    </h1>
                    <p className="px-5 md:px-0 ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
                        iure repellat ipsa atque quidem eaque eligendi minus ipsum veniam
                        adipisci.
                    </p>
                    <div className="flex md:py-5 p-5 md:p-0 ">
                        <button className="flex items-center justify-center rounded-2xl bg-primary-btn p-4 text-white transition duration-[.7] ease-linear hover:scale-105 hover:opacity-[0.7]">
                            Order Now
                        </button>
                    </div>
                </div>
            </section>

            <Header />
            <CardContainer />
            <FeedBack />

            <section className="flex items-center justify-center pt-[5em] pb-5">
                <div className="flex h-[12em] w-full mx-3 md:mx-0 md:h-[20em] md:w-[45em] flex-col items-center justify-center rounded-3xl bg-red-300">
                    <h5 className=" text-[1.5em] md:text-[2em] font-bold">Hungry ? we are open now </h5>
                    <div className="flex py-10 gap-4">
                        {" "}
                        <button className="flex items-center justify-center rounded-2xl bg-primary-btn p-4 text-white transition duration-[.7] ease-linear hover:scale-105 hover:opacity-[0.7]">
                            Order Now
                        </button>
                        <button className="flex items-center justify-center rounded-2xl bg-red-100 p-4 text-primary-btn transition duration-[.7] ease-linear hover:scale-105 hover:opacity-[0.7]">
                            Reservation
                        </button>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default HomePage;
