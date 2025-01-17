import React from "react";
import "./ServicesSection.css"; // Import the CSS file

const ServicesSection = () => {
	return (
		<section className="services-section space-ptb">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-10 col-lg-8 col-md-8 text-center">
						<h2 className="section-title">
							All-Round & Hands-On Partners
						</h2>
						<img
							className="services-image img-grayscale mt-lg-n5"
							src="https://www.prudentbrokers.com/images/home-services.jpg"
							alt="Insurance Broker Company in India"
							width="80%"
						/>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-5 pt-6">
						<div className="dotted-overlay p-5">
							<div className="z-index-1 position-relative">
								<blockquote className="blockquote">
									We, at NZ, bring to you insights on COVID-19
									and the vaccination programme envisaged. It
									comprises answers to some of the most
									frequently asked questions related to
									immunity and vaccination, COVID-19
									vaccination drive in India, expected process
									flow, salient features of vaccines, and
									more.
								</blockquote>
								<a
									className="btn btn-primary-round btn-round mt-3"
									href="/research-findings"
								>
									View Research & Findings
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 offset-lg-2">
						<div className="services-list bg-white p-5 shadow border-radius mt-4 mt-lg-n6">
							<h3>Our Services</h3>
							<ul className="list-unstyled list-number">
								<li className="mb-2">
									<span>01</span>Commercial Insurance
								</li>
								<li className="mb-2">
									<span>02</span>Employee Benefits
								</li>
								<li className="mb-2">
									<span>03</span>HNI Suite
								</li>
								<li className="mb-2">
									<span>04</span>Specialities
								</li>
								<li className="mb-2">
									<span>05</span>Claims Management
								</li>
								<li className="mb-2">
									<span>06</span>Reinsurance
								</li>
								<li>
									<span>07</span>Affinity Solutions
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
