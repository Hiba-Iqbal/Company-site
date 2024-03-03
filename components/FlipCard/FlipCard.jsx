import React from "react";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import classList from "./FlipCard.module.scss";
import Image from "next/image"

const FlipCard = (props) => {
  const { icon = "", content = "", title = "" } = props;
  return (
    <>
      <div className={classList.flip_card}>
        <div className={classList.flip_card_inner}>
          <div className={classList.flip_card_front}>
            <Image width={100} height={100} src={icon.src} alt="" />
            <Header fontSize={20}>{title}</Header>
          </div>
          <div className={classList.flip_card_back}>
            <div className={classList.flip_header}>
              {/* <img src={icon.src} alt="" /> */}
              <Header color="#fff" fontWeight="semi-bold"  fontSize={18}>{title}</Header>
            </div>
            <Paragraph fontSize="12" color="#fff">{content}</Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
