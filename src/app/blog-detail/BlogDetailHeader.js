import React from "react";

const BlogDetailsHeader = () => {
	return (
		<>
			<section class="relative table w-full py-36 bg-background-1 bg-top bg-no-repeat bg-cover">
				<div class="absolute inset-0 bg-emerald-900/90"></div>
				<div class="container">
					<div class="grid grid-cols-1 text-center mt-10">
						<h3 class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white mb-3">
							Introducing new tools for your design.
						</h3>

						<ul class="list-none mt-6">
							<li class="inline-block text-white/50 mx-5">
								{" "}
								<span class="text-white block">Author :</span> <span class="block">Google</span>
							</li>
							<li class="inline-block text-white/50 mx-5">
								{" "}
								<span class="text-white block">Date :</span>{" "}
								<span class="block">21st Feb, 2023</span>
							</li>
							<li class="inline-block text-white/50 mx-5">
								{" "}
								<span class="text-white block">Time :</span> <span class="block">8 Min Read</span>
							</li>
						</ul>
					</div>
				</div>

				<div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
					<ul class="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
						<li class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
							<a href="index.html">Jobstack</a>
						</li>
						<li class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
							<a href="blogs.html">Blogs</a>
						</li>
						<li
							class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
							aria-current="page"
						>
							Single
						</li>
					</ul>
				</div>
			</section>
			<div class="relative">
				<div class="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
					<svg
						class="w-full h-auto"
						viewBox="0 0 2880 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
							fill="currentColor"
						></path>
					</svg>
				</div>
			</div>
		</>
	);
};

export default BlogDetailsHeader;
