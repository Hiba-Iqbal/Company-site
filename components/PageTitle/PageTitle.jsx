import React from "react";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Section from "../Section/Section";
import classList from "./PageTitle.module.scss";

const PageTitle = (props) => {
  const {
    title,
    content = "",
    woodenImage = "dark",
    bgPayment ,
  } = props;
  console.log(bgPayment, "bgPayment");
  return (
    <>
      <div
        className={`${classList.page_title_wrapper} ${
          woodenImage === "dark" ? classList.dark : classList.bg_image
        } ${bgPayment === true && classList.bgPayment}`}>
        <Section>
          <Header
            fontWeight="bold"
            color="#fff"
            fontSize={"60"}
            style={{ width: "max-content", margin: "auto" }}>
            {title}
          </Header>

          <Paragraph
            fontSize={"14"}
            color="#fff"
            style={{ textAlign: "center", marginTop: "20px" }}>
            {content}
          </Paragraph>
        </Section>
      </div>
    </>
  );
};

export default PageTitle;
