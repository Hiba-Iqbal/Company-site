import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import ReuseableRow from "../../components/ReuseableRow/ReuseableRow";
import ShowCaseWrapper from "../../components/ShowCaseWrapper/ShowCaseWrapper";
import TestimonialV2 from "../../components/TestimonialV2/TestimonialV2";
import ContactForm from "../../components/ContactForm/ContactForm";
import ComboPackage from "../../components/ComboPakage/ComboPackage";
import classList from "./index.module.scss";
import Paragraph from "../../components/Paragraph/Paragraph";
import List from "../../components/List/List";
import SoloPortFolio from "../../components/SoloPortFolio/SoloPortFolio";
import ServicesDesign from "../../components/ServicesDesign/ServicesDesign";
import Packages from "../../components/Packages/Packages";
import bgWebDesign from "../../assets/images/sample/webDesign.png";
import webDesign1 from "../../assets/images/sample/webDesign1.png";
import webDesign2 from "../../assets/images/sample/webDesign2.png";
import webDesign3 from "../../assets/images/sample/webDesign3.png";
import webDesign4 from "../../assets/images/sample/webDesign4.png";
import Logos from "../../components/Logos/Logos";
import BannerMultiLogo from "../../components/BannerMultiLogo/BannerMultiLogo";
import Head from "next/head";
import { phoneNumber } from "./../../utils/Data/globalVariables";
import { webDesignPortfolio } from "./../../utils/Data/Data";

import NavLink from "../../components/Navlinks/Navlinks";
import RankLogo from "../../components/RankLogo/RankLogo";

const ListItem = [
	"Improved User Experience",
	"Successful Digital Rebranding & Design",
	"Intuitive User Interface",
	"Improved SEO ratings",
	"Conversion Rate Optimization",
];

const index = () => {
	return (
		<div className={classList.web_design_wrapper}>
			<Head>
				<title> Custom web design services in NYC | Company</title>
				<meta
					name="description"
					content="Company is offering premium Custom website design and development services. Let our web design team creates innovative, effective websites for you."
				/>
			</Head>
			<ReuseableRow
				cover={true}
				backgroundImage={bgWebDesign}
				contentImage={webDesign1}
			>
				<Header color="white" fontWeight="bold" fontSize="45">
					Custom Web Design Services
				</Header>
				<Paragraph color="white">
					Company offer premium Custom website design and development services.
					Let our web design team create innovative, effective websites for you.
				</Paragraph>
				<div>
					<NavLink href="/contact">
						<Button backgroundColor="#FFFFFF" color="#1D2228" hoverLight={true}>
							Get Started
						</Button>
					</NavLink>
				</div>
				<BannerMultiLogo />
			</ReuseableRow>
			<ReuseableRow
				backgroundImage={"none"}
				contentImage={webDesign2}
				imageClass={classList.widthUnset}
			>
				<Paragraph>Digital Service Agency</Paragraph>
				<Header fontWeight="bold" fontSize="30">
					Professional Web Design and Development Services:
				</Header>
				<Paragraph>
					With custom website design and development services, you may establish
					a powerful digital presence. Boost your business with the help of our
					professional website development services and get a visually
					appealing, fully functional, and responsive website. We offer
					WordPress website design services to a large number of industries. The
					core designs is a prominent custom web development service provider
					that caters to startups and companies with client-centric web
					solutions. To deliver ready-to-go live websites, we focus on providing
					the greatest UX, UI, code, hosting, localization, and a variety of
					other corporate web development services.
				</Paragraph>
				<div className={classList.btn_group_contact}>
					<a
						style={{ textDecoration: "none", color: "inherit" }}
						href="/contact"
					>
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
					</a>
					<a href={`tel:${phoneNumber}`}>
						<Button
							hoverLight={true}
							color="black"
							backgroundColor="transparent"
							style={{ border: "1px solid black", borderRadius: "6px" }}
						>
							{phoneNumber}
						</Button>
					</a>
				</div>
			</ReuseableRow>
			<ShowCaseWrapper type="bakery" data={webDesignPortfolio} />
			{/* <SoloPortFolio /> */}
			{/* <PricingSection /> */}
			<Packages type="web" />
			<ServicesDesign
				image={webDesign3}
				heading="We believe in unrivaled user experiences."
			/>
			<RankLogo />
			<ComboPackage />
			<ReuseableRow
				backgroundImage={"none"}
				contentImage={webDesign4}
				imageClass={classList.widthUnset}
			>
				<Paragraph>Digital Service Agency</Paragraph>
				<Header fontWeight="bold" fontSize="30">
					Why Choose Us?
				</Header>
				{ListItem.map((item, index) => (
					<List key={index}>{item}</List>
				))}

				<div className={classList.btn_group_contact}>
					<a
						style={{ textDecoration: "none", color: "inherit" }}
						href="/contact"
					>
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
					</a>
					<a href={`tel:${phoneNumber}`}>
						<Button
							hoverLight={true}
							color="black"
							backgroundColor="transparent"
							style={{ border: "1px solid black", borderRadius: "6px" }}
						>
							{phoneNumber}
						</Button>
					</a>
				</div>
			</ReuseableRow>
			<TestimonialV2 />
			<ContactForm />
		</div>
	);
};

export default index;
