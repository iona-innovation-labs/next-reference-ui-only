import React from "react";

const NavigationMenu = ({ isLight }) => {
	return (
		<div id="navigation">
			<ul className={"navigation-menu justify-end " + (isLight && "nav-light")}>
				<li className="has-submenu parent-menu-item">
					<a href="javascript:void(0)">Home</a>
					<span className="menu-arrow"></span>
					<ul className="submenu">
						<li>
							<a href="index.html" className="sub-menu-item">
								Hero One
							</a>
						</li>
						<li>
							<a href="index-two.html" className="sub-menu-item">
								Hero Two
							</a>
						</li>
						<li>
							<a href="index-three.html" className="sub-menu-item">
								Hero Three
							</a>
						</li>
						<li>
							<a href="index-four.html" className="sub-menu-item">
								Hero Four
							</a>
						</li>
						<li>
							<a href="index-five.html" className="sub-menu-item">
								Hero Five
							</a>
						</li>
						<li>
							<a href="index-six.html" className="sub-menu-item">
								Hero Six{" "}
							</a>
						</li>
						<li>
							<a href="index-seven.html" className="sub-menu-item">
								Hero Seven{" "}
							</a>
						</li>
					</ul>
				</li>

				<li className="has-submenu parent-parent-menu-item">
					<a href="javascript:void(0)"> Jobs </a>
					<span className="menu-arrow"></span>
					<ul className="submenu">
						<li>
							<a href="/job-categories" className="sub-menu-item">
								Job Categories
							</a>
						</li>

						<li className="has-submenu parent-menu-item">
							<a href="javascript:void(0)"> Job Grids </a>
							<span className="submenu-arrow"></span>
							<ul className="submenu">
								<li>
									<a href="job-grid" className="sub-menu-item">
										Job Grid Four{" "}
									</a>
								</li>
							</ul>
						</li>

						<li className="has-submenu parent-menu-item">
							<a href="javascript:void(0)"> Job Lists </a>
							<span className="submenu-arrow"></span>
							<ul className="submenu">
								<li>
									<a href="job-list" className="sub-menu-item">
										Job List Four
									</a>
								</li>
							</ul>
						</li>

						<li className="has-submenu parent-menu-item">
							<a href="javascript:void(0)"> Job Detail </a>
							<span className="submenu-arrow"></span>
							<ul className="submenu">
								<li>
									<a href="job-detail" className="sub-menu-item">
										Job Detail Two
									</a>
								</li>
							</ul>
						</li>

						<li>
							<a href="job-apply" className="sub-menu-item">
								Job Apply
							</a>
						</li>

						<li>
							<a href="job-post" className="sub-menu-item">
								Job Post{" "}
							</a>
						</li>

						<li>
							<a href="career.html" className="sub-menu-item">
								Career{" "}
							</a>
						</li>
					</ul>
				</li>

				<li className="has-submenu parent-parent-menu-item">
					<a href="javascript:void(0)">Pages</a>
					<span className="menu-arrow"></span>
					<ul className="submenu">
						<li>
							<a href="about-us" className="sub-menu-item">
								About Us
							</a>
						</li>
						<li>
							<a href="services" className="sub-menu-item">
								Services
							</a>
						</li>
						<li>
							<a href="pricing" className="sub-menu-item">
								Pricing{" "}
							</a>
						</li>

						<li className="has-submenu parent-menu-item">
							<a href="javascript:void(0)">Employers</a>
							<span className="submenu-arrow"></span>
							<ul className="submenu">
								<li>
									<a href="employer-list" className="sub-menu-item">
										Employers
									</a>
								</li>
								<li>
									<a href="employer-detail.html" className="sub-menu-item">
										Employer Detail
									</a>
								</li>
							</ul>
						</li>

						<li className="has-submenu parent-menu-item">
							<a href="javascript:void(0)">Candidates</a>
							<span className="submenu-arrow"></span>
							<ul className="submenu">
								<li>
									<a href="candidate-list.html" className="sub-menu-item">
										Candidates
									</a>
								</li>
								<li>
									<a href="candidate-detail.html" className="sub-menu-item">
										Candidate Detail
									</a>
								</li>
							</ul>
						</li>

						<li className="has-submenu parent-menu-item">
							<a href="javascript:void(0)"> Helpcenter </a>
							<span className="submenu-arrow"></span>
							<ul className="submenu">
								<li>
									<a href="helpcenter-overview.html" className="sub-menu-item">
										Overview
									</a>
								</li>
								<li>
									<a href="helpcenter-faqs.html" className="sub-menu-item">
										FAQs
									</a>
								</li>
								<li>
									<a href="helpcenter-guides.html" className="sub-menu-item">
										Guides
									</a>
								</li>
								<li>
									<a href="helpcenter-support.html" className="sub-menu-item">
										Support
									</a>
								</li>
							</ul>
						</li>

						<li className="has-submenu parent-menu-item">
							<a href="javascript:void(0)"> Blog </a>
							<span className="submenu-arrow"></span>
							<ul className="submenu">
								<li>
									<a href="blogs" className="sub-menu-item">
										{" "}
										Blogs
									</a>
								</li>
								<li>
									<a href="blog-detail" className="sub-menu-item">
										{" "}
										Blog Detail
									</a>
								</li>
							</ul>
						</li>

						<li className="has-submenu parent-menu-item">
							<a href="javascript:void(0)"> Auth Pages </a>
							<span className="submenu-arrow"></span>
							<ul className="submenu">
								<li>
									<a href="login.html" className="sub-menu-item">
										{" "}
										Login
									</a>
								</li>
								<li>
									<a href="signup.html" className="sub-menu-item">
										{" "}
										Signup
									</a>
								</li>
								<li>
									<a href="reset-password.html" className="sub-menu-item">
										{" "}
										Forgot Password
									</a>
								</li>
								<li>
									<a href="lock-screen.html" className="sub-menu-item">
										{" "}
										Lock Screen
									</a>
								</li>
							</ul>
						</li>

						<li className="has-submenu parent-menu-item">
							<a href="javascript:void(0)"> Utility </a>
							<span className="submenu-arrow"></span>
							<ul className="submenu">
								<li>
									<a href="terms.html" className="sub-menu-item">
										Terms of Services
									</a>
								</li>
								<li>
									<a href="privacy.html" className="sub-menu-item">
										Privacy Policy
									</a>
								</li>
							</ul>
						</li>

						<li className="has-submenu parent-menu-item">
							<a href="javascript:void(0)"> Special </a>
							<span className="submenu-arrow"></span>
							<ul className="submenu">
								<li>
									<a href="comingsoon.html" className="sub-menu-item">
										{" "}
										Coming Soon
									</a>
								</li>
								<li>
									<a href="maintenance.html" className="sub-menu-item">
										{" "}
										Maintenance
									</a>
								</li>
								<li>
									<a href="error.html" className="sub-menu-item">
										{" "}
										404!
									</a>
								</li>
								<li>
									<a href="thankyou.html" className="sub-menu-item">
										{" "}
										Thank you
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>

				<li>
					<a href="contact" className="sub-menu-item">
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
};

export default NavigationMenu;
