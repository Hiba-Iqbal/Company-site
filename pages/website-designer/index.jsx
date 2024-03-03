import landingImage1 from "../../assets/images/landingImages/designerLanding1.webp";
import landingImage2 from "../../assets/images/landingImages/designerLanding2.webp";
import { useWindowSize } from "../../utils/Data/helpers";
import WebsiteServices2 from "../../components/WebsiteServices2/WebsiteServices2";
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
    "WordPress Website Experts",
    "Template Customization",
    "Full Design Services",
    "Custom Development",
    "Redesign & Updates",
    "Maintenance & Support",
  ];

  const landing1 = {
    image: landingImage1,
    reverse: true,
    heading: " Launch, Grow, And Reinvent Brands with Us",
    content: [
      ` With modern and smart website designer, we specialize in helping
    businesses develop a best website to boost their digital brand and
    outperform the competition. Our website designers combine dynamic
    web design with cutting-edge marketing technologies to provide your
    company with a powerful website that performs as swiftly as it
    appears. No need to search ’website designer near me’ anymore, as
    over the internet we can provide you impeccable website designer
    with a proven track record of increasing client revenues.`,
    ],
    style: contentStyle,
  };

  const landing2 = {
    image: landingImage2,
    reverse: device === "mobile" || device === "tablet" ? true : false,
    heading: "Website Designer Services We Offer",
    content: [
      `From basic WordPress template websites to full-on design, custom
    development, branding, and messaging – our team can do it all. We offer the following designer services:`,
    ],
    style: contentStyle,
    bulletOptions,
  };
  return (
    <>
      <Head>
        <title>Website designer | Company</title>
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
        headingContent1="#1 Website Designer"
        headingContent2="FULL-SCALE WEBSITE DESIGNER AT YOUR SERVICE"
        paraContent="From enticing consumers to buy your goods or call your team, your website plays a vital role in generating revenue. Our website designers understand the importance of your website, which is why we offer you our award-winning website designer focus on creating unique sites that are user-friendly, boost conversions, and follow best SEO practices. Our website Designer can handle all aspects of design, redesign, custom development, theme installation, updates, migration, support, maintenance, and even manage cloud hosting options. "
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
