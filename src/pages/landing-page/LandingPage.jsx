import React from "react";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import "./components/Hero.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import ServicesSection from "./components/Services";
import IndustryInfo from "./components/IndustryInfo";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<ServicesSection />
			<IndustryInfo />
			<Footer />
		</div>
	);
};

export default LandingPage;
