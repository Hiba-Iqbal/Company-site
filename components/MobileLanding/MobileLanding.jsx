import React from "react";
import useInView from "react-cool-inview";
import dynamic from "next/dynamic"
import ShowCaseWrapper from "../ShowCaseWrapper/ShowCaseWrapper";
import Section from "../Section/Section";
const WebPresenseV2 = dynamic(() => import("../WebPresenseV2/WebPresenseV2"));
const ClientsLogo = dynamic(() => import("../ClientsLogo/ClientsLogo"));
const Procedure = dynamic(() => import("../Procedure/Procedure"));
const Packages = dynamic(() => import("../Packages/Packages"));
const ComboPackage = dynamic(() => import("../ComboPakage/ComboPackage"));
const MarketingBanner = dynamic(() =>
  import("../MarketingBanner/MarketingBanner")
);
const CustomPakage = dynamic(() => import("../CustomPakage/CustomPakage"));
const ContactForm = dynamic(() => import("../ContactForm/ContactForm"));
const FirstLanding = dynamic(() => import("../FirstLanding/FirstLanding"));
import RankLogo from '../RankLogo/RankLogo';


const MobileLanding = ({landing1,landing2}) => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  return (
    <div ref={observe}>
      {inView && (
        <>
          <WebPresenseV2 />
          <ShowCaseWrapper />
          <ClientsLogo />
          <Procedure />
          <Packages />
          <FirstLanding
            image={landing1.image}
            reverse={landing1.reverse}
            style={landing1.contentStyle}
            heading={landing1.heading}
            content={landing1.content}
            bulletOptions={landing1.bulletOptions}
          />
          <div>
            <Section>
          <RankLogo/>
              <ComboPackage />
            </Section>
          </div>
          <MarketingBanner />
          <CustomPakage />
          <FirstLanding
            image={landing2.image}
            reverse={landing2.reverse}
            style={landing2.contentStyle}
            heading={landing2.heading}
            content={landing2.content}
            bulletOptions={landing2.bulletOptions}
          />
          <ContactForm />
        </>
      )}
    </div>
  );
};

export default MobileLanding;
