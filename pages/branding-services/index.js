import classList from "./index.module.scss";
import branding1 from "../../assets/images/sample/branding1.png";
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
import bgWebDesign from "../../assets/images/sample/bgWebDesign.png";
import branding2 from "../../assets/images/sample/branding2.png";
import branding3 from "../../assets/images/sample/branding3.png";
import branding4 from "../../assets/images/sample/branding4.png";
import Logos from "../../components/Logos/Logos";
import BannerMultiLogo from "../../components/BannerMultiLogo/BannerMultiLogo";
import ShowCaseWrapper from "../../components/ShowCaseWrapper/ShowCaseWrapper";
import Head from "next/head";
import NavLink from "../../components/Navlinks/Navlinks";

import Section from "../../components/Section/Section";
import { phoneNumber } from "../../utils/Data/globalVariables";
import { brandingPortfolio } from "../../utils/Data/Data";
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
					<title>Brand Management services in NYC | Company</title>
					<meta
						name="description"
						content="Would you like to stand out from the crowd with the help of innovative branding and marketing techniques? The branding team at Company is here to help."
					/>
				</Head>
				<ReuseableRow
					cover={true}
					backgroundImage={bgWebDesign}
					contentImage={branding1}
				>
					<Header color="white" fontWeight="bold" fontSize="45">
						Creative And Bespoke Online Branding Services
					</Header>
					<Paragraph color="white">
						Would you like to stand out from the crowd with the help of
						innovative branding and marketing techniques? The branding team at
						Company is here to help.
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
					contentImage={branding2}
					imageClass={classList.widthUnset}
				>
					<Paragraph>Top Branding & Brand Marketing Agency </Paragraph>
					<Header fontWeight="bold" fontSize="30">
						We Help Build Brands from zero to pro:
					</Header>
					<Paragraph>
						Customers' perceptions of your company are shaped by your branding,
						which may evoke an emotional reaction at every touchpoint if done
						rightly. Businesses with strong branding are more likely to retain
						clients and have no difficulty in attracting new clients since they
						already know your company like their own. Company is the leading
						Digital Creative & Branding Agency offering Digital marketing and
						branding services to various sectors. Being among the Best Branding
						Companies in New York, we also offer Brand Identity Development. We
						work with you to ensure that your business has the greatest
						influence on customers, workers, and the rest of the world so that
						it expands exponentially and attracts the appropriate audience for
						your product or service.
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
				<ShowCaseWrapper data={brandingPortfolio} />
				<Packages type="brand" />
				<ServicesDesign
					image={branding4}
					heading="Establishing brands with flexible services and solutions"
				/>
				<RankLogo />
				<ComboPackage />
				<ReuseableRow
					backgroundImage={"none"}
					contentImage={branding3}
					imageClass={classList.widthUnset}
				>
					<Paragraph>Online Branding Service</Paragraph>
					<Header fontWeight="bold" fontSize="30">
						LET YOUR BRAND LAST A LIFETIME WITH BRANDING SERVICES:
					</Header>
					<Paragraph>
						Our hallmark branding services are a strategy for rebranding,
						strengthening, or creating a brand from the bottom up. We plan who
						your brand is, how it differentiates itself from the competition,
						and why people should care enough to buy it. We'll develop a
						meaningful identity that attracts the perfect customers and keeps
						them coming back for more using the brand strategy as a compass. To
						make your brand visible, acquire trust, and convert purchases, we
						create a marketing promotion plan. Ready to elevate the next level
						with your brand to the next level by collaborating with a top
						branding agency for a collaborative, full-service, and genuinely
						transforming experience? Contact us now to learn more about our
						company branding services.
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
				<TestimonialV2 />
				<ContactForm />
			</div>
		</>
	);
};

export default index;
