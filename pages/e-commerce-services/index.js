import classList from "./index.module.scss";
import eCommerce1 from "../../assets/images/sample/eCommerce1.png";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import ReuseableRow from "../../components/ReuseableRow/ReuseableRow";
import PricingSection from "../../components/PricingSection/PricingSection";
import TestimonialV2 from "../../components/TestimonialV2/TestimonialV2";
import ContactForm from "../../components/ContactForm/ContactForm";
import ComboPackage from "../../components/ComboPakage/ComboPackage";
import Paragraph from "../../components/Paragraph/Paragraph";
import List from "../../components/List/List";
import Packages from "../../components/Packages/Packages";
import SoloPortFolio from "../../components/SoloPortFolio/SoloPortFolio";
import ServicesDesign from "../../components/ServicesDesign/ServicesDesign";
import bgWebDesign from "../../assets/images/sample/eCommerce.png";
import eCommerce2 from "../../assets/images/sample/eCommerce2.png";
import eCommerce3 from "../../assets/images/sample/eCommerce3.png";
import webDesign3 from "../../assets/images/sample/webDesign3.png";
import Logos from "../../components/Logos/Logos";
import BannerMultiLogo from "../../components/BannerMultiLogo/BannerMultiLogo";
import ShowCaseWrapper from "../../components/ShowCaseWrapper/ShowCaseWrapper";
import Head from "next/head";
import { eCommercePortfolio } from "../../utils/Data/Data";
import { phoneNumber } from "../../utils/Data/globalVariables";
import NavLink from "../../components/Navlinks/Navlinks";
import RankLogo from "../../components/RankLogo/RankLogo";

const ListItem = [
	" Exceptional customer service",
	"High performance web solutions",
	"Ecommerce ",
	"specialists",
	"Digital marketing specialists",
	" Competitive prices ",
	" Multi channel ecommerce solutions ",
	" Responsive ecommerce ",
	" Dedicated project managers",
];
const index = () => {
	return (
		<>
			<div className={classList.ecommerce}>
				<Head>
					<title>E-Commerce website design services | Company</title>
					<meta
						name="description"
						content="Searching for E-Commerce website designers that offer reliable E-Commerce web development services? We are here to help you in creating the best ecommerce website
"
					/>
				</Head>
				<ReuseableRow
					cover={true}
					backgroundImage={bgWebDesign}
					contentImage={eCommerce1}
				>
					<Header color="white" fontWeight="bold" fontSize="45">
						Custom E-Commerce Website Design Service
					</Header>
					<Paragraph color="white">
						Searching for E-Commerce website designers that offer reliable
						E-Commerce web development services? We are here to help you in
						creating the best E-Commerce website
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
					contentImage={eCommerce2}
					imageClass={classList.widthUnset}
				>
					<Paragraph>Digital Service Agency</Paragraph>
					<Header fontWeight="bold" fontSize="30">
						Leading E-Commerce website design company.
					</Header>
					<Paragraph>
						Company team offers B2C ecommerce, B2B ecommerce, Online
						marketplaces, Microservices-based ecommerce website designing
						services. Because of our expertise in bespoke ecommerce website
						creation, we are able to deal with a wide range of ecommerce
						business models and are not limited to niche ecommerce platforms.
						The UX and UI parts of our ecommerce website design services are
						included. Target audience research, competitive analysis, UI kit
						branding, and usability testing are all best practices for us. To
						attain additional functional flexibility, we go from monolithic to
						decoupled architectures. To stand out from the crowd, we can also
						help with modern technologies like speech recognition and 3D
						modeling.
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
				{/* <SoloPortFolio /> */}
				<ShowCaseWrapper data={eCommercePortfolio} />
				<Packages type="eCommerce" />
				<ServicesDesign
					image={webDesign3}
					heading="We design digital shopping experiences."
				/>
				<RankLogo />
				<ComboPackage />
				<ReuseableRow
					backgroundImage={"none"}
					contentImage={eCommerce3}
					imageClass={classList.widthUnset}
				>
					<Paragraph>Custom Website Design</Paragraph>
					<Header fontWeight="bold" fontSize="30">
						The Best Ecommerce Web Development Services
					</Header>
					{/* {ListItem.map((item, index) => (
            <List key={index}>{item}</List>
          ))} */}
					<Paragraph>
						We offer custom and unique E-Commerce website design and development
						services to help your customers have a better purchasing experience.
						Your E-Commerce website's design and functionality can make or break
						conversions and have an impact on your bottom line. A server to host
						a storefront, steady payment processing, an inventory based
						database, and a sophisticated dispatch system to transport things
						are all levels of functionality that aren't found on basic websites.
						Our web design approach begins with research and strategy, ensuring
						that we understand who your target audience is and what motivates
						them to shop so that we can create the ideal website to help them
						complete the checkout process.
					</Paragraph>

					<div className={classList.btn_group_contact}>
						<a
							style={{ textDecoration: "none", color: "inherit" }}
							href="/contact"
						>
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
						</a>
					</div>
				</ReuseableRow>
				<TestimonialV2 />
				<ContactForm />
			</div>
		</>
	);
};

export default index;
