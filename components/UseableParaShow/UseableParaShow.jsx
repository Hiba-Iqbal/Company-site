import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import classList from "./UseableParaShow.module.scss";
import defaultImage from "../../assets/images/sample/sample4.png";
import Section from "../Section/Section";
const UseableParaShow = () => {
  return (
    <div className={classList.main}>
      <div className={classList.paraHeading}>
        <Header>Business Mission Or Essence</Header>
        <Paragraph>
          We believe in study of mission is very important. Research on the
          history of the company to get details and explain in clear words, what
          the company is all about?
        </Paragraph>
      </div>
      <div className={classList.paraContent}>
        <video autoPlay loop muted className={classList.banner_video}>
          <source src="/Video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default UseableParaShow;
