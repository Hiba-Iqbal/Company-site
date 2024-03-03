import classList from "./ListItemV2.module.scss";
import check from "../../assets/images/icons/check.svg";
import dot from "../../assets/images/icons/Dot.svg";

const ListItemV2 = ({ dotIcon = false, content }) => {
  return (
    <>
      <li className={classList.listItem}>
        {dotIcon && <img src={`${dot.src} `} alt="" />}
        {!dotIcon && <img src={`${check.src} `} alt="" />}
        {dotIcon && (
          <span style={{ color: "#B72A12", fontWeight: "600" }}>{content}</span>
        )}
        {!dotIcon && <span style={{ fontWeight: "300" }}>{content}</span>}
      </li>
    </>
  );
};

export default ListItemV2;
