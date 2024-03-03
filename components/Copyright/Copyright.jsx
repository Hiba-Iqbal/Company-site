import React from "react";
import classList from "./Copyright.module.scss";
import Section from "../Section/Section";
import Paragraph from "../Paragraph/Paragraph";
import Link from "next/link";
import logo from "../../assets/images/logo.svg";
import { useWindowSize } from "../../utils/Data/helpers";

const Copyright = () => {
  const device = useWindowSize();
  return (
    <div className={classList.copyright_wrapper}>
      <Section padding="20px 0px">
        <div className={classList.copyright_items}>
          <div className={classList.copyright_cols}>
            {/* <img src={logo.src} alt="" /> */}
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
            <a className="center">
              <Link href="/privacy-policy">
                <Paragraph
                  color="white"
                  style={{ cursor: "pointer", marginBottom: "0px" }}>
                  Privacy policy
                </Paragraph>
              </Link>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Copyright;
