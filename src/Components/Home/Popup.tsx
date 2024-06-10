// import React from 'react'
type openstate = {
    isOpen: boolean;
    closeFn():void;
};
const catogery: Array<string> = [
    "All categories",
    "Dinner",
    "Lunch",
    "desert",
    "Drinks",
];



const Popup = (props: openstate) => {
    return (
        <div className={`w-[20em] h-[20em] bg-primary-btn rounded-l-[2em] absolute  ${props.isOpen ? "flex" : "hidden"}  items-center justify-center py-4 top-0 right-0 transition ease-linear duration-0 ` }>
            {/* close btn */}
            <div className=" absolute top-5 right-4" onClick={props.closeFn}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>

            </div>
            <section className="mt-5 flex items-center justify-center md:gap-5 gap-4 flex-col">
                {catogery.map((cat, index) => {
                    return (
                        <h5
                            key={index}
                            className=" text-white text-[1.2em] select-none"
                        >
                            {cat}
                        </h5>
                    );
                })}
            </section>
        </div>
    )
}

export default Popup
