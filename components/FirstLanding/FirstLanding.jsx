import React from "react";
import BulletList from "../BulletList/BulletList";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Section from "../Section/Section";
import UsableRow from "../useAbleRow/UsableRow";

const FirstLanding = ({
  image,
  style,
  reverse = true,
  heading,
  content = [],
  bulletOptions,
}) => {
  console.log("content", content);
  return (
    <Section>
      <UsableRow image={image} reverse={reverse} style={style}>
        <Header fontWeight="bold">{heading}</Header>
        {content?.map((item) => (
          <Paragraph style={{ marginBottom: "25px" }}>{item}</Paragraph>
        ))}
        {bulletOptions && (
          <Paragraph>
            <BulletList options={bulletOptions} />
          </Paragraph>
        )}
      </UsableRow>
    </Section>
  );
};

export default FirstLanding;
