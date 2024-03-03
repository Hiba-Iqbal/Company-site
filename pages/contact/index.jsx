// SHARED COMPONENETS
import Contact_Card from "../../components/Contact_Card/Contact_Card";
import Section from "../../components/Section/Section";
import ContactFormV2 from "../../components/ContactFormV2/ContactFormV2";

// STYLE
import classList from "./index.module.scss";
import  Head  from "next/head";

const index = () => {
  const contactsData = [
    {
      id: 1,
      title: "Email Address",
      IconMark: "Email",
      content:
        "order@bookmywebsites.com  contact@bookmywebsites.com  support@bookmywebsites.com",
    },
    {
      id: 2,
      title: "Phone",
      IconMark: "Phone",
      content: "+92 321 322 322 323" + "+92 321 322 322 323",
    },
    {
      id: 3,
      title: "Location",
      IconMark: "Location",
      content:
        "350 Rhode Island Street Care Center, San Francisco,San Francisco, CA 94103",
    },
  ];

  return (
    <>
      <Head>
        <title>Contact | Company</title>
      </Head>
      <ContactFormV2></ContactFormV2>
    </>
  );
};

export default index;
