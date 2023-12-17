import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

const TextSplitter = ({ text, cs }) => {
	const splitTextRef = useRef([]);

	useEffect(() => {
		gsap.to(splitTextRef.current, {
			duration: 5,
			opacity: 1,
			y: 0,
			stagger: 0.2,
			ease: "back.out(1.7)",
		});
	}, []);

	const splitText = text.split(" ").map((word, index) => (
		<span
			key={index}
			ref={(el) => (splitTextRef.current[index] = el)}
			style={{ opacity: 0, transform: "translateY(-100px)" }}
		>
			{word + " "}
		</span>
	));

	return <div className={cs}>{splitText}</div>;
};
TextSplitter.propTypes = {
	text: PropTypes.string.isRequired,
};
export default TextSplitter;
