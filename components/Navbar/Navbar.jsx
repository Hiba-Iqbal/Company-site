import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import NavLink from "./../Navlinks/Navlinks";
import { HiMenu } from "react-icons/hi";
import Logo from "../../assets/images/logo/logo.svg";
import classList from "./Navbar.module.scss";
import ContactHeader from "../ContactHeader/ContactHeader";
import Button from "../Button/Button";
//Dyanmic imports
const GetAQuotModal = dynamic(() => import("../GetAQuotModal/GetAQuotModal"));
const Slider = dynamic(() => import("../Slider/Slider"));
const Dropdown = dynamic(() => import("./../DropDown/DropDown"));

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

const Navbar = () => {
  var [navbar, setNavbar] = useState(false);
  var [showQuotModal, setShowQuoteModal] = useState(false);
  var [scroll, setScroll] = useState(0);
  var scrollTracker = () => {
    if (window.scrollY < 1) {
      setScroll(0);
    } else {
      setScroll(1);
    }
  };
  useEffect(() => {
    //CDM
    window.addEventListener("scroll", scrollTracker);
  }, []);

  // console.log(navbar);
  return (
    <>
      <ContactHeader />
      <div
        style={{
          backgroundColor: scroll === 0 ? "white" : "rgba(255,255,255,0.95)",
        }}
        className={classList.navbar}>
        <Slider navbar={navbar} setNavbar={setNavbar} />
        <div
          style={{ alignItems: "flex-start" }}
          className={`${classList.logoArea} ${classList.center}`}>
          {/* <NavLink href="/" exact className="nav-item nav-link">
            <img
              className={classList.logo}
              src={Logo.src}
              style={{ objectFit: "fill", cursor: "pointer" }}
            />
          </NavLink> */}
        </div>
        <div className={classList.menuItemArea}>
          <div className={classList.navSimpleItems}>
            <NavLink href="/" exact={"true"}>
              Home
            </NavLink>
            <div className={classList.navDropdown}>
              <Dropdown
                options={services}
                title="Services"
                onSelect={(e) => {}}
              />
            </div>
            <NavLink href="/packages">Packages</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/blogs">Blogs</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
        <div>
          <Button onClick={() => setShowQuoteModal(true)} hover={true}>
            Get a quote
          </Button>
        </div>
        <HiMenu onClick={() => setNavbar(true)} className={classList.ham} />
      </div>
      <GetAQuotModal
        show={showQuotModal}
        onHide={() => setShowQuoteModal(false)}
      />
    </>
  );
};

export default Navbar;
