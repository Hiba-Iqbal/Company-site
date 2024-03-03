import React from "react";
import ClientsLogo from "../ClientsLogo/ClientsLogo";
import ComboPackage from "../ComboPakage/ComboPackage";
import FirstLanding from "../FirstLanding/FirstLanding";
import MarketingBanner from "../MarketingBanner/MarketingBanner";
import Packages from "../Packages/Packages";
import Procedure from "../Procedure/Procedure";
import Section from "../Section/Section";
import ShowCaseWrapper from "../ShowCaseWrapper/ShowCaseWrapper";
import WebPresenseV2 from "../WebPresenseV2/WebPresenseV2";
import CustomPakage from "../CustomPakage/CustomPakage";
import ContactForm from "../ContactForm/ContactForm";
import RankLogo from '../RankLogo/RankLogo';

const DesktopLanding = ({
    landing1,
    landing2
}) => {
  return (
    <div>
      <WebPresenseV2 />
      <ShowCaseWrapper />
      <ClientsLogo />
      <Procedure />
      <Packages />
      <FirstLanding
        image={landing1.image}
        reverse={landing1.reverse}
        style={landing1.style}
        heading={landing1.heading}
        content={landing1.content}
        bulletOptions={landing1.bulletOptions}
      />
      <div>
        <Section>
      <RankLogo />
          <ComboPackage />
        </Section>
      </div>
      <MarketingBanner />
      <CustomPakage />
      <FirstLanding
        image={landing2.image}
        reverse={landing2.reverse}
        style={landing2.style}
        heading={landing2.heading}
        content={landing2.content}
        bulletOptions={landing2.bulletOptions}
      />
      <ContactForm />
    </div>
  );
};

export default DesktopLanding;
