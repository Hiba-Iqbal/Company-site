import WebsiteServices2 from "../../components/WebsiteServices2/WebsiteServices2";
import landingImage1 from "../../assets/images/landingImages/developmentLanding1.webp";
import landingImage2 from "../../assets/images/landingImages/developmentLanding2.webp";
import { useWindowSize } from "../../utils/Data/helpers";
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
    "Responsive Sites",
    "Native iOS & Android Apps",
    "Cross Platform Web Apps",
    "Enterprise & Open-Source Platform Implementation",
    "Custom Application Development",
    "System Integrations",
  ];

  const landing1 = {
    image: landingImage1,
    reverse: true,
    heading: "Bespoke Website Development in your range now",
    content: [
      `  We use a wide variety of new techniques to develop easy-to-use and
      manageable websites, portals, and applications. We have a
      specialised team of website development ready to work with you to
      create an interesting and functioning website for your company. We
      create websites on the most up-to-date open source platforms,
      ensuring that your company is secure and technologically advanced.`,
    ],
    style: contentStyle,
  };

  const landing2 = {
    image: landingImage2,
    reverse: device === "mobile" || device === "tablet" ? true : false,
    heading: "Why Choose Us For Your Website Development Project?",
    content: [
      `Your website brings people closer to you, and as a website
      development firm, we'll help you customise their experience by
      utilising the capabilities of our in-house professionals. We've
      created thousands of websites with a variety of tools. From simple
      content management systems (CMS) for straightforward websites to
      custom-built apps and portals.`,
    ],
    style: contentStyle,
    bulletOptions,
  };

  return (
    <>
      <Head>
        <title>Website development | Company</title>
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
        headingContent1="#1 Website Development"
        headingContent2="Top website development & Designing Agency"
        paraContent="Company do it all. We take pleasure in delivering high-quality website development projects that make a real difference. We've worked on a variety of intriguing projects for companies all across the world, each one as different as the next. Every project our team works on is tailored to the specific demands of our clients, and we strive to create something we're pleased to call our own. Regardless of your needs, our skilled web development team will get to work on your project and produce results."
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
