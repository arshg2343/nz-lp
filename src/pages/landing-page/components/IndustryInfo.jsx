import React from "react";
import "./IndustryInfo.css";
import {
	FileCode2,
	Landmark,
	Biohazard,
	PillBottle,
	GraduationCap,
	Hotel,
	UtilityPole,
	Cog,
	Package,
	Ship,
	Container,
	Shirt,
	Plane,
	BookUser,
	ShoppingCart,
	Cable,
	House,
	Pickaxe,
} from "lucide-react";

const IndustryInfo = () => {
	const industries = [
		{
			name: "IT",
			icon: <FileCode2 />,
			link: "/data-theft-data-breach-insurance-in-india",
		},
		{
			name: "BFSI",
			icon: <Landmark />,
			link: "/bfsi-insurance-broker-in-india",
		},

		{
			name: "Chemicals",
			icon: <Biohazard />,
			link: "/insurance-for-chemical-firm",
		},
		{
			name: "Pharma",
			icon: <PillBottle />,
			link: "/insurance-for-pharmaceutical-industry",
		},
		{
			name: "Education",
			icon: <GraduationCap />,
			link: "/insurance-for-educational-institutions-in-india",
		},
		{
			name: "Hospitality",
			icon: <Hotel />,
			link: "/hospitality-insurance-in-india",
		},
		{
			name: "Infrastructure",
			icon: <UtilityPole />,
			link: "/insurance-for-infrastructure-in-india",
		},
		{
			name: "Engineering",
			icon: <Cog />,
			link: "/insurance-for-engineering-companies-in-india",
		},
		{
			name: "Packaging",
			icon: <Package />,
			link: "/insurance-for-packaging-firms",
		},
		{
			name: "Shipping",
			icon: <Ship />,
			link: "/insurance-for-shipping-companies",
		},
		{
			name: "Exim",
			icon: <Container />,
			link: "/exim-insurance-broker-in-india",
		},
		{
			name: "Textile",
			icon: <Shirt />,
			link: "/insurance-for-textile-companies",
		},
		{
			name: "Aviation",
			icon: <Plane />,
			link: "/aviation-insurance-brokers-in-india",
		},
		{
			name: "Consulting",
			icon: <BookUser />,
			link: "/insurance-consulting-services-in-india",
		},
		{
			name: "E-commerce",
			icon: <ShoppingCart />,
			link: "/ecommerce-insurance-brokers-in-india",
		},
		{
			name: "Energy/Power",
			icon: <Cable />,
			link: "/power-insurance-brokers-in-india",
		},
		{
			name: "Housing",
			icon: <House />,
			link: "/housing-insurance-brokers-in-india",
		},
		{
			name: "Employee",
			icon: <Pickaxe />,
			link: "/employee-insurance-brokers-in-india",
		},
	];

	return (
		<section
			className="industries-section space-ptb"
			style={{ backgroundColor: "#eef6ff" }}
		>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10 mx-auto text-center">
						<div className="section-title text-center">
							<h2>
								Industries{" "}
								<span className="text-white">We Serve</span>
							</h2>
							<p className="text-white">
								We excel in our work so that you excel in yours.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					{industries.map((industry, index) => (
						<div
							className="col-lg-2 col-sm-6 mb-4 industry-icon"
							key={index}
						>
							<a href={industry.link}>
								<div className="bgcard px-4 h-100">
									<div className="category-icon text-center pt-3 pb-2">
										<i className="industry-image">
											{industry.icon}
										</i>
									</div>
									<div className="category-icon-text text-center pb-2">
										{industry.name}
									</div>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default IndustryInfo;
