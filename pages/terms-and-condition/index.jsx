import Section from "../../components/Section/Section";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import { termsdata } from "../../utils/Data/Data";
import NavLink from "../../components/Navlinks/Navlinks";
import classList from "./index.module.scss";
import  Head  from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Terms and Conditions | Company</title>
      </Head>
      <Section>
        <div className="IAmPrivacyPolicy">
          {termsdata?.map(({ heading, content, list }, i) => {
            return (
              <div key={i}>
                <Header
                  color="#000000"
                  style={{ fontSize: "24px", fontWeight: "bolder" }}>
                  {heading}
                </Header>
                {content?.map((data, i) => (
                  <Paragraph key={i} style={{ fontWeight: "400" }}>
                    {data}
                    {/* {console.log(data)}                */}
                  </Paragraph>
                ))}
                {list?.map((data, i) => (
                  <Paragraph key={i} style={{ fontWeight: "400" }}>
                    <ul style={{ marginLeft: "20px" }}>
                      <li> {data} </li>
                    </ul>
                  </Paragraph>
                ))}
              </div>
            );
          })}
          <div className={classList.term_flex_section}>
            <p>For more information</p>

            <NavLink href="/refund-policy">Click Here</NavLink>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default index;
