import React from "react";
import { CheckCircle } from "lucide-react";

const About = () => {
	return (
		<section className="py-5 bg-light">
			<div className="container max-w-7xl">
				<div className="row align-items-center g-4">
					{/* Left Column: Text Content */}
					<div className="col-lg-6 ">
						<h2 className="display-6 fw-bold mb-4">
							Why Choose NZ Brokers for Insurance?
						</h2>
						<div className="d-flex flex-column gap-4">
							<div className="d-flex">
								<CheckCircle
									className="text-primary me-3 mt-1"
									size={24}
								/>
								<div>
									<h3 className="fw-semibold h5 mb-2">
										Independent Brokers
									</h3>
									<p className="text-secondary">
										We work for you, not the insurance
										companies, ensuring unbiased
										recommendations.
									</p>
								</div>
							</div>
							<div className="d-flex">
								<CheckCircle
									className="text-primary me-3 mt-1"
									size={24}
								/>
								<div>
									<h3 className="fw-semibold h5 mb-2">
										Multiple Quotes
									</h3>
									<p className="text-secondary">
										Compare quotes from leading insurers to
										find the best coverage at competitive
										rates.
									</p>
								</div>
							</div>
							<div className="d-flex">
								<CheckCircle
									className="text-primary me-3 mt-1"
									size={24}
								/>
								<div>
									<h3 className="fw-semibold h5 mb-2">
										Claims Advocacy
									</h3>
									<p className="text-secondary">
										We're by your side throughout the claims
										process, ensuring fair and prompt
										settlement.
									</p>
								</div>
							</div>
							<div className="d-flex">
								<CheckCircle
									className="text-primary me-3 mt-1"
									size={24}
								/>
								<div>
									<h3 className="fw-semibold h5 mb-2">
										Personalized Service
									</h3>
									<p className="text-secondary">
										Dedicated account managers who
										understand your unique insurance needs.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Image */}
					<div className="col-lg-6 position-relative">
						<img
							src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
							alt="Insurance Consultation"
							className="img-fluid rounded shadow"
						/>
						<div
							className="position-absolute bg-primary text-white p-4 rounded d-none d-md-block"
							style={{ bottom: "-24px", right: "-24px" }}
						>
							<p className="h3 fw-bold mb-0">25+</p>
							<p className="small mb-0">Years of Experience</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
