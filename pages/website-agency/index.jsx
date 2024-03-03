import { useWindowSize } from "../../utils/Data/helpers";
import landingImage1 from "../../assets/images/landingImages/agencyLanding1.webp";
import landingImage2 from "../../assets/images/landingImages/agencyLanding2.webp";
import WebsiteServices2 from "../../components/WebsiteServices2/WebsiteServices2";
import Head from "next/head";
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
    heading: "Website Agency crafting beautiful brands and engaging websites",
    content: [
      `Visitors that come to your website are looking for a specific piece
    of information, a product, or a service. The first and most
    important goal, we feel, is to present that information with as few
    import {Head} from 'next/head'; barriers and distractions as
    possible. A winning website has clear messaging, calls to action,
    and then polished visuals and photography, but solid content and
    clear messages are at the core`,
    ],
    style: contentStyle,
  };
  const landing2 = {
    image: landingImage2,
    reverse: device === "mobile" || device === "tablet" ? true : false,
    heading:
      "Building cutting edge websites that encompass the latest technology.",
    content: [
      `Visitors that come to your website are looking for a specific piece
    of information, a product, or a service. The first and most
    important goal, we feel, is to present that information with as few barriers and distractions as
    possible. A winning website has clear messaging, calls to action,
    and then polished visuals and photography, but solid content and
    clear messages are at the core.`,
    ],
    style: contentStyle,
  };
  return (
    <>
      <Head>
        <title>Website agency | Company</title>
      </Head>
      <WebsiteServices2
        headingContent1="#1 Website Agency"
        headingContent2="A CREATIVE WEBSITE AGENCY BASED IN USA"
        paraContent="Company is a website agency that specializes in establishing a relationship with our clients by designing a captivating front end with insights and analytics. We construct a successful website that blends good customer experience, aesthetically pleasing design, clear 'calls to action,' and search performance using industry-leading technology and methods. With unique designs, we want to take your brand to the next level. All of this is accomplished while working closely with our experts of website agency to ensure that your bespoke website accurately reflects your brand."
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