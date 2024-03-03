import Section from "../components/Section/Section";
import classList from "./index.module.scss";
import ShowCaseWrapper from "../components/ShowCaseWrapper/ShowCaseWrapper";
import Packages from "../components/Packages/Packages";
import MainBanner from "../components/MainBanner/MainBanner";
import ComboPackage from "../components/ComboPakage/ComboPackage";
import ClientsLogo from "../components/ClientsLogo/ClientsLogo";
import WebPresenseV2 from "../components/WebPresenseV2/WebPresenseV2";
import Procedure from "../components/Procedure/Procedure";
import MarketingBanner from "../components/MarketingBanner/MarketingBanner";
import WebSolutions from "../components/WebSolutions/WebSolutions";
import TestimonialV2 from "../components/TestimonialV2/TestimonialV2";
import ContactForm from "../components/ContactForm/ContactForm";
import CustomPakage from "../components/CustomPakage/CustomPakage";
import RankLogo from "../components/RankLogo/RankLogo";

const index = () => {
  return (
    <>
      <MainBanner />
      <WebPresenseV2 />
      <ShowCaseWrapper btnColor="white" />
      <ClientsLogo />
      <Procedure />
      <Packages />
      <RankLogo style={{ marginBottom: "20px" }} />
      <div className={classList.combo_wrapper}>
        <ComboPackage />
      </div>
      <MarketingBanner />
      <CustomPakage />
      <WebSolutions />
      <TestimonialV2 />
      <ContactForm />
    </>
  );
};

export default index;
