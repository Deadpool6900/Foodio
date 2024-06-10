// import React from 'react'

import { useEffect, useState } from "react";
import Card from "./Card";

const CardContainer = () => {
    type ItemData = {
        img: string;
        title: string;
        discription: string;
        review: number;
        price: number;
    };
    const Dishes: Array<ItemData> = [
        {
            img: "https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg",
            title: "Margherita",
            discription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam.",
            review: 4,
            price: 299,
        },
        {
            img: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg",
            title: "Pan Cake",
            discription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam.",
            review: 4,
            price: 299,
        },
        {
            img: "https://i.pinimg.com/564x/39/e9/7f/39e97f890fb372074fa0e06e202ef665.jpg",
            title: "Burger",
            discription:
                "Delicious beef burger with cheese, lettuce, and tomato. Laboriosam, aperiam.",
            review: 5,
            price: 499,
        },
        {
            img: "https://i.pinimg.com/236x/2d/41/f7/2d41f7762a4e8b20473caada000641ff.jpg",
            title: "Pizza Pepperoni",
            discription:
                "Classic pepperoni pizza with mozzarella cheese. Laboriosam, aperiam.",
            review: 4,
            price: 599,
        },
        {
            img: "https://i.pinimg.com/564x/7b/5d/40/7b5d40ce7ffd406fa3cc9474f8ca44fa.jpg",
            title: "Sushi Platter",
            discription:
                "Assorted sushi platter with fresh fish and rice. Laboriosam, aperiam.",
            review: 5,
            price: 999,
        },
        {
            img: "https://i.pinimg.com/236x/68/eb/9e/68eb9eac17e7649a84ab3b485e01a843.jpg",
            title: "Caesar Salad",
            discription:
                "Crisp romaine lettuce with Caesar dressing and croutons. Laboriosam, aperiam.",
            review: 4,
            price: 299,
        },
        {
            img: "https://i.pinimg.com/236x/fe/07/27/fe072747470c09eeadfcac3f450a130e.jpg",
            title: "Pasta Carbonara",
            discription:
                "Creamy carbonara pasta with pancetta and Parmesan. Laboriosam, aperiam.",
            review: 4,
            price: 399,
        },
        {
            img: "https://i.pinimg.com/236x/2d/77/bf/2d77bf4909532a0e6df759168db1e9f9.jpg",
            title: "Grilled Salmon",
            discription:
                "Grilled salmon with a side of vegetables. Laboriosam, aperiam.",
            review: 5,
            price: 799,
        },
        {
            img: "https://i.pinimg.com/236x/7b/b3/fa/7bb3fafb9d351f4ca4719406c8072f92.jpg",
            title: "Tacos",
            discription:
                "Mexican tacos with beef, cheese, and lettuce. Laboriosam, aperiam.",
            review: 4,
            price: 299,
        },
        {
            img: "https://i.pinimg.com/236x/d8/ef/27/d8ef27241a3cafb97f58d964ba183876.jpg",
            title: "Chocolate Cake",
            discription:
                "Rich chocolate cake with a smooth ganache. Laboriosam, aperiam.",
            review: 5,
            price: 499,
        },
        // dublicates
        {
            img: "https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg",
            title: "Margherita",
            discription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam.",
            review: 4,
            price: 299,
        },
        {
            img: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg",
            title: "Pan Cake",
            discription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam.",
            review: 4,
            price: 299,
        },
        {
            img: "https://i.pinimg.com/564x/39/e9/7f/39e97f890fb372074fa0e06e202ef665.jpg",
            title: "Burger",
            discription:
                "Delicious beef burger with cheese, lettuce, and tomato. Laboriosam, aperiam.",
            review: 5,
            price: 499,
        },
        {
            img: "https://i.pinimg.com/236x/2d/41/f7/2d41f7762a4e8b20473caada000641ff.jpg",
            title: "Pizza Pepperoni",
            discription:
                "Classic pepperoni pizza with mozzarella cheese. Laboriosam, aperiam.",
            review: 4,
            price: 599,
        },
        {
            img: "https://i.pinimg.com/564x/7b/5d/40/7b5d40ce7ffd406fa3cc9474f8ca44fa.jpg",
            title: "Sushi Platter",
            discription:
                "Assorted sushi platter with fresh fish and rice. Laboriosam, aperiam.",
            review: 5,
            price: 999,
        },
        {
            img: "https://i.pinimg.com/236x/68/eb/9e/68eb9eac17e7649a84ab3b485e01a843.jpg",
            title: "Caesar Salad",
            discription:
                "Crisp romaine lettuce with Caesar dressing and croutons. Laboriosam, aperiam.",
            review: 4,
            price: 299,
        },
        {
            img: "https://i.pinimg.com/236x/fe/07/27/fe072747470c09eeadfcac3f450a130e.jpg",
            title: "Pasta Carbonara",
            discription:
                "Creamy carbonara pasta with pancetta and Parmesan. Laboriosam, aperiam.",
            review: 4,
            price: 399,
        },
        {
            img: "https://i.pinimg.com/236x/2d/77/bf/2d77bf4909532a0e6df759168db1e9f9.jpg",
            title: "Grilled Salmon",
            discription:
                "Grilled salmon with a side of vegetables. Laboriosam, aperiam.",
            review: 5,
            price: 799,
        },
        {
            img: "https://i.pinimg.com/236x/7b/b3/fa/7bb3fafb9d351f4ca4719406c8072f92.jpg",
            title: "Tacos",
            discription:
                "Mexican tacos with beef, cheese, and lettuce. Laboriosam, aperiam.",
            review: 4,
            price: 299,
        },
        {
            img: "https://i.pinimg.com/236x/d8/ef/27/d8ef27241a3cafb97f58d964ba183876.jpg",
            title: "Chocolate Cake",
            discription:
                "Rich chocolate cake with a smooth ganache. Laboriosam, aperiam.",
            review: 5,
            price: 499,
        },
    ];
    const TotalMenuPages = Math.ceil((Dishes.length) / 9)

    const [page, setPage] = useState(1)

    useEffect(() => {
        console.log(`page: ${page}`)
    }, [page])

    const HandelPageClick = (index:number)=>{
        index === page ? "" : setPage(index)
    }
    return (
        <div>
            {/* CardHolders */}
            <section className="flex flex-col items-center md:grid md:grid-cols-3 md:px-[10em] bg-slate-200">
                {Dishes.slice((page - 1) * 9, page * 9).map((foodItem, index) => {
                    return (
                        <Card
                            key={index}
                            img={foodItem.img}
                            title={foodItem.title}
                            discription={foodItem.discription}
                            review={foodItem.review}
                            price={foodItem.price}
                        />
                    );
                })}
            </section>
            {/* pagination */}
            <section className="bg-slate-200 flex items-center justify-center py-3 gap-4">
                {Array.from({ length: TotalMenuPages }).map((_, index) => {
                    return (
                        <button
                            key={index} 
                            onClick={() => { HandelPageClick(index+1) }}
                            className={`bg-zinc-900 px-4 py-2 rounded-md text-white hover:bg-zinc-800 
                            ${page == index + 1 ? "bg-zinc-600 hover:bg-zinc-600":""}`} >
                            {index+1}
                        </button>
                    )
                })

                }
            </section>
        </div>
    );
};

export default CardContainer;
