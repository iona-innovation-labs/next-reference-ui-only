import React from "react";

const SearchInput = () => {
	return (
		<li className="inline-block mb-0">
			<div className="relative top-[3px]">
				<i className="uil uil-search text-lg absolute top-[3px] end-3"></i>
				<input
					type="text"
					className="form-input h-9 pe-10 rounded-3xl sm:w-44 w-36 border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900"
					name="s"
					id="searchItem"
					placeholder="Search..."
				/>
			</div>
		</li>
	);
};

export default SearchInput;
