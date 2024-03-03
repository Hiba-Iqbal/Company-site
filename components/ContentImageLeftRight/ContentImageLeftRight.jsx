import React from "react";
import { useWindowSize } from "../../utils/Data/helpers";
import UsableRow from "./../useAbleRow/UsableRow";

const ContentImageLeftRight = ({
  imageShow,
  reverse,
  manageReverse,
  children,
}) => {
  const device = useWindowSize();
  const manageReverseClass =
    device === "mobile" || device === "tablet" ? true : false;
  const rowStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  };
  return (
    <UsableRow
      image={imageShow}
      reverse={reverse}
      style={rowStyle}>
      {children}
    </UsableRow>
  );
};

export default ContentImageLeftRight;
