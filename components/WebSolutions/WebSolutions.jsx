import React from "react";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import Section from "../Section/Section";
import classList from "./WebSolutions.module.scss";
import android3 from "./../../assets/images/webSolutions/android-3.svg";
import android from "./../../assets/images/webSolutions/android.svg";
import angularIcon from "./../../assets/images/webSolutions/angular-icon-1.svg";
import appleIos from "./../../assets/images/webSolutions/apple-ios.svg";
import bootstrap from "./../../assets/images/webSolutions/bootstrap-4.svg";
import css from "./../../assets/images/webSolutions/css-3.svg";
import html from "./../../assets/images/webSolutions/html-1.svg";
import java from "./../../assets/images/webSolutions/java-4.svg";
import jquery from "./../../assets/images/webSolutions/jquery.svg";
import mysql from "./../../assets/images/webSolutions/mysql-4.svg";
import php from "./../../assets/images/webSolutions/php.svg";
import python from "./../../assets/images/webSolutions/python-5.svg";
import react from "./../../assets/images/webSolutions/react-2.svg";
import shopify from "./../../assets/images/webSolutions/shopify-2.svg";
import shopify1 from "./../../assets/images/webSolutions/shopify.svg";
import swift from "./../../assets/images/webSolutions/swift-15.svg";
import woocommerce from "./../../assets/images/webSolutions/woocommerce.svg";
import wordpressBlue from "./../../assets/images/webSolutions/wordpress-blue.svg";
import wordpressIcon from "./../../assets/images/webSolutions/wordpress-icon.svg";
import webSolutions1 from "./../../assets/images/webSolutions/websolution1.jpeg";
import webSolutions2 from "./../../assets/images/webSolutions/websolution2.jpeg";
import webSolutions3 from "./../../assets/images/webSolutions/websolution3.jpeg";
import webSolutions4 from "./../../assets/images/webSolutions/websolution4.jpeg";
import webSolutions5 from "./../../assets/images/webSolutions/websolution5.jpeg";

const WebSolutions = () => {
  const [content, setContent] = React.useState("E-Commerce");
  const btnStyle = {
    backgroundColor: "white",
    border: "1px solid #C4C4C4",
    fontSize: "1.2rem",
    padding: "0.5rem",
    margin: "0.5rem",
    borderRadius: "6px",
  };
  const buttonShow = [
    {
      title: "E-Commerce website",
      heading: "An All-in-One E-Commerce Solution",
      id: "E-Commerce",
      icons: [wordpressIcon, swift, woocommerce, react, shopify1],
      img: webSolutions1,
      content:
        "Inventory management, payment gateways, order management and much more. Get everything you need to make your online store a success. E-Commerce is a competitive market and to succeed you will need a store that gives you complete control while also making it easy for your audience to engage with the website. When you hire us, you get professionals who have the skills and experience to get you an online store ready to do serious business. Customer Registration Discount Coupons Merchant Integration Products Reports Products & Categories",
    },
    {
      title: "CMS",
      heading: "CMS Website Powerful CMS Websites",
      icons: [wordpressBlue, bootstrap, react, angularIcon, html],
      img: webSolutions2,
      id: "CMS",
      content:
        "Give your website the edge it needs with a Robust CMS Get absolute control over your website with a powerful CMS (Content Management System). With our robust CMS, you can easily download, manipulate, upload and edit data just the way you need. Since it’s an extremely flexible platform, you can also integrate additional website features using it. At Website Profs, our CMS websites are designed to make your business easier with advanced features. Drupal Joomla WordPress.",
    },
    {
      title: "Responsive Website",
      id: "Website",
      heading: "Thinking Websites",
      img: webSolutions3,
      icons: [bootstrap, html, react, wordpressBlue, css],
      content:
        "Creative Responsive Websites Combining Creativity with Responsiveness to Increase your Revenue Responsive websites will give you a much better business return than typical websites as they are more successful in easily reaching out to your customers on multiple platforms. People conduct almost 95% of their daily activities through their smartphones and tablets. Since, all these devices have varying screen sizes and resolutions, responsive websites offer flexible screen dimensions that give you highly visible visuals and a customized user experience without compromising on the screen size of the device.Flexible Grid Implementation Dynamics Resizing CSS Styling Responsive Code Layout Alteration CSS3 Media Query Listeners",
    },
    {
      title: "B2B Portals",
      heading: "B2B Portals",
      icons: [angularIcon, react, shopify1, woocommerce, python],
      img: webSolutions4,
      id: "Portals",
      content:
        "B2B Web Portal Development Robust and Reliable for Businesses Serving Commercial Customers B2B websites give customized e-business centers incredible e-commerce support. Website Profs, through its B2B Web Portal, has been supporting businesses around the world to introduce and advertise their products and services on a global scale. Our web applications give us the upper hand to create highly responsive B2B portals that reflect quality and craftsmanship. Our talented team is dedicated to increasing the productivity of your business with its enhanced business operations.Travel & Tours Management Payroll Management Portals Education Management Real Estate Portal Online Ticketing System Job & Recruitment Portals",
    },
    {
      title: "B2C Portals",
      heading: "B2C Portals",
      icons: [java, shopify1, woocommerce, android, python],
      id: "B2C",
      img: webSolutions5,
      content:
        "B2C Web Portal Development Enhancing Business Processes and User Experience We improve your business processes by offering vital services such as information and online data management, content management, communication management and more. We have provided highly successful and smooth running B2C portals in the last decade to various international industries. E-Commerce Store Travel Portals Health Care Portals Entertainment Portals Wholesale Portals Online Food Delivery",
    },
  ];
  const setSelectedContent = (id) => {
    setContent(id);
  };

  const getSelectedContent = () => {
    const resData = buttonShow.find((item) => item.id === content);
    return resData;
  };
  return (
    <Section>
      <div className={classList.mainPanel}>
        <div className={classList.mainHeadingWrapper}>
          <div className={classList.mainHeading}>
            <div>
              <h1>What Types of Web Solutions Can You Expect From Us?</h1>
            </div>
            <Paragraph fontSize={14} style={{ textAlign: "center" }}>
              Our work is a testament to our expertise. It speaks aloud in
              respect of e-commerce, web and mobile application, SEO, Google ad
              words and email marketing, branding and social media marketing. It
              demonstrates the caliber of value achieved for businesses like
              yours.
            </Paragraph>
          </div>
        </div>
        <div className={classList.webSolutionsContent}>
          <div className={classList.contentLeft}>
            <div className={classList.actions}>
              {buttonShow.map((item) => (
                <Button
                  color="black"
                  style={btnStyle}
                  key={item.id}
                  onClick={() => setSelectedContent(item.id)}
                  id={item.id}
                  customClass={`${
                    item.id === content && classList.buttonSelected
                  }`}>
                  {item.title}
                </Button>
              ))}
            </div>
            <div className={classList.content}>
              <div>
                <h3>{getSelectedContent().heading}</h3>
              </div>
              <Paragraph fontSize={14}>
                {getSelectedContent().content}
              </Paragraph>
            </div>
            <div className={classList.icons}>
              {getSelectedContent().icons.map((item) => (
                <img src={item.src} alt="icon" key={item} />
              ))}
            </div>
          </div>
          <div className={classList.contentRight}>
            <img src={getSelectedContent().img.src} alt="img" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WebSolutions;
