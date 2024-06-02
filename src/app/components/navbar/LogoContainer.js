import React from "react";

const LogoContainer = ({ isLight }) => {
	return (
		<a className="logo" href="/">
			<div className="block sm:hidden">
				<img
					src="assets/images/logo-icon-40.png"
					className="h-10 inline-block dark:hidden"
					alt=""
				/>
				<img
					src="assets/images/logo-icon-40-white.png"
					className="h-10 hidden dark:inline-block"
					alt=""
				/>
			</div>
			<div className="sm:block hidden">
				{isLight ? (
					<span className="inline-block dark:hidden">
						<img src="assets/images/logo-dark.png" className="h-[24px] l-dark" alt="" />
						<img src="assets/images/logo-light.png" className="h-[24px] l-light" alt="" />
					</span>
				) : (
					<img
						src="assets/images/logo-dark.png"
						className="h-[24px] inline-block dark:hidden"
						alt=""
					/>
				)}

				<img
					src="assets/images/logo-white.png"
					className="h-[24px] hidden dark:inline-block"
					alt=""
				/>
			</div>
		</a>
	);
};

export default LogoContainer;
