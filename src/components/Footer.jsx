import FooterLogoImage from "../assets/image/logos/Imagotipo_v8.png";

import FacebookIcon from "../assets/image/icons/facebook.png";
import InstagramIcon from "../assets/image/icons/instagram.png";
import LinkedInIcon from "../assets/image/icons/linkedin.png";
import PhoneIcon from "../assets/image/icons/phone.png";
import EmailIcon from "../assets/image/icons/email.png";

const Footer = () => {
	return (
		<div className="flex flex-col divide-y divide-solid bg-zinc-800">
			<div
				id="footer"
				className="flex flex-wrap w-full text-white px-8 xs:px-12 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-56 pt-16 pb-5"
			>
				<div className="flex flex-col gap-4 w-full 2xl:w-1/2 pb-6 2xl:pb-0 2xl:pr-12">
					<img
						src={FooterLogoImage}
						className="w-24 h-20"
					/>
					<p className="text-lg text-justify md:text-left">
						Somos más que proveedores de servicios; somos artífices de un
						eclipse tecnológico, donde cada contribución es un momento único y
						extraordinario, como el sol irradiando energía creativa y la luna
						reflejando la luz de las ideas.
					</p>
				</div>
				<div className="flex flex-wrap w-full 2xl:w-1/2 2xl:pt-12">
					<div className="w-full sm:w-1/2 md:w-1/3 flex flex-col pb-6 gap-3">
						<p className="font-medium text-2xl">Quick Link</p>
						<ul className="list-disc pl-5 text-lg">
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#services">Our Services</a>
							</li>
							<li>
								<a href="#about">About Us</a>
							</li>
						</ul>
					</div>
					<div className="w-full sm:w-1/2 md:w-1/3 flex flex-col pb-6">
						<p className="font-medium text-2xl mb-2">Contact Us</p>
						<div className="flex items-center gap-2">
							<div className="flex justify-center items-center w-6 h-6">
								<img
									className="object-cover text-gray"
									src={PhoneIcon}
								/>
							</div>
							<p>+502 12345</p>
						</div>
						<div className="flex items-center gap-2">
							<div className="flex justify-center items-center w-6 h-6">
								<img
									className="object-contain"
									src={EmailIcon}
								/>
							</div>
							<p>upport@gamil.com</p>
						</div>
					</div>
					<div className="w-full sm:w-1/2 md:w-1/3 gap-2">
						<p className="font-medium text-2xl mb-2">Social Media</p>
						<div className="flex items-center mt-4 gap-3">
							<a className="flex justify-center items-center cursor-pointer w-6 h-6">
								<div className="flex justify-center items-center w-6 h-6">
									<img
										className="object-contain"
										src={InstagramIcon}
									/>
								</div>
							</a>
							<a className="flex justify-center items-center cursor-pointer w-6 h-6">
								<div className="flex justify-center items-center w-6 h-6">
									<img
										className="object-contain"
										src={FacebookIcon}
									/>
								</div>
							</a>
							<a className="flex justify-center items-center cursor-pointer w-6 h-6">
								<div className="flex justify-center items-center w-6 h-6">
									<img
										className="object-contain"
										src={LinkedInIcon}
									/>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<p className="text-white text-center w-full py-4 px-8 xs:px-12 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-56 bg-gray-900">
				COPYRIGHT © 2023 AHAU-X - ALL RIGHTS RESERVED.
			</p>
		</div>
	);
};

export default Footer;
