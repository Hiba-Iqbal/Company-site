import Section from "../../components/Section/Section";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import { privacypolicydata } from "../../utils/Data/Data";
import Link from "next/link";
import  Head  from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Company</title>
      </Head>
      <Section>
        <div className="IAmPrivacyPolicy">
          {privacypolicydata?.map(({ heading, content, list, links }, i) => {
            // console.log(links);
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
                    {/* {console.log(data)} */}

                    {i == 1 &&
                      links?.map((data, i) => (
                        <Link
                          style={{ cursor: "pointer", fontWeight: "600" }}
                          key={i}
                          href={data}>
                          {data.replace("/", " ")}
                        </Link>
                      ))}
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
        </div>
      </Section>
    </div>
  );
};

export default index;
