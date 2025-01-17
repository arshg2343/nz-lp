import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="bootstrap-scope">
			<header className="header header-transparent sticky-top ">
				<div className="container">
					<nav className="navbar navbar-expand-lg">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarCollapse"
							aria-controls="navbarCollapse"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i className="fas fa-align-left"></i>
						</button>
						<a className="navbar-brand" href="/">
							<img
								className="img-fluid"
								src="/Screenshot_2025-01-11_012649-removebg-preview.png"
								alt="Insurance Broker Company in India"
							/>
							NZ BROKERS
						</a>
						<div
							className="collapse navbar-collapse"
							id="navbarCollapse"
						>
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<a className="nav-link" href="/">
										Home
									</a>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="corporateDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Corporate
									</a>
									<div
										className="dropdown-menu"
										aria-labelledby="corporateDropdown"
									>
										<a
											className="dropdown-item"
											href="/who-we-are"
										>
											Who we are
										</a>
										<a
											className="dropdown-item"
											href="/why-prudent"
										>
											Why NZ?
										</a>
										<a
											className="dropdown-item"
											href="/team"
										>
											Leadership Team
										</a>
									</div>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="solutionsDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Solutions
									</a>
									<div
										className="dropdown-menu"
										aria-labelledby="solutionsDropdown"
									>
										<a
											className="dropdown-item"
											href="/commercial-insurance"
										>
											Commercial Insurance
										</a>
										<a
											className="dropdown-item"
											href="/employee-benefits"
										>
											Employee Benefits
										</a>
										<a
											className="dropdown-item"
											href="/hni-suite"
										>
											HNI Suite
										</a>
									</div>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="industriesDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Industries
									</a>
									<div
										className="dropdown-menu"
										aria-labelledby="industriesDropdown"
									>
										<a
											className="dropdown-item"
											href="/software-technology"
										>
											Software & Technology
										</a>
										<a
											className="dropdown-item"
											href="/bfsi"
										>
											BFSI
										</a>
										<a
											className="dropdown-item"
											href="/distilleries"
										>
											Distilleries & Breweries
										</a>
									</div>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/careers">
										Careers
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/contact">
										Contact
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
