import PropTypes from "prop-types";
import { Checkmark } from "react-checkmark";

const Value = ({ content }) => {
	return (
		<div className="flex gap-3 sm:pl-8 md:pl-12 md:gap-4 items-center w-4/5 sm:w-3/4 md:w-1/2 xl:w-1/3 p-4">
			<div className="w-6 h-6 cursor-pointer">
				<Checkmark
					color="#309975"
					size="32px"
				/>
			</div>
			<p className="w-full cursor-pointer px-2 py-1.5 lg:py-3 text-white sm:text-2xl font-medium">
				{content}
			</p>
		</div>
	);
};

Value.propTypes = {
	content: PropTypes.string.isRequired,
};

export default Value;
