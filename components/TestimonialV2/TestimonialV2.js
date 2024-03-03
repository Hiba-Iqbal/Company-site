import classList from "./Testimonial.module.scss";
import Section from "../Section/Section";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
import comma from "../../assets/images/icons/comma.svg";
import profile1 from "../../assets/images/sample/profile.svg";
import fiveStare from "../../assets/images/icons/fiveStars.svg";
import googlePartner from "../../assets/images/logo/googlePartner1.png";
import clutch1 from "../../assets/images/logo/clutch1.png";
import bark from "../../assets/images/logo/Bark.png";
import trustPilot from "../../assets/images/logo/trustPilot.png";
import RatingCard from "../RatingCard/RatingCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { clientTestimonial } from "../../utils/Data/Data";
import TrustPilotReview from "../TrustPilotReview/TrustPilotReview";

const TestimonialV2 = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 2800, min: 1601 },
			items: 2,
		},
		desktop: {
			breakpoint: { max: 1600, min: 992 },
			items: 2,
		},
		tablet: {
			breakpoint: { max: 991, min: 541 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 540, min: 0 },
			items: 1,
		},
	};

	const data = [{}, {}, {}, {}, {}, {}, {}, {}];

	return (
		<div className={classList.testimonialV2_wrapper}>
			<Section padding="60px 0 40 0">
				<div className={classList.mainGrid}>
					<div className={classList.grid}>
						<div className={classList.headerText}>
							<Paragraph color="white">Our clients simply</Paragraph>
							{/* <TrustPilotReview/> */}
							<Header color="white" fontWeight="bold">
								Love Our Work
							</Header>
							<Paragraph color="white">
								To provide your business with customised and unique website
								development services at reasonable prices.
							</Paragraph>
						</div>
					</div>
					<div className={classList.grid} style={{ position: "relative" }}>
						<div className={classList.headerText}>
							<div className={classList.rated}>
								<img src={fiveStare.src} alt="" />
								<Paragraph color="white">
									Rated 4.9/5.0 by 300+ clients for Design and Marketing
									Services on various platform
								</Paragraph>
							</div>
							<TrustPilotReview />
							<div className={classList.logos}>
								<img src={googlePartner.src} alt="" />
								<a href="/" target="_blank">
									<img src={trustPilot.src} alt="" />
								</a>
								<img src={clutch1.src} alt="" />
								<a href="/" target="_blank">
									<img src={bark.src} alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="styled_slider_dots">
					<Carousel
						infinite={true}
						arrows={false}
						showDots={true}
						autoPlay={true}
						responsive={responsive}
					>
						{clientTestimonial?.map((data, i) => (
							<RatingCard data={data} />
						))}
					</Carousel>
				</div>
			</Section>
		</div>
	);
};

export default TestimonialV2;
