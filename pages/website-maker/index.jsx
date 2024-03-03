import WebsiteServices2 from "../../components/WebsiteServices2/WebsiteServices2";
import landingImage1 from "../../assets/images/landingImages/makerLanding1.webp";
import landingImage2 from "../../assets/images/landingImages/makerLanding2.webp";
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
  const landing1 = {
    image: landingImage1,
    reverse: true,
    heading: "Website Maker with Professionally Designed Website Templates",
    content: [
      ` Want to design and build your own high-quality website? Whether
      you're promoting your business, showcasing your work, opening your
      store, or starting a blog—you can do it all with our website maker.
      Nowadays, the website cost can go up to 1000s of dollars, but we are
      offering you a platform that can help you design a state of the art
      website equipped with latest features.`,
    ],
    style: contentStyle,
  };

  const landing2 = {
    image: landingImage2,
    reverse: device === "mobile" || device === "tablet" ? true : false,
    heading: "Total Design Freedom with website maker",
    content: [
      `To help you develop your website and establish your business, you'll
      get access to customized webpages and handy tools. Now you can
      easily make a website with our website maker to assist you in
      getting discovered and expanding your customer base in a stylish
      manner. Begin right now with our free website maker. From
      merchandising to checkout, you'll find everything you need to run
      your online store and show showcase your items or services to their
      full potential.`,
    ],
    style: contentStyle,
  };

  return (
    <>
      <Head>
        <title>Website maker | Company</title>
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
        headingContent1="#1 Website Maker"
        headingContent2="The Freedom to Build the Website You Want with Advanced Website Maker"
        paraContent="Discover a platform that gives you the liberty to create, develop, tweak, manage and design a website just the way you want. Start from scratch, or you can choose from over 500 designer-made templates that you can fully customize using the drag and drop website maker."
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
