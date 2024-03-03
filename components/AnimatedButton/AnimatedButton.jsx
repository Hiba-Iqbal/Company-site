import PropTypes from "prop-types";
import classList from "./AnimatedButton.module.scss";
import Paragraph from "../Paragraph/Paragraph";
import { FaRegStar } from "react-icons/fa";

const AnimatedButton = (props) => {
  var {
    children = "button",
    fontSize = 18,
    fontWeight = "bold",
    backgroundColor = "#1d2228",
    iconComponent = (
      <FaRegStar className={classList.social_icons} color="#fff" size={20} />
    ),
    iconColor = "#fff",
    iconSize = 20,
    color = "#fff",
    hoverLight,
    hoverEffect,
    style,
    customClass,
    ...restProps
  } = props;

  const getIconComponent = (size = 20, color = "#fff") => {
    return (
      <FaRegStar className={classList.social_icons} color={color} size={size} />
    );
  };

  return (
    <>
      <button
        style={{ background: backgroundColor, ...style }}
        className={`${classList.buttonContainer} ${
          (hoverLight && classList.hover_light) ||
          (hoverEffect && classList.hover) ||
          ""
        }  ${customClass}`}
        {...restProps}>
        <div className={classList.socialIconsWrapper}>
          {getIconComponent(iconSize, iconColor)}
        </div>
        <Paragraph
          customClass={classList.para}
          color={color}
          style={{ letterSpacing: "1.5px", marginLeft: "15px" }}
          fontSize={fontSize}
          fontWeight={fontWeight}
          marginBottom="0">
          {children}
        </Paragraph>
      </button>
    </>
  );
};

AnimatedButton.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  hoverLight: PropTypes.bool,
  hoverEffect: PropTypes.bool,
  iconColor: PropTypes.string,
  iconSize: PropTypes.bool,
};

export default AnimatedButton;
