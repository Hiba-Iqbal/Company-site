import classList from "./Stats.module.scss";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Eclipse from "./../../assets/images/Ellipse.svg";

const Stats = ({ numbers, content }) => {
  return (
    <div className={classList.Project}>
      <div className={classList.col_1}>
        <img src={Eclipse.src} alt="" />
        <Header color={`${"white"}`}>
          {" "}
          <h3>{numbers}</h3>{" "}
        </Header>
        <Paragraph color={`${"white"}`}>
          {" "}
          <p>{content}</p>{" "}
        </Paragraph>
      </div>
    </div>
  );
};

export default Stats;
