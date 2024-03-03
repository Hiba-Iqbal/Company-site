import React from "react";

const InnerContainer = ({
  children,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  padding = "1rem",
}) => {
  return (
    <div
      style={{ paddingTop, paddingBottom, paddingLeft, paddingRight, padding }}
    >
      {children}
    </div>
  );
};

export default InnerContainer;
