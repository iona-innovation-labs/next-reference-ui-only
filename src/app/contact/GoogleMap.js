import React from "react";

const GoogleMap = () => {
	return (
		<div class="container-fluid relative mt-20">
			<div class="grid grid-cols-1">
				<div class="w-full leading-[0] border-0">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
						style={{ border: "0" }}
						class="w-full h-[500px]"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default GoogleMap;
