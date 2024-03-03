import React from "react";
import classList from "./StyledButton.module.scss";
const StyledButton = (props) => {
  var { children, disabled = false, ...restProps } = props;
  return (
    <button
      className={`${classList.styledButton} ${
        disabled && classList.disabledBtn
      }`}
      {...restProps}>
      {children}
    </button>
  );
};
export default StyledButton;
