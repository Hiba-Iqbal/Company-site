import classList from "./Footer.module.scss";
import Section from "../Section/Section";
import Header from "../Header/Header";
import paymentcards from "../../assets/images/paymentcards.svg";
import NavLink from "../Navlinks/Navlinks";
import { useWindowSize } from "../../utils/Data/helpers";
import { phoneNumber } from "../../utils/Data/globalVariables";

const Footer = () => {
  const device = useWindowSize();
  console.log(device);
  return (
    <>
      <div className={classList.footer_wrapper}>
        <Section>
          <div className={classList.footer_items}>
            <div className={classList.footer_cols}>
              <Header color="white">Services</Header>
              <ul>
                <NavLink href="web-design-services">
                  <li>
                    <span>Web Design</span>
                  </li>
                </NavLink>
                <NavLink href="e-commerce-services">
                  <li>
                    <span>E-Commerce</span>
                  </li>
                </NavLink>
                <NavLink href="branding-services">
                  <li>
                    <span>Branding</span>
                  </li>
                </NavLink>
                <NavLink href="mobile-application-services">
                  <li>
                    <span>Mobile Application</span>
                  </li>
                </NavLink>
                <NavLink href="website-application-services">
                  <li>
                    <span>Website Application</span>
                  </li>
                </NavLink>
                <NavLink href="digital-marketing-services">
                  <li>
                    <span>Digital Marketing</span>
                  </li>
                </NavLink>
              </ul>
            </div>
            <div className={classList.footer_cols}>
              <Header color="white">Company</Header>
              <ul>
                <NavLink href="/about">
                  <li color="white">
                    <span>About us</span>
                  </li>
                </NavLink>
                <NavLink href="/#howitworks">
                  <li color="white">
                    <span>How it works?</span>
                  </li>
                </NavLink>
                <NavLink href="/packages">
                  <li color="white">
                    <span>Packages</span>
                  </li>
                </NavLink>
                <NavLink href="/#ComboPackages">
                  <li color="white">
                    <span>Combo Packages</span>
                  </li>
                </NavLink>
                <NavLink href="/contact">
                  <li color="white">
                    <span>Contact us</span>
                  </li>
                </NavLink>
              </ul>
            </div>
            <div className={classList.footer_cols}>
              <Header color="white">About</Header>
              <ul>
                <li>
                  <a href="mailto:info@company.com">
                    info@company.com
                  </a>
                </li>
                <li>
                  Tel: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </li>
                <li>
                  Fax: <a href="tel:+1 (212) 343-9069">+1 (212) 343-9069</a>
                </li>
                <li>
                  <a className={classList.pointer}>
                    address
                  </a>
                </li>

                <Header color="#fff">Payment Method</Header>
                <img src={paymentcards.src} alt="" />
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Footer;
