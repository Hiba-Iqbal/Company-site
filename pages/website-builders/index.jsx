import WebsiteServices2 from "../../components/WebsiteServices2/WebsiteServices2";
import { useWindowSize } from "../../utils/Data/helpers";
import landingImage1 from "../../assets/images/landingImages/buildersLanding1.webp";
import landingImage2 from "../../assets/images/landingImages/buildersLanding2.webp";
import Head from "next/head";
import Script from "next/script";
import dynamic from 'next/dynamic'
const DesktopLanding = dynamic(() => import('../../components/DesktopLanding/DesktopLanding'))
const MobileLanding = dynamic(() => import('../../components/MobileLanding/MobileLanding'))

const index = () => {
  const device = useWindowSize();
  const contentStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  };

  const bulletOptions = [
    "Online Stores",
    "Online Booking Functionality",
    "Blogs",
    "Community features (members, forum, chat, etc)",
    "Events/Ticketing",
    "Custom Lead Forms",
  ];

  const landing1 = {
    image: landingImage1,
    reverse: true,
    heading: "Your Website Is Essentially Your Online Brand.",
    content: [
      `It has the power to make or break how customers perceive your
  company. According to studies, the average consumer makes a decision
  within 10 seconds of seeing your website - do you want to replace it
  with a design that takes you less time to plan your meals for the
  next day? Website builder like us can develop a professional
  impression that's so compelling that they'll be tempted to call your
  company for additional information! When it comes to building the
  unique design, wordpress website builder like us need to know
  everything there is to know about your company. We don't write a
  single line of code until we've drawn out the ideal layout and
  structure, which both of us agree on.`,
    ],
    style: contentStyle,
  };

  const landing2 = {
    image: landingImage2,
    reverse: device === "mobile" || device === "tablet" ? true : false,
    heading: "Your Website Is Essentially Your Online Brand",
    content: [
      ` We're here as a website builder that’s designed to help your
    business grow—from SEO tools to social integration. Websites +
    Marketing is an all-in-one strategy that does it all. A good team of
    website builder is all you need to create a compelling presence on
    internet. In today's day and age, a website is a necessity for your
    business. Our skilled team of website builder can make your business
    standout and credible. We build websites that are specific to your
    business. We can integrate`,
    ],
    style: contentStyle,
    bulletOptions: bulletOptions,
  };

  return (
    <>
      <Head>
        <title>Website builders | Company</title>
        {/* <script
          defer
          src="https://www.googletagmanager.com/gtag/js?id=AW-10795784072"></script> */}
        {/* <Script
        strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} 
    gtag('js', new Date()); 
    gtag('config', 'AW-10795784072');
  `,
          }}
        /> */}
      </Head>
      <WebsiteServices2
        headingContent1="#1 Website Builders"
        headingContent2="website builders for small businesses"
        paraContent="Our website builder provide design and development services for many types of businesses such as  website builders, school website, or a clothing website, we personalize them to match your specific needs. From simple websites that provide information about your company to more complicated websites like e-commerce that accept payments directly from customers. We are a recognized shopify enthusiasts. It's your brand we're talking about here, therefore our development team treats it with the respect it deserves."
      />
      {device === "desktop" ? (
        <DesktopLanding landing1={landing1} landing2={landing2} />
      ) : (
        <MobileLanding landing1={landing1} landing2={landing2} />
      )}
    </>
  );
};

export default index;
