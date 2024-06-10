// import React from 'react'


const Header = () => {
    const catogery: Array<string> = [
        "All categories",
        "Dinner",
        "Lunch",
        "desert",
        "Drinks",
    ];

    return (
        <div className="bg-slate-200 md:py-5">

            <section className="flex w-full items-center justify-center text-center">
                <h5 className="font-[Segoe UI] select-none text-[3em] font-bold md:text-[4em]">
                    Our Popular Menu
                </h5>
            </section>
            <section className="mt-5 flex flex-wrap items-center justify-center gap-4 md:gap-5">
                {catogery.map((cat, index) => {
                    return (
                        <button
                            key={index}
                            className="h-[3em] w-[full] rounded-2xl bg-zinc-200 px-4 transition duration-[.7] ease-linear selection:bg-primary-btn hover:scale-105 hover:bg-primary-btn hover:text-white"
                        >
                            {cat}
                        </button>
                    );
                })}
            </section>
        </div>
    );
};

export default Header;
