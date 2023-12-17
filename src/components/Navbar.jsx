import { useState } from "react";

import LogoImage from "../assets/image/logos/Imagotipo_v4.png";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	window.addEventListener("scroll", function () {
		const navbar = document.getElementById("navbar");
		if (window.scrollY > 0) {
			navbar.classList.add("bg-zinc-800"); // Or any other class that sets the background
		} else {
			navbar.classList.remove("bg-zinc-800");
		}
	});

	document.addEventListener("DOMContentLoaded", function () {
		const navItems = document.querySelectorAll(".nav-link");

		function onScroll() {
			let currentSection = "";

			// Check each section to see if it's in view
			document.querySelectorAll("section").forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.clientHeight;
				if (pageYOffset >= sectionTop - sectionHeight / 3) {
					currentSection = section.getAttribute("id");
				}
			});

			// Set the "active" class on the corresponding nav link and remove from others
			navItems.forEach((item) => {
				item.classList.remove("active");
				if (item.getAttribute("href").includes(currentSection)) {
					item.classList.add("active");
				}
			});
		}

		window.addEventListener("scroll", onScroll);
	});

	const DropdownNavbar = () => (
		<div className="text-center text-white flex flex-col justify-around items-center bg-stone-700 w-[100vw] h-[50vh] absolute px-8 py-4 top-24 left-0 rounded-md z-50">
			<button className="py-2 text-lg hover:font-medium hover:bg-gray-700 w-full">
				<a href="">Home</a>
			</button>
			<button className="py-2 cursor-pointer text-lg hover:font-medium hover:bg-gray-700 w-full">
				<a href="#services">Services</a>
			</button>
			<button className="py-2 cursor-pointer text-lg hover:font-medium hover:bg-gray-700 w-full">
				<a href="#about">About</a>
			</button>
			<button className="py-2 cursor-pointer text-lg hover:font-medium hover:bg-gray-700 w-full">
				<a href="#values">Values</a>
			</button>
		</div>
	);

	return (
		<div
			id="navbar"
			className="z-50 w-full flex justify-between md:justify-start items-center fixed left-0 py-6 px-8 xs:px-12 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-56"
		>
			<a
				href="#home"
				className="flex justify-center items-center w-40 h-12 pr-12 cursor-pointer"
			>
				<img
					src={LogoImage}
					className="object-cover"
				/>
			</a>
			<ul className="lg:text-2xl font-raleway font-light hidden md:flex">
				<li className="nav-link px-3 lg:px-6  hover:scale-110 transform">
					<a
						className="cursor-pointer"
						href="/#home"
					>
						Home
					</a>
				</li>
				<li className="nav-link px-3 lg:px-6 hover:scale-110 transform">
					<a
						className="cursor-pointer"
						href="#services"
						data-te-smooth-scroll-init
					>
						Our Services
					</a>
				</li>
				<li className="nav-link px-3 lg:px-6 hover:scale-110 transform">
					<a
						className="cursor-pointer"
						href="#about"
					>
						About Us
					</a>
				</li>
				<li className="nav-link px-3 lg:px-6 hover:scale-110 transform">
					<a
						className="cursor-pointer"
						href="#values"
					>
						Values
					</a>
				</li>
			</ul>
			<button
				data-collapse-toggle="navbar-sticky"
				type="button"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className="flex md:hidden items-center p-1 justify-center text text-gray-50 rounded-lg lg:hidden focus:ring-2 focus:ring-gray-200 mr-6 sm:mr-10 md:mr-12 lg:mr-8"
				aria-controls="navbar-sticky"
				aria-expanded="false"
			>
				<svg
					className="w-8 h-8"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
				{isMenuOpen && DropdownNavbar()}
			</button>
		</div>
	);
};

export default Navbar;
