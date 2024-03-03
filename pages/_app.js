import dynamic from "next/dynamic";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.scss";
import { useRouter } from "next/router";
import ContactHeader from "../components/ContactHeader/ContactHeader";
import ContactWithUs from "../components/ContactWithUs/ContactWithUs";
import ContactHeaderForLanding from "../components/ContactHeaderForLanding/ContactHeaderForLanding";
import { useEffect } from "react";
import GlobalScripts from "../components/GlobalScripts/GlobalScripts";
const Footer = dynamic(() => import("../components/Footer/Footer"));
const Copyright = dynamic(() => import("../components/Copyright/Copyright"));
const CopyrightForLanding = dynamic(() =>
  import("../components/CopyrightForLanding/CopyrightForLanding")
);

const isLandingPage = (pathname) => {
  const urls = [
    "website-agency",
    "website-developer",
    "website-development",
    "website-designer",
    "website-design",
    "website-maker",
    "website-creator",
    "website-service",
    "website-builders",
  ];

  return urls.some((url) => pathname.includes(url));
};

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  useEffect(() => {
    window.zESettings = {
      event: "chat_message",
      condition: [
        "and",
        ["eq", "@visitor_source_type", "sunco_web"],
        [
          "and",
          ["eq", "@visitor_served", false],
          ["gt", "@visitor_previous_chats", 0],
          ["eq", "@visitor_requesting_chat", false],
        ],
      ],
      actions: [
        ["sendMessageToVisitor", "Sales Support", "How May I help you?"],
      ],
    };
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <ContactWithUs />
      {isLandingPage(pathname) ? (
        <ContactHeaderForLanding />
      ) : (
        <ContactHeader />
      )}
      {!isLandingPage(pathname) && <Navbar />}
      <div
        style={{
          paddingTop: isLandingPage(pathname) ? "40px" : "110px",
        }}
      >
        <Component {...pageProps} />
      </div>
      <GlobalScripts/>
    
      {isLandingPage(pathname) ? null : <Footer />}
      {isLandingPage(pathname) ? <CopyrightForLanding /> : <Copyright />}
    </div>
  );
}

export default MyApp;
