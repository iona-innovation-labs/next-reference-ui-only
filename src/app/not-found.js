export default function NotFound() {
	let newDate = new Date();
	return (
		<>
			<section className="relative bg-emerald-600/5">
				<div className="container-fluid relative">
					<div className="grid grid-cols-1">
						<div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
							<div className="text-center">
								<a href="index.html">
									<img src="assets/images/logo-icon-40.png" className="mx-auto h-10" alt="" />
								</a>
							</div>
							<div className="title-heading text-center my-auto">
								<img src="assets/images/error.png" className="mx-auto" alt="" />
								<h1 className="mt-3 mb-6 md:text-4xl text-3xl font-bold">Page Not Found?</h1>
								<p className="text-slate-400">
									Whoops, this is embarassing. <br /> Looks like the page you were looking for
									wasn't found.
								</p>

								<div className="mt-4">
									<a
										href="index.html"
										className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md"
									>
										Back to Home
									</a>
								</div>
							</div>
							<div className="text-center">
								<p className="mb-0 text-slate-400 font-medium">
									© {newDate.getFullYear()} Jobstack. Design with{" "}
									<i className="mdi mdi-heart text-red-600"></i> by{" "}
									<a href="https://shreethemes.in/" target="_blank" className="text-reset">
										Shreethemes
									</a>
									.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="fixed bottom-3 end-3 z-10">
				<a
					href=""
					className="back-button btn btn-icon bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-full"
				>
					<i data-feather="arrow-left" className="h-4 w-4"></i>
				</a>
			</div>
		</>
	);
}
