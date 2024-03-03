import React from "react";
import classList from "./index.module.scss";
import ReuseableRow from "../../components/ReuseableRow/ReuseableRow";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import BannerMultiLogo from "../../components/BannerMultiLogo/BannerMultiLogo";
import Paragraph from "../../components/Paragraph/Paragraph";
import ShowCaseWrapper from "../../components/ShowCaseWrapper/ShowCaseWrapper";
import Packages from "../../components/Packages/Packages";
import ServicesDesign from "../../components/ServicesDesign/ServicesDesign";
import ComboPackage from "../../components/ComboPakage/ComboPackage";
import TestimonialV2 from "../../components/TestimonialV2/TestimonialV2";
import ContactForm from "../../components/ContactForm/ContactForm";
import bgWebDesign from "../../assets/images/sample/bgWebDesign.png";
import mobile1 from "../../assets/images/mobImages/1.png";
import mobile2 from "../../assets/images/mobImages/2.png";
import mobile3 from "../../assets/images/mobImages/3.png";
import mobile4 from "../../assets/images/mobImages/4.png";
import NavLink from "../../components/Navlinks/Navlinks";

import Head from "next/head";
import { phoneNumber } from "../../utils/Data/globalVariables";
import { mobileApplicationPortfolio } from "../../utils/Data/Data";
import RankLogo from "../../components/RankLogo/RankLogo";

const index = () => {
	return (
		<>
			<div className={classList.ecommerce}>
				<Head>
					<title> Mobile app development company in new york | Company</title>
					<meta
						name="description"
						content="Company is offering vast array of mobile application development services. Our developers are ready to take-on any challenge to offer premium services"
					/>
				</Head>
				<ReuseableRow
					cover={true}
					backgroundImage={bgWebDesign}
					contentImage={mobile1}
				>
					<Header color="white" fontWeight="bold" fontSize="45">
						Mobile app development company in new york
					</Header>
					<Paragraph color="white">
						Company is offering vast array of mobile application development
						services. Our developers are ready to take-on any challenge to offer
						premium services
					</Paragraph>
					<div>
						<NavLink href="/contact">
							<Button
								backgroundColor="#FFFFFF"
								color="#1D2228"
								hoverLight={true}
							>
								Get Started
							</Button>
						</NavLink>
					</div>
					<BannerMultiLogo />
				</ReuseableRow>
				<ReuseableRow
					backgroundImage={"none"}
					contentImage={mobile4}
					imageClass={classList.widthUnset}
				>
					<Paragraph>Top Mobile Application development Agency</Paragraph>
					<Header fontWeight="bold" fontSize="30">
						Custom Mobile Application Development Solitions:
					</Header>
					<Paragraph>
						Our team will be working alongside you to create practical and
						seamless experiences across all devices, letting you to get the most
						out of mobile technology for your company. We are specialists in
						custom mobile app development. This includes professional business
						analysis, mobile app design and development from idea to launch,
						infrastructure integration, and on-demand scalability and
						optimization. Company offer mobile application development services
						to various industries and sectors. Using cutting-edge technology and
						tried-and-true methodologies, we design mobile applications for a
						number of platforms. Being the top mobile app development and design
						company, we have an impressive history of developing mobile apps for
						large corporations, startups, organizations, and other technology
						firms. Our mobile products have provided our clients with a quick
						return on investment and new revenue streams over the years. Our
						developers offer a multitude of web and mobile app development
						services for different industries.
					</Paragraph>
					<div className={classList.btn_group_contact}>
						<Button
							hover={true}
							color="white"
							style={{
								marginRight: "10px",
								borderRadius: "6px",
							}}
						>
							Get Started
						</Button>
						<Button
							hoverLight={true}
							color="black"
							backgroundColor="transparent"
							style={{ border: "1px solid black", borderRadius: "6px" }}
						>
							{phoneNumber}
						</Button>
					</div>
				</ReuseableRow>
				{/* <SoloPortFolio /> */}
				<ShowCaseWrapper data={mobileApplicationPortfolio} />
				{/* TODO */}
				{/* Add Custom Mobile Price Application */}
				<ServicesDesign
					image={mobile2}
					heading="Establishing brands with flexible services and solutions"
				/>
				<RankLogo />
				<ComboPackage />
				<ReuseableRow
					backgroundImage={"none"}
					contentImage={mobile3}
					imageClass={classList.widthUnset}
				>
					<Paragraph>Online Mobile Application Service</Paragraph>
					<Header fontWeight="bold" fontSize="30">
						Why Choose Company to Develop your Mobile Application?
					</Header>
					<Paragraph>
						When you work with seasoned mobile app developers, you can expect
						predictable success. We use a proactive approach and agile
						methodology to guarantee that your time and money are monetized at
						every step of development, and that you obtain a digital product
						that completely meets your objectives and even surpasses your
						expectations. We've built and executed over 100 mobile apps as app
						developers. To create really practical and beautiful mobile
						experiences that people can't get enough of, we created millions of
						lines of code and devised dozens of unique mobile app development
						solutions and design gimmicks.
					</Paragraph>

					<div className={classList.btn_group_contact}>
						<Button
							hover={true}
							color="white"
							style={{
								marginRight: "10px",
								borderRadius: "6px",
							}}
						>
							Get Started
						</Button>
						<Button
							hoverLight={true}
							color="black"
							backgroundColor="transparent"
							style={{ border: "1px solid black", borderRadius: "6px" }}
						>
							{phoneNumber}
						</Button>
					</div>
				</ReuseableRow>
				<TestimonialV2 />
				<ContactForm />
			</div>
		</>
	);
};

export default index;
