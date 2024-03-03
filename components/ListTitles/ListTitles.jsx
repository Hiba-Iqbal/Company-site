import classList from "./ListItem.module.scss";
import check from "../../assets/images/icons/check.svg";

const ListItem = ({ content }) => {
  return (
    <>
      <li className={classList.listItem}>
        <img src={check.src} alt="" />
        <span>{content}</span>
      </li>
    </>
  );
};

export default ListItem;
