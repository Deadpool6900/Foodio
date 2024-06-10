// import React from 'react'

import one from "../../Images/StarRating/one.svg";
import two from "../../Images/StarRating/two.svg";
import three from "../../Images/StarRating/three.svg";
import four from "../../Images/StarRating/four.svg";
import fourhalf from "../../Images/StarRating/fourhalf.svg";
import five from "../../Images/StarRating/five.svg";

type ItemData = {
	img: string,
	title: string,
	discription: string,
	review: number,
	price: number
}


const Card = (props:ItemData) => {
	return (
		<div className='h-[30em] w-[18em] bg-zinc-100 flex items-center justify-center rounded-3xl flex-col px-6 m-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
			<section className="img ">
				<img src={props.img} alt="image-/item" className="rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[185px] w-[240px]"  />
			</section>
			<section className="title m-2">
				<h3 className="text-3xl font-semibold">{props.title}</h3>
			</section>
			<section className="discription text-center mb-4 mt-2 text-[.9em] leading-tight">
				{props.discription}
			</section>
			<section className="review w-full">
				<img src={props.review == 1 ? one : props.review == 2 ? two : props.review == 3 ? three : props.review == 4 ? four : props.review == 4.5 ? fourhalf : props.review == 5 ? five : ""} alt="" className="h-[20px] w-[100px]" />
			</section>
			<section className="cto flex items-center justify-between w-full mt-6 gap-5">
				<p className="text-[1.5em] font-bold">{`Rs.${props.price}`}</p>
				<button className="h-[2.7em] w-[100%] rounded-lg bg-primary-btn px-4 transition duration-[.7] ease-linear text-white">
					Order Now
				</button>
			</section>
		</div>
	)
}

export default Card
