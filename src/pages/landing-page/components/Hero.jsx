import React, { useEffect } from "react";
import "swiper/css/bundle";
import Swiper from "swiper/bundle";
import "./Hero.css";

const images = [
	{
		image: "pexels-pixabay-358220.jpg",
	},
	{
		image: "pexels-rdne-6520076.jpg",
	},
	{
		image: "team-spirit-2447163_1920.jpg",
	},
	{
		image: "premium_photo-1664908512996-498c7f395e29.avif",
	},
];

const Hero = () => {
	useEffect(() => {
		new Swiper(".swiper", {
			loop: true,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			effect: "slide",
			speed: 2000,
		});
	}, []);

	return (
		<section className="banner slider-03">
			<div className="swiper">
				<div className="swiper-wrapper h-800 h-md-500 h-lg-600 h-sm-250">
					{images.map((image) => (
						<div
							className="swiper-slide"
							style={{
								backgroundImage: `url(${image.image})`,
							}}
						></div>
					))}
				</div>

				<div className="swiper-pagination"></div>
			</div>
		</section>
	);
};

export default Hero;
