import classList from "./Section.module.scss";
import PropTypes from "prop-types";

const Section = ({
  background,
  children,
  flex = false,
  style = {},
  margin,
  padding,
  height,
  extraClass="",
  ...restProps
}) => {
  return (
    <div
      className={`${extraClass} ${classList.container} ${
        !flex ? classList.fixedGrid : classList.flexGrid
      }`}
      style={{ background, margin, padding, height, ...style }}
      {...restProps}>
      <div className={classList.gridChild}>{children}</div>
    </div>
  );
};

Section.propTypes = {
  background: PropTypes.string,
  children: PropTypes.element,
  flex: PropTypes.bool,
  style: PropTypes.object,
  margin: PropTypes.string,
  padding: PropTypes.string,
  height: PropTypes.string,
};

export default Section;
