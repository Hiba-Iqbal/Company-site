import classList from "./index.module.scss";
import seo1 from "../../assets/images/sample/seo1.png";
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
import bgWebDesign from "../../assets/images/sample/seo.png";
import seo4 from "../../assets/images/sample/seo4.png";
import seo3 from "../../assets/images/sample/seo3.png";
import seo5 from "../../assets/images/sample/seo5.png";
import Logos from "../../components/Logos/Logos";
import BannerMultiLogo from "../../components/BannerMultiLogo/BannerMultiLogo";
import ShowCaseWrapper from "../../components/ShowCaseWrapper/ShowCaseWrapper";
import NavLink from "../../components/Navlinks/Navlinks";
import Head from "next/head";
import { phoneNumber } from "../../utils/Data/globalVariables";
import RankLogo from "../../components/RankLogo/RankLogo";

const ListItem = [
	"Social Media Marketing",
	"Digital advertising services",
	"Email Marketing",
	"Product Marketing",
	"Content Audit and Strategy",
	"SEO & Navigation Best Practices",
	"PR & Communications ",
	"Brand Strategy",
	"Sales & General Presentations",
	"Product Rollout",
	"Campaign Planning",
];

const index = () => {
	return (
		<>
			<div className={classList.ecommerce}>
				<Head>
					<title>Digital Marketing Services in NYC | Company</title>
					<meta
						name="description"
						content="Company is a professional SEO agency that specializes in digital marketing, search engine optimization, social media marketing, and content marketing. We are a team of experts who are passionate about creating a positive impact on your business."
					/>
				</Head>

				<ReuseableRow
					cover={true}
					backgroundImage={bgWebDesign}
					contentImage={seo1}
				>
					<Header color="white" fontWeight="bold" fontSize="45">
						Improve Your Rankings With Professional Marketing Services
					</Header>
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
					contentImage={seo5}
					imageClass={classList.widthUnset}
				>
					<Paragraph>SEO</Paragraph>
					<Header fontWeight="bold" fontSize="30">
						Grow Your Clients with Targeted and Data-Driven Digital Marketing
						Strategies
					</Header>
					<Paragraph>
						Do you have a website, a campaign, a product rollout, a re-brand, a
						conference, an expo, or a business event planned? Our staff at The
						core designs has a strong foundation in short- and long-term
						planning, as well as a sharp understanding of business and
						marketing. Company can assist you in developing your next solid
						strategy for establishing or maintaining market and company
						momentum. A striking website is of no use if no one visits it. We
						are one of the top digital strategy agencies offering reliable
						digital marketing, SEO, SMM and ORM services to our clients. The
						simplest and quickest way to obtain leads you can convert into
						customers is to market to a specific group and nurture those
						visitors through the buyer's journey.
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
				<ShowCaseWrapper type="automotive" />
				<Packages type="seo" />
				<ServicesDesign
					image={seo4}
					heading="Professional SEO Services In USA"
				/>
				<RankLogo />
				<ComboPackage />
				<ReuseableRow
					backgroundImage={"none"}
					contentImage={seo3}
					imageClass={classList.widthUnset}
				>
					<Paragraph>Optimization</Paragraph>
					<Header fontWeight="bold" fontSize="30">
						Digital Marketing Services We offer:
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
		</>
	);
};

export default index;
