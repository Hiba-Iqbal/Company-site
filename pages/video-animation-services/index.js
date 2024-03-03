import classList from "./index.module.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import ReuseableRow from "../../components/ReuseableRow/ReuseableRow";
import Packages from "../../components/Packages/Packages";
import TestimonialV2 from "../../components/TestimonialV2/TestimonialV2";
import ContactForm from "../../components/ContactForm/ContactForm";
import ComboPackage from "../../components/ComboPakage/ComboPackage";
import Paragraph from "../../components/Paragraph/Paragraph";
import List from "../../components/List/List";
import SoloPortFolio from "../../components/SoloPortFolio/SoloPortFolio";
import ServicesDesign from "../../components/ServicesDesign/ServicesDesign";
import bgWebDesign from "../../assets/images/sample/videoAnimation.png";
import videoAnimation2 from "../../assets/images/sample/videoAnimation2.png";
import eCommerce3 from "../../assets/images/sample/eCommerce3.png";
import videoAnimation1 from "../../assets/images/sample/videoAnimation1.png";
import videoAnimation3 from "../../assets/images/sample/videoAnimation3.png";
import videoAnimation4 from "../../assets/images/sample/videoAnimation4.png";
import Logos from "../../components/Logos/Logos";
import BannerMultiLogo from "../../components/BannerMultiLogo/BannerMultiLogo";
import ShowCase from "../../components/ShowCase/ShowCase";
import NavLink from "../../components/Navlinks/Navlinks";
import Head from "next/head";
import { phoneNumber } from "../../utils/Data/globalVariables";
import RankLogo from "../../components/RankLogo/RankLogo";

const ListItem = [
	" Exceptional customer service",
	"High performance web solutions",
	"E-Commerce ",
	"specialists",
	"Digital marketing specialists",
	" Competitive prices ",
	" Multi channel E-Commerce solutions ",
	" Responsive E-Commerce ",
	" Dedicated project managers",
];

const index = () => {
	return (
		<>
			<div className={classList.ecommerce}>
				<Head>
					<title>Video Animation Services | Company</title>
					<meta
						name="description"
						content="Let your brand speak for itself with our creative video animation and illustration services. Connect with our illustrators and get a quote for your business now"
					/>
				</Head>
				<ReuseableRow
					backgroundImage={bgWebDesign}
					contentImage={videoAnimation1}
				>
					<Header color="white" fontWeight="bold" fontSize="45">
						Bring concepts to life
					</Header>
					<Paragraph color="white">
						Let your brand speak for itself with our creative video animation
						and illustration services. Connect with our illustrators and get a
						quote for your business now
					</Paragraph>
					<div>
						<NavLink href="/contact">
							<Button hover={true}>Get Started</Button>
						</NavLink>
					</div>
					<BannerMultiLogo />
				</ReuseableRow>
				<ReuseableRow
					backgroundImage={"none"}
					contentImage={videoAnimation2}
					imageClass={classList.widthUnset}
				>
					<Paragraph>Best Video Animation and Illustration</Paragraph>
					<Header fontWeight="bold" fontSize="30">
						Services to Increase Brand Engagement:
					</Header>
					<Paragraph>
						Your brand just has a couple of seconds to engage the customer and
						generate a positive first impression. We make eye-catching, colorful
						images and animations that people will remember. Company is a top
						notch Video Animation Agency that offers the expertise to make your
						company stand out from the crowd and attract attention. We're
						experts in making images and animations for explainer videos,
						printed materials, and social media posts. Learn more about our
						illustration and cartoon animation services by contacting our team.
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
				<ShowCase type="fashion" />
				<Packages type="videoAnimation" />
				<ServicesDesign
					image={videoAnimation3}
					heading="Animated Videos To Get Your Message Across"
				/>
				<RankLogo />
				<ComboPackage />
				<ReuseableRow
					backgroundImage={"none"}
					contentImage={videoAnimation4}
					imageClass={classList.widthUnset}
				>
					<Paragraph>Online Animation Service</Paragraph>
					<Header fontWeight="bold" fontSize="30">
						Are you ready to talk about your illustration project with our team?
					</Header>
					<Paragraph>
						Our illustration studio provides creative illustration services to
						businesses in a variety of industries to help them establish a
						distinctive brand identity. Over the years, we've assisted many of
						our clients with their illustration needs. Our artists will quickly
						provide innovative illustrative designs to aid in the growth of your
						company. We take control of your ideas and turn them into visually
						appealing custom graphics.
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
