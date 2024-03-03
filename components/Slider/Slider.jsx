import React from "react";

import Header from "../Header/Header";
// import Arrow from "./../../assets/images/arrow-right.png";
import Link from "next/link";
import NavLinks from "../Navlinks/Navlinks";
import Dropdown from "../DropDown/DropDown";
import classList from "./Slider.module.scss";

import { HiChevronRight } from "react-icons/hi";

const Backdrop = ({ navbar, setNavbar }) => (
  <div
    onClick={() => setNavbar(false)}
    className={classList.backdrop}
    style={{
      opacity: navbar ? "0.4" : "0",
      pointerEvents: navbar ? "all" : "none",
    }}></div>
);

const SliderListItem = ({ children, to, setNavbar, exact }) => (
  <div className={classList.slider_list_item}>
    <Header onClick={() => setNavbar(false)} fontWeight="medium" fontSize={24}>
      <Link href={to} exact={true} activeClassName={classList.active_link}>
        {children}
      </Link>
    </Header>
  </div>
);

var services = [
  {
    name: "Web Design",
    to: "/web-design-services",
  },
  {
    name: "E-Commerce",
    to: "/e-commerce-services",
  },
  {
    name: "Web Application",
    to: "/website-application-services",
  },
  {
    name: "Mobile Application",
    to: "/mobile-application-services",
  },
  {
    name: "Branding",
    to: "/branding-services",
  },
  {
    name: "Digital Marketing",
    to: "/digital-marketing-services",
  },
];

const Slider = ({ setNavbar, navbar }) => {
  return (
    <>
      <div
        style={{
          transition: "transform 250ms ease-in-out",
          transform: navbar ? "scaleX(1)" : "scaleX(0)",
        }}
        className={classList.slider}>
        <div className={classList.slider_header}>
          <HiChevronRight
            onClick={() => setNavbar(false)}
            className={classList.arrow_right}
          />
        </div>
        <div className={classList.slider_list}>
          <div className={classList.slider_list_item}>
            <div onClick={() => setNavbar(false)}>
              <NavLinks
                href={"/"}
                exact="true"
                activeClassName={classList.active_link}>
                Home
              </NavLinks>
            </div>
          </div>
          <div
            style={{ background: "#fff", position: "relative", zIndex: 100 }}
            className={`${classList.w_fit_content} ${classList.slider_list_item}`}>
            <div className={classList.navDropdown}>
              <Dropdown
                setNav={() => setNavbar(false)}
                options={services}
                title="Services"
                fontSize={24}
                onSelect={(e) => {
                  // console.log(e);
                }}
              />
            </div>
          </div>
          <div className={classList.slider_list_item}>
            <div onClick={() => setNavbar(false)}>
              <NavLinks
                href={"/packages"}
                activeClassName={classList.active_link}>
                Packages
              </NavLinks>
            </div>
          </div>
          <div className={classList.slider_list_item}>
            <div onClick={() => setNavbar(false)}>
              <NavLinks
                href={"/portfolio"}
                activeClassName={classList.active_link}>
                Portfolio
              </NavLinks>
            </div>
          </div>
          <div className={classList.slider_list_item}>
            <div onClick={() => setNavbar(false)}>
              <NavLinks href={"/blogs"} activeClassName={classList.active_link}>
                Blogs
              </NavLinks>
            </div>
          </div>
          <div className={classList.slider_list_item}>
            <div onClick={() => setNavbar(false)}>
              <NavLinks href={"/about"} activeClassName={classList.active_link}>
                About
              </NavLinks>
            </div>
          </div>
          <div className={classList.slider_list_item}>
            <div onClick={() => setNavbar(false)}>
              <NavLinks
                href={"/contact"}
                activeClassName={classList.active_link}>
                Contact
              </NavLinks>
            </div>
          </div>
        </div>
      </div>
      <Backdrop navbar={navbar} setNavbar={setNavbar} />
    </>
  );
};

export default Slider;
