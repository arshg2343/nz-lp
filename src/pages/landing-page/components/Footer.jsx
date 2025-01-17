import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					{/* Column 1: Contact Information */}
					<div className="column">
						<h5>We'd love to hear from you</h5>
						<p>
							<i className="fas fa-map-marker-alt"></i>
							NZ Brokers, Firoz Gandhi Market, Ludhiana, Punjab,
							India
						</p>
						<p>
							<i className="fas fa-phone-volume"></i>
							+91 98159 02322
						</p>
					</div>

					{/* Column 2: Sales and Grievances */}
					<div className="column">
						<h5>For sales queries</h5>
						<p>
							<i className="far fa-envelope-open"></i>
							sales@nzbrokers.com
						</p>
						<h5>For grievances</h5>
						<p>
							<i className="far fa-envelope-open"></i>
							complaints@nzbrokers.com
						</p>
						<p>Mr. Dheeraj Sharma – Grievance Officer</p>
					</div>

					{/* Column 3: Important Links */}
					<div className="column">
						<h5>Important Links</h5>
						<div className="links">
							<p>Contact</p>
							<p>Privacy Policy</p>
							<p>Careers</p>
							<p>Disclaimer</p>
							<p>Sitemap</p>
						</div>
					</div>
				</div>

				{/* Copyright Section */}
				<div className="copyright">
					<p>© Copyright 2025 NZ Insurance Brokers Pvt. Ltd.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
