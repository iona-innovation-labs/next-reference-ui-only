import React from "react";

const BlogDetails = () => {
	return (
		<div class="container">
			<div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
				<div class="lg:col-span-8 md:col-span-6">
					<div class="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
						<img src="assets/images/blog/09.jpg" alt="" />

						<div class="p-6">
							<p class="text-slate-400">
								The most well-known dummy text is the 'Lorem Ipsum', which is said to have
								originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language
								which more or less corresponds to 'proper' Latin. It contains a series of real Latin
								words. This ancient dummy text is also incomprehensible, but it imitates the rhythm
								of most European languages in Latin script.
							</p>
							<p class="text-slate-400 italic border-x-4 border-emerald-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">
								" There are many variations of passages of Lorem Ipsum available, but the majority
								have suffered alteration in some form, by injected humour, or randomised words which
								don't look even slightly believable. "
							</p>
							<p class="text-slate-400 mt-3">
								The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is
								that the text does not attract attention to itself or distract the viewer's
								attention from the layout.
							</p>
						</div>
					</div>

					<div class="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
						<h5 class="text-lg font-semibold">Leave A Comment:</h5>

						<form class="mt-8">
							<div class="grid lg:grid-cols-12 lg:gap-6">
								<div class="lg:col-span-6 mb-5">
									<div class="text-left">
										<label for="name" class="font-semibold">
											Your Name:
										</label>
										<div class="form-icon relative mt-2">
											<i data-feather="user" class="w-4 h-4 absolute top-3 start-4"></i>
											<input
												name="name"
												id="name"
												type="text"
												class="form-input ps-11"
												placeholder="Name :"
											/>
										</div>
									</div>
								</div>

								<div class="lg:col-span-6 mb-5">
									<div class="text-left">
										<label for="email" class="font-semibold">
											Your Email:
										</label>
										<div class="form-icon relative mt-2">
											<i data-feather="mail" class="w-4 h-4 absolute top-3 start-4"></i>
											<input
												name="email"
												id="email"
												type="email"
												class="form-input ps-11"
												placeholder="Email :"
											/>
										</div>
									</div>
								</div>
							</div>

							<div class="grid grid-cols-1">
								<div class="mb-5">
									<div class="text-left">
										<label for="comments" class="font-semibold">
											Your Comment:
										</label>
										<div class="form-icon relative mt-2">
											<i data-feather="message-circle" class="w-4 h-4 absolute top-3 start-4"></i>
											<textarea
												name="comments"
												id="comments"
												class="form-input ps-11 h-28"
												placeholder="Message :"
											></textarea>
										</div>
									</div>
								</div>
							</div>
							<button
								type="submit"
								id="submit"
								name="send"
								class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>

				<div class="lg:col-span-4 md:col-span-6">
					<div class="sticky top-20">
						<h5 class="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">
							Author
						</h5>
						<div class="text-center mt-8">
							<img
								src="assets/images/team/05.jpg"
								class="h-20 w-20 mx-auto rounded-full shadow mb-4"
								alt=""
							/>

							<a
								href=""
								class="text-lg font-medium hover:text-emerald-600 transition-all duration-500 ease-in-out h5"
							>
								Cristina Romsey
							</a>
							<p class="text-slate-400">Content Writer</p>
						</div>

						<h5 class="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
							Social sites
						</h5>
						<ul class="list-none text-center mt-8">
							<li class="inline">
								<a
									href=""
									class="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
								>
									<i data-feather="facebook" class="h-4 w-4"></i>
								</a>
							</li>
							<li class="inline">
								<a
									href=""
									class="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
								>
									<i data-feather="instagram" class="h-4 w-4"></i>
								</a>
							</li>
							<li class="inline">
								<a
									href=""
									class="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
								>
									<i data-feather="twitter" class="h-4 w-4"></i>
								</a>
							</li>
							<li class="inline">
								<a
									href=""
									class="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
								>
									<i data-feather="linkedin" class="h-4 w-4"></i>
								</a>
							</li>
							<li class="inline">
								<a
									href=""
									class="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
								>
									<i data-feather="github" class="h-4 w-4"></i>
								</a>
							</li>
							<li class="inline">
								<a
									href=""
									class="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
								>
									<i data-feather="youtube" class="h-4 w-4"></i>
								</a>
							</li>
							<li class="inline">
								<a
									href=""
									class="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
								>
									<i data-feather="gitlab" class="h-4 w-4"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogDetails;
