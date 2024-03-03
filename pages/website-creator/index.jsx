import WebsiteServices2 from "../../components/WebsiteServices2/WebsiteServices2";
import { useWindowSize } from "../../utils/Data/helpers";
import landingImage1 from "../../assets/images/landingImages/creatorLanding1.webp";
import landingImage2 from "../../assets/images/landingImages/creatorLanding2.webp";
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
    heading: "We Websites Creator that Build Your Business",
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
    heading: "Let Our Team Create the website of your dreams",
    content: [
      `Our developers have perfected how they operate together through a
      variety of projects, which is just as vital as the talents
      themselves. As a result, you'll have access to a cohesive,
      high-performing team from the start of your project. The most
      important business outcome is ensuring that your visitors converts.
      import {Head} from 'next/head'; This is where Company will
      ensure that we fully comprehend your buyer's journey.`,
    ],
    style: contentStyle,
    bulletOptions,
  };

  return (
    <>
      <Head>
        <title>Website creator | Company</title>
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
        headingContent1="#1 Website Creator"
        headingContent2="Leading Website Creator"
        paraContent="Your business could be left in the dust if your website isn't working well. Not to mention the money you'll waste on ineffective marketing initiatives, missed sales chances, and talent recruitment difficulties. Your website should aid in the growth of your firm, making your efforts easier and opening up new possibilities. A terrible website shouldn't have to have long-term ramifications for your brand.For clients, Company is a fully charged website creator powerhouse that explores the intersections of design, digital technology, and development."
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
