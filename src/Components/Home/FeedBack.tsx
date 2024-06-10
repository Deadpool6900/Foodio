import { useEffect, useState } from 'react'

const FeedBack = () => {
	const foodReviews = [
		{
			review: "The Pad Thai was incredible! The rice noodles were perfectly cooked, with a delightful balance of sweet, savory, and tangy flavors. The generous portion of chicken, shrimp, and vegetables made it a truly satisfying dish.",
			name: "Lisa Chen"
		},
		{
			review: "I absolutely loved the Chipotle BBQ Pulled Jackfruit sandwich. The jackfruit had a fantastic texture that mimicked pulled pork perfectly, and the smoky BBQ sauce was delicious. It was a bit messy to eat, but totally worth it!",
			name: "David Rodriguez"
		},
		{
			review: "A bit disappointed with the Nonna's Meat Lasagna. The portion size was great, but the sauce lacked depth of flavor. The cheese was gooey and satisfying, but overall it felt a little bland. Maybe next time I'll try a different pasta dish.",
			name: "Sarah Miller"
		},
		{
			review: "Wow! The Tandoori Chicken Tikka Masala was bursting with flavor. The chicken was incredibly tender and marinated perfectly, and the creamy tomato sauce with a hint of spice was heavenly. It came with fluffy basmati rice and a cooling raita - a perfect combination!",
			name: "Omar Khan"
		},
		{
			review: "The Kimchi Fried Rice was a delightful surprise! The fluffy rice was packed with savory kimchi, perfectly cooked vegetables, and a runny fried egg on top. It had a nice kick of spice and was a great vegetarian option.",
			name: "Emily Jones"
		},
		{
			review: "I finally tried the Vegan Shepherd's Pie, and it did not disappoint! The lentils and vegetables were hearty and flavorful, topped with creamy mashed potatoes. It was a comforting and satisfying vegetarian dish perfect for a cold night.",
			name: "Michael Brown"
		},
		{
			review: "The Grilled Salmon with Lemon Dill Butter was cooked to perfection. The salmon was flaky and moist, with a beautiful sear on the outside. The lemon dill butter added a bright and fresh flavor - a simple yet incredibly delicious dish.",
			name: "Jessica Garcia"
		},
		{
			review: "We ordered the Mezze Platter for two, and it was perfect for sharing! It came with a variety of hummus, dips, pita bread, olives, and marinated vegetables. Everything was fresh and flavorful - a great way to try a bit of everything.",
			name: "William Davis"
		},
		{
			review: "I couldn't resist the Molten Chocolate Cake for dessert, and it was pure decadence! The warm, gooey chocolate center oozed out with every bite. It was served with vanilla ice cream, creating the perfect combination of warm and cold.",
			name: "Anna Lee"
		},
		{
			review: "The Mango Sticky Rice was a refreshing end to a spicy meal. The sweet, sticky rice was topped with perfectly ripe mango slices and drizzled with a coconut cream sauce. It was a light and flavorful dessert with a beautiful presentation.",
			name: "Daniel Kim"
		}
	];
	const [review, setreview] = useState(0);

	const nextReview = () => {
		if (review < foodReviews.length - 1) {
			setreview((review) => review + 1)
		}
	};
	const prevReview = () => {
		if (review > 0) {
			setreview((review) => review - 1)
		}
	};
	useEffect(() => {
		if (review < foodReviews.length - 1) {
			const interval = setInterval(nextReview, 5000);
			return () => clearInterval(interval);
		}
		else {
			setreview(0)
		}
	}, [review]);

	return (
		<div className='h-auto w-full flex items-center justify-center flex-col'>
			<div className="py-10 ">
				<h5 className="text-[2em] md:text-[3em] text-center font-bold">What our Customer Says..</h5>
			</div>
			<div className="flex items-center justify-center w-full md:w-auto">
				<button
					onClick={prevReview}
					className='bg-slate-300 rounded-full p-3 h-[3em] w-[3em] flex items-center justify-center absolute left-4  lg:left-[21em]' >
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
					</svg>
				</button>

				<section className="h-[25em] w-[20em] md:h-[20em] md:w-[45em] bg-white p-10 rounded-3xl  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
					<h5 className="text-[1em] md:text-[1.5em] font-medium">
						&quot;
						{foodReviews[review].review}
						&quot;
					</h5>
					<p className="text-[1.1em] md:text-[1.2em] font-medium text-right py-7">- {foodReviews[review].name}</p>
				</section>

				<button
					onClick={nextReview}
					className='bg-slate-300 rounded-full p-3 h-[3em] w-[3em] flex items-center justify-center absolute right-4  lg:right-[21em]' >
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
					</svg>

				</button>
			</div>
		</div>
	)
}

export default FeedBack
