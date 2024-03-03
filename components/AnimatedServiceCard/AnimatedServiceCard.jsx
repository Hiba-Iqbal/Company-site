import classList from "./AnimatedServiceCard.module.scss";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
const AnimatedServiceCard = (props) => {
  const {
    title = "Tesla Love",
    content = "Lorem ipsum dolor sit amer consenter adipisicing elite. Distinction necessitating molestiae quasi",
    icon = ""
  } = props;
  return (
    <div className={classList.animated_card_wrapper}>
      <div className={classList.box_content}>
        <Paragraph>
          {content}
        </Paragraph>
      </div>
      <div className={classList.animate_step_up}>
        <img
          src={icon.src}
          alt=""
        />
        <Header
          customClass={classList.animate_heading}
          fontSize={20}
          variant="h2">
          {title}
        </Header>
      </div>
    </div>
  );
};

export default AnimatedServiceCard;
