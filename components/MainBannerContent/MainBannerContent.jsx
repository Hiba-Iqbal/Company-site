import React from "react";
import Button from "../Button/Button";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import Header from "../Header/Header";
import classList from "./MainBannerContent.module.scss";
import { useCounter } from "../../utils/Data/helpers";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Content = ({
  topLine = "Execuitive Design",
  sellingLine = "Lead Your Market With A",
  boldLine = "Sales Boosting Tool",
}) => {
  return (
    <motion.div
      className={classList.container}
      initial={{ scaleX: 0, transformOrigin: "left" }}
      animate={{ scaleX: 1, transformOrigin: "left" }}
      exit={{ scaleX: 0, transformOrigin: "left" }}
      transition={{ duration: 0.5, type: "spring" }}>
      <Header
        customClass={classList.header_strip}
        fontSize={18}
        fontWeight="semi-bold">
        {topLine}
      </Header>
      <Header
        customClass={classList.secondary_header}
        fontSize={30}
        fontWeight="light"
        color="white">
        {sellingLine}
      </Header>
      <Header
        customClass={classList.boldLine}
        fontSize={26}
        fontWeight="medium"
        style={{ textTransform: "uppercase", marginBottom: "30px" }}
        color="#FDB827">
        {boldLine}
      </Header>
      <Link href="/contact">
        <AnimatedButton
          iconColor="#FDB827"
          backgroundColor="transparent"
          color="#FDB827">
          Get Started Now
        </AnimatedButton>
      </Link>
    </motion.div>
  );
};

const MainBannerContent = () => {
  const counter = useCounter({ delay: 5000 });
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {counter === 0 && (
          <Content
            topLine="CREATE A UNIQUE BRAND"
            sellingLine="Design your own package as per your requirement"
            boldLine="CREATE A UNIQUE BRAND"
            key={0}
          />
        )}
        {counter === 1 && (
          <Content
            topLine="EXECUTIVE DESIGN"
            sellingLine="Lead your market significant brand identity"
            boldLine="DESIGNS FROM SCRATCH"
            key={1}
          />
        )}
        {counter === 2 && (
          <Content
            topLine="GET CREATIVE DESIGN"
            sellingLine="We create impectable designs for brands"
            boldLine="SOLUTIONS FOR ALL"
            key={2}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainBannerContent;
