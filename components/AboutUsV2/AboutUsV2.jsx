import ContactForm from "../ContactForm/ContactForm";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Section from "../Section/Section";
import TestimonialV2 from "../TestimonialV2/TestimonialV2";
import UseableParaShow from "../UseableParaShow/UseableParaShow";
// import UseableRowV2 from "./../useAbleRowV2/UsableRowV2";
import UsableRow from "./../useAbleRow/UsableRow";
import classList from "./AboutUsV2.module.scss";
import PageTitle from "../PageTitle/PageTitle";
import aboutUs1 from "../../assets/images/sample/aboutUs1.png";
import aboutUs2 from "../../assets/images/sample/aboutUs2.png";
import { useWindowSize } from "../../utils/Data/helpers";

const AboutUsV2 = () => {
  const device = useWindowSize();
  // console.log(device);
  const subHeadingStyle = { margin: "0px", fontWeight: "500" };
  const paraStyle = { marginBottom: "20px" };
  const para =
    "We help our clients elevate their business through engaging brand identities and innovative digital marketing techniques. Looking to expand your brand reach and maximize your ROI? Let us help you create an innovative, effective, responsive, intuitive, SEO-friendly, attractive, and eye-catching web presence to capture more clients.";
  return (
    <div>
      <PageTitle title="Who we are" content={para} woodenImage={false} />
      <Section>
        <UsableRow
          gridGapClass={classList.gridGapClass}
          customClass={classList.contentSection}
          imageClass={classList.imageClass}
          image={aboutUs1}
          reverse={true}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <Header
            style={{
              borderBottom: "2px solid white",
              width: "fit-content",
              paddingBottom: "10px",
              marginBottom: "15px",
            }}>
            About Us
          </Header>
          <Paragraph style={{ marginBottom: "25px" }}>
            With our originality and inventiveness, we've always aimed to
            satisfy every client with whom we've worked. Our company employs
            skilled web developers, digital marketers, authors, brand creators,
            app developers, and business advisors who work tirelessly to create
            your brand from the ground up. As an agency, we've spent decades in
            the area and know how to grow your business.
          </Paragraph>
          <Paragraph style={{ borderLeft: "3px solid white" }}>
            Our high-quality services have helped us develop a worldwide
            clientele. Some of the prior work we've done for our clients can be
            used to assess our team's skills. Company expert examine
            every part of the market in order to produce some of the greatest
            results.
          </Paragraph>
        </UsableRow>
        <UsableRow
          image={aboutUs2}
          reverse={device === "mobile" || device === "tablet" ? true : false}
          imageClass={classList.imageClass}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <Header
            style={{
              borderBottom: "2px solid white",
              width: "fit-content",
              paddingBottom: "10px",
              marginBottom: "15px",
            }}>
            Our Philosopy
          </Header>
          <Header style={subHeadingStyle} variant="h3">
            Customer-driven
          </Header>
          <Paragraph style={paraStyle}>
            In the market, we have the most customer-centric approach. Our
            client-centered policy enables us to meet and exceed our client's
            expectations.
          </Paragraph>
          <Header style={subHeadingStyle} variant="h3">
            Innovation-oriented
          </Header>
          <Paragraph style={paraStyle}>
            Our primary view is that innovation is the key to success. We strive
            to include every innovation into the design and development work we
            undertake.
          </Paragraph>
          <Header style={subHeadingStyle} variant="h3">
            Technology-focused
          </Header>
          <Paragraph style={paraStyle}>
            Our firm has always put a strong emphasis on technology. We make it
            a point to learn about and incorporate new technology as it becomes
            available.
          </Paragraph>
        </UsableRow>
        <UseableParaShow />
      </Section>
      <TestimonialV2 />
      <ContactForm />
    </div>
  );
};

export default AboutUsV2;
