import React, { useState } from "react";
import classList from "./PricingSection.module.scss";
import Section from "../Section/Section";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Header from "../Header/Header";
import PricingPlanCard from "../PricingPlanCard/PricingPlanCard";
import ListItem from "../ListItem/ListItem";
import { pricingData } from "../../utils/Data/Data.jsx";

const StyledBtn = ({ children, selected, type, ...restProps }) => (
  <>
    <Button
      backgroundColor={selected === type ? "#05aff2" : "transparent"}
      color={!(selected === type) ? "black" : "white"}
      style={
        !(selected === type)
          ? { border: "1.5px solid black" }
          : { border: "1.5px solid transparent" }
      }
      {...restProps}>
      {children}
    </Button>
  </>
);

const PricingSection = () => {
  const [selectedItem, setSelectedItems] = useState("web");
  const filteredPackages = pricingData.find((el) => el.type === selectedItem);
  return (
    <div className={classList.pricing_section}>
      <Section>
        <div className={classList.content_box}>
          <Paragraph fontWeight="bold" fontSize={20}>
            Our
          </Paragraph>
          <Header fontWeight="bold">Affordable Packages</Header>
        </div>

        <div className={classList.pricing_plan_wrapper}>
          <PricingPlanCard netAmount={"399"} title={"Startup web"}>
            <ul>
              <ListItem content={"3 Custom Logo Design Concepts"} />
              <ListItem content={"1 Dedicated Designer"} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"3 Custom Logo Design Concepts"} />
              <ListItem content={"1 Dedicated Designer"} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
            </ul>
          </PricingPlanCard>
          <PricingPlanCard
            type={"elite"}
            netAmount={"1299"}
            title={"Elite web"}>
            <ul>
              <ListItem content={"3 Custom Logo Design Concepts"} />
              <ListItem content={"1 Dedicated Designer"} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"3 Custom Logo Design Concepts"} />
              <ListItem content={"1 Dedicated Designer"} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
            </ul>
          </PricingPlanCard>
          <PricingPlanCard netAmount={"2499"} title={"Business web"}>
            <ul>
              <ListItem content={"3 Custom Logo Design Concepts"} />
              <ListItem content={"1 Dedicated Designer"} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"3 Custom Logo Design Concepts"} />
              <ListItem content={"1 Dedicated Designer"} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
              <ListItem content={"1 Revision  "} />
            </ul>
          </PricingPlanCard>
        </div>
        <div className={classList.view_more}>
          <Button hover={true}>View More</Button>
        </div>
      </Section>
    </div>
  );
};

export default PricingSection;
