import Value from "../components/Value.jsx";
import ScrollToTop from "react-scroll-to-top";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Image1 from "../assets/image/image1.jpg";
import Image2 from "../assets/image/image2.png";
import Image3 from "../assets/image/image3.jpg";
import Image4 from "../assets/image/image4.jpg";
import Image5 from "../assets/image/image5.jpg";

import Icon1 from "../assets/image/icons/icon1.jpg";
import Icon2 from "../assets/image/icons/icon2.png";
import Icon3 from "../assets/image/icons/icon3.jpg";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TextSplitter from "../components/TextSplitter.jsx";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
	const serviceContainer = useRef();
	const aboutComponent = useRef();

	useGSAP(() => {
		gsap.from(".service1", {
			scrollTrigger: ".service1", // start the animation when ".box" enters the viewport (once)
			x: -500,
			ease: "power.out",
			duration: 1,
		});
	});
	useGSAP(() => {
		gsap.from(".service2", {
			scrollTrigger: ".service2", // start the animation when ".box" enters the viewport (once)
			x: 500,
			ease: "power.out",
			duration: 1,
		});
	});
	useGSAP(() => {
		gsap.from(".service3", {
			scrollTrigger: ".service2", // start the animation when ".box" enters the viewport (once)
			y: 500,
			ease: "power.out",
			duration: 1,
		});
	});
	useGSAP(() => {
		gsap.from(".mission", {
			scrollTrigger: ".mission", // start the animation when ".box" enters the viewport (once)
			x: -100,
			ease: "power4.in",
			duration: 0.5,
		});
	});

	useGSAP(() => {
		gsap.from(".vision", {
			scrollTrigger: ".vision", // start the animation when ".box" enters the viewport (once)
			x: 100,
			ease: "power4.in",
			duration: 0.5,
		});
	});

	useGSAP(() => {
		gsap.from(".history1", {
			scrollTrigger: ".history1", // start the animation when ".box" enters the viewport (once)
			opacity: 0,
			ease: "power1.in",
			duration: 1,
		});
	});
	useGSAP(() => {
		gsap.from(".history2", {
			scrollTrigger: ".history2", // start the animation when ".box" enters the viewport (once)
			opacity: 0,
			duration: 1.3,
			ease: "power1.in",
		});
	});
	useGSAP(() => {
		gsap.from(".history3", {
			scrollTrigger: ".history3", // start the animation when ".box" enters the viewport (once)
			opacity: 0,
			duration: 1.6,
			ease: "power1.in",
		});
	});

	return (
		<>
			<Navbar />
			<div className="content relative">
				<img className="absolute top-0 w-[100vw] h-[100vh]" />
				<div
					id="home"
					className="flex flex-wrap items-center bg-cover h-[100vh] w-full px-8 xs:px-12 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-56 relative"
					style={{
						backgroundImage: `url(${Image1})`,
					}}
				>
					<div className="flex flex-col w-full gap-12 items-center text-white z-10 mt-32">
						<TextSplitter
							text="The brain is not a glass to be filled, but a lamp to be lit."
							cs="font-bold w-full font-itc text-center text-3xl md:text-4xl lg:text-5xl xl:text:6xl 2xl:text-7xl"
						/>
						<div className="text-center text-lg lg:text-xl 2xl:text-2xl text-white">
							<TextSplitter
								text="We are a technology company focused on Block chain and AI – our
							mission is to help clients like you build custom end-to-end
							solutions that solve real-world problems and deliver meaningful
							results."
								cs="font-raleway"
							/>
						</div>
						<a className="startButton border border-white  text-white text-xl hover:scale-110 transform duration-200 cursor-pointer  px-16 py-3 rounded-full mt-48">
							Get Start
						</a>
					</div>
				</div>

				<div
					id="services"
					ref={serviceContainer}
					className="flex flex-col items-center bg-cover w-full px-8 xs:px-12 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-56 py-16 lg:py-24 gap-6 lg:gap-12 relative"
					style={{
						backgroundImage: `url(${Image2})`,
					}}
				>
					<div className="w-full h-full bg-gray-300 opacity-80 absolute top-0 left-0 z-0"></div>

					<p className="text-gray-900 font-bold font-itc text-center text-5xl xl:text:6xl 2xl:text-6xl z-10">
						Our Services
					</p>
					<div className="flex flex-wrap items-start justify-center z-10">
						<div className="service1 p-6 w-full h-full sm:w-4/5 md:w-2/3 lg:w-1/2">
							<div className="flex flex-col items-center bg-white shadow-md shadow-gray-500/80 cursor-pointer transition-transform duration-300 hover:scale-105 rounded-lg p-6 md:p-8 lg:p-12 gap-2 lg:gap-4">
								<div className="w-16 h-16 rounded-full border-2 border-sky-700">
									<img
										src={Icon1}
										className="rounded-full"
									/>
								</div>
								<p className="text-black text-center text-2xl font-bold font-raleway">
									Digital Transformation Consultancies
								</p>
								<p className="text-gray-800 text-center font-raleway">
									We guide companies on their journey into the digital era
									through specialized consultaAons. We idenAfy opportunities,
									design strategies, and provide soluAons to optimize processes,
									enhance efficiency, and boost compeAAveness in an
									ever-changing digital landscape.
								</p>
							</div>
						</div>
						<div className="service2 p-6 w-full h-full sm:w-4/5 md:w-2/3 lg:w-1/2">
							<div className="flex flex-col items-center bg-white shadow-md shadow-gray-500/80 cursor-pointer transition-transform duration-300 hover:scale-105 rounded-lg p-6 md:p-10 lg:p-12 gap-2 lg:gap-4">
								<div className="w-16 h-16 rounded-full border-2 border-sky-700">
									<img
										src={Icon3}
										className="rounded-full"
									/>
								</div>
								<p className="text-black text-center text-2xl font-raleway font-bold">
									Innovation and Creativity
								</p>
								<p className="text-gray-800 text-center font-raleway">
									We foster innovation and creativity as fundamental drivers of
									progress. We collaborate closely with our clients to generate
									disruptive ideas, implement creative solutions, and catalyze
									innovation in all aspects of their operations, from products
									and services to business models.
								</p>
							</div>
						</div>
						<div className="service3 p-6 w-full h-full sm:w-4/5 md:w-2/3 lg:w-1/2">
							<div className="flex flex-col items-center bg-white shadow-md shadow-gray-500/80 cursor-pointer transition-transform duration-300 hover:scale-105 rounded-lg p-6 md:p-8 lg:p-12 gap-2 lg:gap-4">
								<div className="w-16 h-16 rounded-full border-2 border-sky-700">
									<img
										src={Icon2}
										className="rounded-full"
									/>
								</div>
								<p className="text-black text-center text-2xl font-raleway font-bold">
									Development and Integration of Technologies
								</p>
								<p className="text-gray-800 text-center font-relway">
									We specialize in the development and integraAon of advanced
									technologies to tailor soluAons to our clients&rsquo; specific
									needs. From applicaAon design to the implementaAon of complex
									systems, we offer services that drive operaAonal efficiency
									and maximize technological performance.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div
					className=" flex flex-col z-10 bg-stone-100 pt-16 lg:pt-24 gap-8 mg:gap-16 lg:gap-24"
					ref={aboutComponent}
					id="about"
				>
					<p className="text-gray-900 font-bold text-center text-5xl xl:text:6xl 2xl:text-6xl font-itc z-10">
						About Us
					</p>
					<div className="flex flex-wrap items-center justify-center gap-8 lg:gap-0">
						<div className="mission w-4/5 sm:w-3/4 md:w-2/3 lg:h-[40vh] 2xl:h-[50vh] lg:w-3/5 transform duration-500 lg:hover:-translate-x-16 px-8 xs:px-12 sm:px-16 md:px-24 lg:pl-32 xl:pl-40 2xl:pl-56 py-8 lg:pr-8 lg:bg-yellow shadow-lg shadow-gay-500/50 lg:shadow-yellow rounded-xl lg:rounded-r-xl">
							<img
								src={Image3}
								className="w-full h-full object-cover rounded-xl"
							/>
						</div>
						<div className="w-full lg:w-2/5 flex flex-col gap-5 lg:pl-12 px-8 xs:px-12 sm:px-16 md:px-24 lg:pr-32 xl:pr-40 2xl:pr-56">
							<p className="text-yellow text-center text-3xl md:text-4xl lg:text-left lg:text-3xl 2xl:text-4xl font-medium">
								Our Mission
							</p>
							<p className="text-gray-800 text-justify  lg:text-left text-xl md:text-2xl lg:text-lg 2xl:text-xl font-raleway">
								At Ahau-X, we not only optimize processes but also inspire our
								clients to believe in the power of innovaAon. We overcome
								limitaAons and contribute to the sustainable development of
								Guatemala and the world. We don&rsuqo;t just offer services; we
								provide soluAons that go beyond technology, creating an
								environment where determinaAon and passion drive meaningful
								change.
							</p>
						</div>
					</div>
					<hr />
					<div className="flex flex-wrap-reverse items-center justify-center gap-8 lg:gap-0">
						<div className="w-full lg:w-2/5 flex flex-col gap-5 lg:pr-12 px-8 xs:px-12 sm:px-16 md:px-24 lg:pl-32 xl:pl-40 2xl:pl-56">
							<p className="text-green text-center text-3xl md:text-4xl lg:text-left lg:text-3xl 2xl:text-4xl font-medium">
								Our Vision
							</p>
							<p className="text-gray-800 text-justify text-xl md:text-2xl lg:text-left lg:text-lg 2xl:text-xl font-raleway">
								At Ahau-X, we lead technological development by being recognized
								for turning disruptive ideas into tangible realities. We are
								more than service providers; we are architects of a
								technological eclipse, where each contribuAon is a unique and
								extraordinary moment, like the sun radiating creative energy and
								the moon reflecting the light of ideas.
							</p>
						</div>
						<div className="vision w-4/5 sm:w-3/4 md:w-2/3 lg:h-[40vh] 2xl:h-[50vh]  transform duration-500 lg:hover:translate-x-16  lg:w-3/5 px-8 xs:px-12 sm:px-16 md:px-24 lg:pr-32 xl:pr-40 2xl:pr-56 py-8 lg:pl-8 lg:bg-green shadow-lg shadow-gay-500/50 lg:shadow-sky-600/50 rounded-xl lg:rounded-l-xl">
							<img
								src={Image4}
								className="w-full h-full object-cover rounded-xl"
							/>
						</div>
					</div>
					<hr />
					<div
						id="values"
						className="flex flex-col bg-transparent bg-fixed items-center bg-cover w-full px-8 xs:px-12 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-56 py-16 lg:py-24 gap-6 lg:gap-12 relative"
						style={{
							backgroundImage: `url(${Image5})`,
						}}
					>
						<div className="w-full h-full bg-gray-600 opacity-80 absolute top-0 left-0 z-0"></div>
						{/* <img src={Image5} className="bg-fixed" /> */}
						<p className="text-white font-bold text-center text-5xl xl:text:6xl 2xl:text-6xl font-itc z-10">
							Our Values
						</p>
						<div className="values w-full flex flex-wrap items-center justify-center md:justify-start text-stone-800 text-lg md:text-xl lg:text-2xl 2xl:text-3xl lg:text-bold z-10">
							<Value content="Passion" />
							<Value content="Determination" />
							<Value content="Personal Development" />
							<Value content="Teamwork" />
							<Value content="Responsibility" />
							<Value content="Integrity" />
							<Value content="Personal Development" />
							<Value content="Adaptibility" />
							<Value content="Creativity" />
						</div>
					</div>
				</div>
				<div
					id="history"
					className="flex flex-col bg-white text-black px-8 xs:px-12 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-56 py-16 lg:py-24 gap-4 lg:gap-8"
				>
					<p className="font-bold text-center text-3xl md:text-4xl lg:text-5xl xl:text:6xl font-itc 2xl:text-6xl">
						Our History
					</p>
					<p className="text-justify lg:text-center text-lg lg:text-xl 2xl:text-2xl text-gray-700 font-raleway">
						Ahau-X is a passionate group of technologists commided to
						Guatemala&rsquo;s development. From a young age, we have been
						involved in communities fostering new technologies and providing
						accessibility to all. We have always had the idea of creating new
						and revoluAonary things to support development and create opp
					</p>
					<div className="flex flex-col items-center">
						<div className="history1 py-4 w-full md:4/5 lg:w-full md:pr-16 lg:pr-32">
							<div className="p-8 rounded-lg bg-white shadow-md shadow-gray-500/80 cursor-pointer">
								<h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-2">
									Founded in 2010
								</h3>
								<p className="text-gray-700 mb-3">
									The journey began when our founders...
								</p>
								<span className="text-sm italic text-gray-600">
									April 12, 2010
								</span>
							</div>
						</div>
						<div className="history2 py-4 w-full md:4/5 lg:full md:pl-16 lg:pl-32 cursor-pointer">
							<div className="p-8 rounded-lg bg-white shadow-md shadow-gray-500/80 cursor-pointer">
								<h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-2">
									First Product Launch
								</h3>
								<p className="text-gray-700 mb-3">
									We launched our flagship product...
								</p>
								<span className="text-sm italic text-gray-600">
									August 25, 2012
								</span>
							</div>
						</div>
						<div className="history3 py-4 w-full md:4/5 lg:full md:pr-16 lg:pr-32 cursor-pointer">
							<div className="p-8 rounded-lg bg-white shadow-md shadow-gray-500/80 cursor-pointer">
								<h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-2">
									Significant partnerships or collaborations
								</h3>
								<p className="text-gray-700 mb-3">
									We launched our flagship product...
								</p>
								<span className="text-sm italic text-gray-600">
									May 14, 2014
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<ScrollToTop
				className="flex justify-center items-center rounded-full z-50"
				smooth
			/>
		</>
	);
};

export default Landing;
