import WebsiteServices2 from "../../components/WebsiteServices2/WebsiteServices2";
import { useWindowSize } from "../../utils/Data/helpers";
import landingImage1 from "../../assets/images/landingImages/designLanding1.webp";
import landingImage2 from "../../assets/images/landingImages/designLanding2.webp";
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
    heading: "Crafting beautiful websites that keep your users engaged",
    content: [
      `Let us help you achieve your target, whether you need website
    design, development, maintenance, business branding, graphic design,
    or continuing support. Welcome to Company agency. We employ
    a series of workshops, wire-framing, and user experience (UX)
    sessions to deliberately design our websites, resulting in a site
    that inhibits trust, communicates essential brand messages, and
    provides a return on investment. We prefer to collaborate with folks
    who value good design. Our designs will set you apart from the
    competition and deliver an interesting and refreshing experience for
    your users. We make our code as minimal as possible while allowing
    our creative team to work on the front end design (UI).`,
    ],
    style: contentStyle,
  };

  const landing2 = {
    image: landingImage2,
    reverse: device === "mobile" || device === "tablet" ? true : false,
    heading: "Website Design Studio Based in USA",
    content: [
      `We create unique company websites that help you advertise your brand
    and sell your goods and services. A website is a crucial and
    exciting asset for any business, but getting exactly what you need
    may be tough and intimidating – especially if you're a new company.
    But that's exactly why we're here!`,
    ],
    style: contentStyle,
  };

  return (
    <>
      <Head>
        <title>Website design | Company</title>
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
        headingContent1="#1 Website Design"
        headingContent2="Innovative Website Design Expertise at your service"
        paraContent="Company supports brands through website design and has an excellent customer list. This USA-based website design studio, founded on design-first principles, focuses on assisting brands in driving transformation. We are aware of your concerns. We create and execute websites that are effective for your company. We know how to bring your ideas to life while increasing engagement, interaction, and usability."
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
