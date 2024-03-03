import WebsiteServices2 from "../../components/WebsiteServices2/WebsiteServices2";
const MobileLanding = dynamic(() =>
	import("../../components/MobileLanding/MobileLanding")
);
const DesktopLanding = dynamic(() =>
	import("../../components/DesktopLanding/DesktopLanding")
);
import dynamic from "next/dynamic";
import { useWindowSize } from "../../utils/Data/helpers";
import landingImage1 from "../../assets/images/landingImages/eCommerceLanding1.webp";
import landingImage2 from "../../assets/images/landingImages/eCommerceLanding2.webp";

const index = () => {
	const device = useWindowSize();
	const contentStyle = {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		flexDirection: "column",
	};
	const landing1 = {
		image: landingImage1,
		reverse: true,
		heading: `The design and functioning of your eCommerce website`,
		content: [
			`May make or break conversions and have an influence on your bottom line. A web server for hosting a shop, payment processing, an inventory database, and a complex dispatch system for transporting goods are all layers of capability not available on basic websites. Our firm has been developing high-quality eCommerce websites for over a decade. We collaborate with customers to build a high-performing eCommerce website that produces sales easily, quickly, and efficiently. Learn how our eCommerce website experts can help you optimize ROI with a new, unique eCommerce site design.`,
		],
		style: contentStyle,
	};

	const landing2 = {
		image: landingImage2,
		reverse: device === "mobile" || device === "tablet" ? true : false,
		heading: "Why Choose Us For Your Web Development Project?",
		content: [
			`Tailored to your company's needs and those of your consumers. We specialize in building high-quality eCommerce sites that are customized to your specific needs. We concentrate on usability and optimization in order to increase engagement and revenue. Your eCommerce website will have a superb design and an easy-to-use interface that allows people to buy your things online quickly. We design world-class eCommerce websites using the most up-to-date coding techniques and integrations, allowing your site to surpass the competition. `,
		],
		style: contentStyle,
	};
	return (
		<>
			<WebsiteServices2
				headingContent1="#1 eCommerce Website"
				headingContent2="We're the eCommerce website making team you need to succeed online"
				paraContent="A solid eCommerce website is the backbone of your online retail business, and Company acknowledges the need to use cutting-edge technologies to optimize profits. While being agile and entirely customized, our eCommerce solutions provide the finest in standard features and functionality. Our team can create fully customized eCommerce features, integrate with ERP systems, collect data from different sources, and design a solution that fits your brand and eCommerce objectives. We are the best choice for your project because of our eCommerce website services and years of eCommerce experience."
			/>
			{device === "desktop" ? (
				<DesktopLanding landing1={landing1} landing2={landing2} />
			) : (
				<MobileLanding landing1={landing1} landing2={landing2} />
			)}
		</>
	);
};

export default index;
