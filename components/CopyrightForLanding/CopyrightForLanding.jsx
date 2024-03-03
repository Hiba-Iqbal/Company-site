import React from "react";
import classList from "./CopyrightForLanding.module.scss";
import Section from "../Section/Section";
import Paragraph from "../Paragraph/Paragraph";
import NavLink from "../Navlinks/Navlinks";
import logo from "../../assets/images/logo.svg";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { useWindowSize } from "../../utils/Data/helpers";
import Link from "next/link";

const CopyrightForLanding = () => {
  const device = useWindowSize();
  return (
    <div className={classList.copyright_wrapper}>
      <Section padding="20px 0px">
        <div className={classList.copyright_items}>
          <div className={classList.social_icons_main}>
            <a
              target="_blank"
              href="/">
              <FaFacebookF
                className={classList.social_icon}
                color="#fff"
                size={20}
              />
            </a>
            <a target="_blank" href="/">
              <FaInstagramSquare
                className={classList.social_icon}
                color="#fff"
                size={20}
              />
            </a>
            <a target="_blank" href="/">
              <FaTwitter
                className={classList.social_icon}
                color="#fff"
                size={20}
              />
            </a>
          </div>
          <div className="center" className={classList.copyright_cols}>
            <Paragraph
              color="white"
              style={{ textAlign: "center", marginBottom: "0px" }}>
              Copyright © 2022 by Company
            </Paragraph>
          </div>
          <div
            className={`${classList.copyright_cols} ${classList.copyright_pages}`}>
            <a className="center">
              <Link href="/terms-and-condition">
                <Paragraph
                  color="white"
                  style={{ cursor: "pointer", marginBottom: "0px" }}>
                  {device === "mobile" ? "T&C" : "Terms & Conditions"}
                </Paragraph>
              </Link>
            </a>
            <a className="center" href="/privacy-policy">
              <Paragraph
                color="white"
                style={{ cursor: "pointer", marginBottom: "0px" }}>
                Privacy policy
              </Paragraph>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CopyrightForLanding;
