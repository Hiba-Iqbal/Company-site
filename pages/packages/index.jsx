import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import Paragraph from "../../components/Paragraph/Paragraph";
import Section from "../../components/Section/Section";
import classList from "./pricePlan.module.scss";
import Button from "../../components/Button/Button";
import PricingPlanCard from "../../components/PricingPlanCard/PricingPlanCard";
import ListItem from "../../components/ListItem/ListItem";
import TestimonialV2 from "../../components/TestimonialV2/TestimonialV2";
import ComboPackage from "../../components/ComboPakage/ComboPackage";
import CustomPakage from "../../components/CustomPakage/CustomPakage";
import ContactForm from "../../components/ContactForm/ContactForm";
import Packages from "../../components/Packages/Packages";
import MarketingBanner from "../../components/MarketingBanner/MarketingBanner";
import { useRouter } from "next/router";
import Head  from "next/head";
import RankLogo from '../../components/RankLogo/RankLogo';

const index = () => {
  const [selectedPack, setSelectedPack] = useState(null);
  const router = useRouter();
  const { packageName } = router.query;

  useEffect(() => {
    if (packageName) {
      setSelectedPack(packageName);
    }
  }, [packageName]);
  return (
    <div className={classList.packages_wrapper}>
      <Head>
        <title>Packages | Company</title>
      </Head>
      <PageTitle title={"Our Packages"} />
      <Packages isPackInURL={selectedPack} />
      <TestimonialV2 />
      <Section>
      <RankLogo/>
        <ComboPackage showPrice={true} />
      </Section>
      <MarketingBanner />
      <CustomPakage />
      <ContactForm />
    </div>
  );
};

export default index;
