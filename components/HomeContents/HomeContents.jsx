import Button from "../Button/Button";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import classList from "./HomeContents.module.scss";

const HomeContents = ({ headings, children, showButton, style }) => {
  return (
    <div className={classList.Content}>
      <Header
        style={{
          borderBottom: "4px solid black",
          display: "inline-block",
          paddingBottom: "10px",
          ...style,
        }}>
        {headings}
      </Header>
      <Paragraph>{children}</Paragraph>
      <div>
        {showButton && <Button color={`${"white"}`}>Get Started</Button>}
      </div>
    </div>
  );
};

export default HomeContents;
