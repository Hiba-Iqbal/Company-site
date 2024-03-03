import WebsiteServices2 from "../../components/WebsiteServices2/WebsiteServices2";
import { useWindowSize } from "../../utils/Data/helpers";
import landingImage1 from "../../assets/images/landingImages/developerLanding1.webp";
import landingImage2 from "../../assets/images/landingImages/developerLanding2.webp";
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
    heading: "Boost your web presence with agile designs and functionality",
    content: [
      `Our web developer offer business-oriented solutions that match your
      demands and speak volumes about your brand's values, in addition to
      designing and building your web presence.`,
      `When you work with an expert web developer and digital artist, you
      receive a state-of-the-art solution with a cutting-edge appeal that
      engages more people online. Take advantage of powerful technologies
      and a solid architecture to create a web solution that meets your
      needs.`,
      `Allow expert web developer technicians and digital artists to
      develop functions that captivate your target audience so that your
      web presence can thrive like many others have.`,
    ],
    style: contentStyle,
  };

  const landing2 = {
    image: landingImage2,
    reverse: device === "mobile" || device === "tablet" ? true : false,
    heading: "Creative Web Developer Studio",
    content: [
      `Experience pure creativity, skill, and expertise in Technologies for
    Web Developer with programming tools like Python, Angular, React
    Native, and renowned cloud services with creative web developer
    experts who formulate customized solutions.`,
    ],
    style: contentStyle,
    bulletOptions,
  };

  return (
    <>
      <Head>
        <title>Website developer | Company</title>
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
        headingContent1="#1 Website Developer"
        headingContent2="Leading Website Developers "
        paraContent="Build a dynamic and robust digital presence by utilizing sophisticated platforms and technologies. Being an agile web developer company, we work with a wide range of clients to generate results-driven web development products for a variety of sectors.Our professional and experienced unit of web developer personnel work across diverse fields to develop solutions that help our clients move their businesses forward and compete with the best in their fields. "
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
