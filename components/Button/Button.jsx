import PropTypes from "prop-types";
import classList from "./Button.module.scss";
import Paragraph from "../Paragraph/Paragraph";

const Button = (props) => {
  var {
    children = "button",
    fontSize = 14,
    fontWeight = "semi-bold",
    backgroundColor = "#1d2228",
    color = "#fff",
    hoverLight,
    hover,
    style,
    customClass,
    ...restProps
  } = props;
  return (
    <>
      <button
        style={{ background: backgroundColor, ...style }}
        className={`${classList.buttonContainer} ${hoverLight && classList.hover_light || hover && classList.hover || ""}  ${customClass}`}
        {...restProps}>
        <Paragraph
          color={color}
          style={{ letterSpacing: "1.5px" }}
          fontSize={fontSize}
          fontWeight={fontWeight}
          marginBottom="0">
          {children}
        </Paragraph>
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  hoverLight:PropTypes.bool,
  hover:PropTypes.bool,
};

export default Button;
