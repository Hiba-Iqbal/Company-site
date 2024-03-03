import Button from "../Button/Button";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Section from "../Section/Section";
import UsableRow from "../useAbleRow/UsableRow";
import classList from "./WebsiteServices.module.scss";
import bg from "../../assets/images/sample/bg.svg";
import Logos from "../Logos/Logos";
import logo from "../../assets/images/logo/logo1.svg";
import BannerMultiLogo from '../BannerMultiLogo/BannerMultiLogo';

const WebsiteServics = ({ customClass }) => {
  return (
    <>
      <div className={`${classList.mainBanner} ${customClass}`}>
        <Section extraClass={classList.sectionClass}>
          {/* <img src={logo.src} alt="" className={classList.logo} /> */}
          <div className={classList.IAmHome}>
            <div className={classList.content}>
              <Header color="white" fontWeight={"bold"} fontSize="25">
                #1 Website Development Services
              </Header>
              <Paragraph color="white">
                Company make use of collaborative efforts to give you a
                good website development services
              </Paragraph>
              <Header
                color="white"
                fontWeight={"bold"}
                className={classList.borderHeading}>
                FULL-SCALE WEBSITE DESIGNER AT YOUR SERVICE:
              </Header>
              <Paragraph color="white">
                From enticing consumers to buy your goods or call your team,
                your business website plays a vital role in generating revenue.
                Our website designers understand the importance of your website,
                which is why we offer you our award-winning web designer
                services focus on creating unique sites that are user-friendly,
                boost conversions, and follow best SEO practices. Our website
                Designer can handle all aspects of website design, redesign,
                custom development, theme installation, updates, migration,
                support, maintenance, and even manage cloud hosting options. of
                sectors.
              </Paragraph>

              <Button
                color="black"
                style={{ background: "white", marginTop: "30px" }}>
                Get Started
              </Button>
            </div>
            <div className={classList.formPanel}>
              <div className={classList.formBackColor}>
                <Form
                  description={""}
                  heading={"Get In Touch"}
                  buttonText={"Send Message"}
                  className={classList.formHeading}
                />
                <Paragraph color="white" className={classList.OfferTime}>
                  Limited Time Offer
                </Paragraph>
              </div>
            </div>
          </div>
        </Section>
        <BannerMultiLogo fixBottom={true}/>

      </div>
    </>
  );
};

export default WebsiteServics;
