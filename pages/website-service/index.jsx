import WebsiteServices2 from "../../components/WebsiteServices2/WebsiteServices2";
import { useWindowSize } from "../../utils/Data/helpers";
import landingImage1 from "../../assets/images/landingImages/serviceLanding1.webp";
import landingImage2 from "../../assets/images/landingImages/serviceLanding2.webp";
import Script from "next/script";
import Head from "next/head";
import dynamic from 'next/dynamic'
const MobileLanding = dynamic(() => import('../../components/MobileLanding/MobileLanding'))
const DesktopLanding = dynamic(() => import('../../components/DesktopLanding/DesktopLanding'))

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
    heading: `A passion for design, a commitment to quality, and a drive to help
    our clients grow their businesses`,
    content: [
      ` We became one of the best website service businesses thanks to our
      love of clean design, obsession with quality, and personal attention
      we give to each customer. We're providing website services,
      designers, creative directors, SEOs, and content creators. You get
      outstanding outcomes and an easy-to-work-with team when you combine
      all of our cumulative knowledge. We are specialized in designing
      smart website service using special editor tools for our clientele.`,
    ],
    style: contentStyle,
  };

  const landing2 = {
    image: landingImage2,
    reverse: device === "mobile" || device === "tablet" ? true : false,
    heading: "Why choose us for website service?",
    content: [
      `Advertising, marketing, and development are ever-changing fields
      that may have already passed your firm by; you may also notice that
      your approach is falling behind. We provide your business the
      momentum it needs to bridge that gap and generate stronger
      conversions as an award-winning Atlanta tech company and
      full-service agency. Our editor tools will help you in creating a
      dynamic website for your brand. To have a website that not only
      looks good, but works perfectly, one needs to have a website service
      team with industry-leading knowledge and a fixation on
      top-of-the-line branding, marketing strategy, and simply the best
      creativity at your disposal. What we bring to the table is the
      ability to go in the appropriate way in order to align with your
      market.`,
    ],
    style: contentStyle,
  };

  return (
    <>
      <Head>
        <title>Website service | Company</title>
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
        headingContent1="#1 Website Service"
        headingContent2="Globally Recognized Website Service"
        paraContent="We're a nationally recognized firm that specializes in website service for SMEs and big corporations. We are helping global brands create websites that are as attractive as they are practical. Your website is one of the most effective marketing tools. We can provide you a website service that will help you in engaging with your visitors, increasing conversions, or improving your user experience."
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
