import React from "react";

const QuestionAndAnswer = () => {
	return (
		<div className="container md:mt-24 mt-16">
			<div className="grid grid-cols-1 pb-8 text-center">
				<h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
					Questions & Answers
				</h3>

				<p className="text-slate-400 max-w-xl mx-auto">
					Search all the open positions on the web. Get your own personalized salary estimate. Read
					reviews on over 30000+ companies worldwide.
				</p>
			</div>

			<div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
				<div className="flex">
					<i data-feather="help-circle" className="h-8 text-emerald-600 me-3"></i>
					<div className="flex-1">
						<h5 className="mb-2 text-lg font-semibold">
							How our <span className="text-emerald-600">Jobstack</span> work ?
						</h5>
						<p className="text-slate-400">
							Due to its widespread use as filler text for layouts, non-readability is of great
							importance: human perception is tuned to recognize certain patterns and repetitions in
							texts.
						</p>
					</div>
				</div>

				<div className="flex">
					<i data-feather="help-circle" className="h-8 text-emerald-600 me-3"></i>
					<div className="flex-1">
						<h5 className="mb-2 text-lg font-semibold"> What is the main process open account ?</h5>
						<p className="text-slate-400">
							If the distribution of letters and 'words' is random, the reader will not be
							distracted from making a neutral judgement on the visual impact
						</p>
					</div>
				</div>

				<div className="flex">
					<i data-feather="help-circle" className="h-8 text-emerald-600 me-3"></i>
					<div className="flex-1">
						<h5 className="mb-2 text-lg font-semibold"> How to make unlimited data entry ?</h5>
						<p className="text-slate-400">
							Furthermore, it is advantageous when the dummy text is relatively realistic so that
							the layout impression of the final publication is not compromised.
						</p>
					</div>
				</div>

				<div className="flex">
					<i data-feather="help-circle" className="h-8 text-emerald-600 me-3"></i>
					<div className="flex-1">
						<h5 className="mb-2 text-lg font-semibold">
							{" "}
							Is <span className="text-emerald-600">Jobstack</span> safer to use with my account ?
						</h5>
						<p className="text-slate-400">
							The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated
							in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or
							less corresponds to 'proper' Latin.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuestionAndAnswer;
