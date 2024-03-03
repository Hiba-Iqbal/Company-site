import Section from "../../components/Section/Section";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import Paragraph from "../../components/Paragraph/Paragraph";
import { refundPolicyList } from "../../utils/Data/Data";
import classList from "./index.module.scss";
import { openLiveChat } from "../../utils/Data/helpers";
import  Head  from "next/head";

const index = () => {
  return (
    <Section>
      <Head>
        <title>Refund Policy | Company</title>
      </Head>
      <div className={classList.IAmRefundPolicy}>
        <Header
          color="#000000"
          style={{ fontSize: "24px", fontWeight: "bolder" }}>
          Refund Policy
        </Header>
        <Paragraph style={{ marginTop: "20px" }}>
          {refundPolicyList.map((data, id) => {
            return <List key={id}>{data}</List>;
          })}
        </Paragraph>
      </div>
    </Section>
  );
};

export default index;
