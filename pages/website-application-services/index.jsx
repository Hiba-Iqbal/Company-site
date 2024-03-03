import React from "react";
import classList from "./index.module.scss";
import ReuseableRow from "../../components/ReuseableRow/ReuseableRow";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import BannerMultiLogo from "../../components/BannerMultiLogo/BannerMultiLogo";
import Paragraph from "../../components/Paragraph/Paragraph";
import ShowCaseWrapper from "../../components/ShowCaseWrapper/ShowCaseWrapper";
import Packages from "../../components/Packages/Packages";
import ServicesDesign from "../../components/ServicesDesign/ServicesDesign";
import ComboPackage from "../../components/ComboPakage/ComboPackage";
import TestimonialV2 from "../../components/TestimonialV2/TestimonialV2";
import ContactForm from "../../components/ContactForm/ContactForm";
import bgWebDesign from "../../assets/images/sample/bgWebDesign.png";
import branding1 from "../../assets/images/webImages/1.png";
import branding2 from "../../assets/images/webImages/2.png";
import branding3 from "../../assets/images/webImages/3.png";
import branding4 from "../../assets/images/webImages/4.png";
import NavLink from "../../components/Navlinks/Navlinks";
import Head from "next/head";
import { phoneNumber } from "../../utils/Data/globalVariables";
import RankLogo from '../../components/RankLogo/RankLogo';

const index = () => {
  return (
    <>
      <div className={classList.ecommerce}>
        <Head>
          <title>Custom Web Portal Solutions | Company</title>
          <meta
            name="description"
            content="Looking for agile web portal design and development services? Welcome to Company. Contact our team and get the best web portal for your organization."
          />
        </Head>
        <ReuseableRow
          cover={true}
          backgroundImage={bgWebDesign}
          contentImage={branding4}>
          <Header color="white" fontWeight="bold" fontSize="45">
            Custom Web Application Solutions
          </Header>
          <Paragraph color="white">
            Looking for agile web application design and development services?
            Welcome to Company. Contact our team and get the best web
            application for your organization.
          </Paragraph>
          <div>
            <NavLink href="/contact">
              <Button
                backgroundColor="#FFFFFF"
                color="#1D2228"
                hoverLight={true}>
                Get Started
              </Button>
            </NavLink>
          </div>
          <BannerMultiLogo />
        </ReuseableRow>
        <ReuseableRow
          backgroundImage={"none"}
          contentImage={branding3}
          imageClass={classList.widthUnset}>
          <Paragraph>Top Web Application development Agency </Paragraph>
          <Header fontWeight="bold" fontSize="30">
            Custom Web Application Development Solutions with Company
          </Header>
          <Paragraph>
            Do you want to learn more about the intricacies of web application
            development services and features as they relate to your company?
            Contact one of our web application development firm consultants, and
            they'll put up a full explanation of the most profitable and
            competitive product for your specific business niche. Our top
            technical experts will reveal the estimated app cost and help you
            save money by selecting the best technology stack. We offer Custom
            B2B Web Application Development Services to esteemed businesses from
            all over the world.
          </Paragraph>
          <div className={classList.btn_group_contact}>
            <Button
              hover={true}
              color="white"
              style={{
                marginRight: "10px",
                borderRadius: "6px",
              }}>
              Get Started
            </Button>
            <Button
              hoverLight={true}
              color="black"
              backgroundColor="transparent"
              style={{ border: "1px solid black", borderRadius: "6px" }}>
              {phoneNumber}
            </Button>
          </div>
        </ReuseableRow>
        {/* <SoloPortFolio /> */}
        <ShowCaseWrapper type="crypto" />
        <Packages type="web-applcations" isCustomAction={true} />
        <ServicesDesign
          image={branding1}
          heading="Establishing brands with flexible services and solutions"
        />
        <RankLogo/>
        <ComboPackage />
        <ReuseableRow
          backgroundImage={"none"}
          contentImage={branding2}
          imageClass={classList.widthUnset}>
          <Paragraph>Online Web Application Service</Paragraph>
          <Header fontWeight="bold" fontSize="30">
            We offer exceptional Web Application Design and Development Services
          </Header>
          <Paragraph>
            We are the leading web application design & development company in
            USA. Team of Developers at Company can also to create
            internal websites, intranets, and other platforms using SharePoint
            and other platforms. With an internal staff of skilled designers and
            developers who are well-versed in platforms like Magento, Joomla,
            and OsCommerce, among others. With its dynamic application creation
            services, Core Designs has earned a name for itself in the
            E-Commerce business. Being the leading E-Commerce application
            development company, we have developed plenty of applications for
            multinational brands. Our area of expertise and strength is
            e-commerce website design and development for E-Commerce businesses.
            The look and feel of the website, including the design and layout,
            is the primary emphasis of our experienced Application Development
            team. How well the application is designed and managed by the
            business owner determines how well the products catalog is kept, how
            easy it is to handle the shopping cart and change it during the
            shopping process, and how easy it is to make a secure payment.
          </Paragraph>

          <div className={classList.btn_group_contact}>
            <Button
              hover={true}
              color="white"
              style={{
                marginRight: "10px",
                borderRadius: "6px",
              }}>
              Get Started
            </Button>
            <Button
              hoverLight={true}
              color="black"
              backgroundColor="transparent"
              style={{ border: "1px solid black", borderRadius: "6px" }}>
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
