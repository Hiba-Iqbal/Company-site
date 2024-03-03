import classList from "./WebPresence.module.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import MarketingCard from "../MarketingCard/MarketingCard";
import guranti from "../../assets/images/icons/guranti.svg";
import ecommerceIcon from "../../assets/images/icons/ecommerceIcon.svg";
import webIcon from "../../assets/images/icons/webIcon.svg";
import webAppIcon from "../../assets/images/icons/webAppIcon.svg";
import brandingIcon from "../../assets/images/icons/brandingIcon.svg";
import smartPhone from "../../assets/images/icons/smartPhone.svg";
import animation from "../../assets/images/icons/animation.svg";

const WebPresence = () => {
  return (
    <>
      <div className={classList.IAmWebPresence}>
        <div className={classList.content}>
          <Header
            fontWeight={"bold"}
            style={{ borderBottom: "2px solid", paddingBottom: "10px" }}>
            Boost your web presence with agile designs and functionality
          </Header>
          <Paragraph>
            Our web developers offer business-oriented solutions that match your
            demands and speak volumes about your brand's values, in addition to
            designing and building your web presence.
          </Paragraph>
          <Paragraph>
            When you work with an expert website developer and digital artist,
            you receive a state-of-the-art solution with a cutting-edge appeal
            that engages more people online. Under packaged web development
            services, take advantage of powerful technologies and a solid
            architecture to create a web solution that meets your needs.
          </Paragraph>
          <Paragraph>
            Allow expert website developer technicians and digital artists to
            develop functions that captivate your target audience so that your
            web presence can thrive like many others have.
          </Paragraph>
          <Button color="white" style={{ margin: "35px 0 0 0 " }}>
            <a href="/contact">Get Started</a> 
          </Button>
        </div>
        <div className={classList.mainPanel}>
          <MarketingCard
            customClass={classList.modifyCard}
            content={"Web Development"}
            icon={webIcon}
            customStyle={{ width: "unset" }}
          />
          <MarketingCard
            customClass={classList.modifyCard}
            content={"Ecommerce"}
            icon={ecommerceIcon}
            customStyle={{ width: "unset" }}
          />
          <MarketingCard
            customClass={classList.modifyCard}
            content={"Web Applications"}
            icon={webAppIcon}
            customStyle={{ width: "unset" }}
          />
          <MarketingCard
            customClass={classList.modifyCard}
            content={"Branding"}
            icon={brandingIcon}
            customStyle={{ width: "unset" }}
          />
          <MarketingCard
            customClass={classList.modifyCard}
            content={"Animations"}
            icon={animation}
            customStyle={{ width: "unset" }}
          />
          <MarketingCard
            customClass={classList.modifyCard}
            content={"Mobile Applications"}
            icon={smartPhone}
            customStyle={{ width: "unset" }}
          />
        </div>
      </div>
    </>
  );
};

export default WebPresence;
