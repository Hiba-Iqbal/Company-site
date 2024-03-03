import classList from "./ListItem.module.scss";
import check from "../../assets/images/icons/check.svg";
import Image from "next/image"
import { FaCheck } from "react-icons/fa";

const ListItem = ({  content }) => {
  return (
    <>
      <li className={classList.listItem}>
        <FaCheck size={15}/>
        <span style={{ fontWeight: "400" }}>{content}</span>
      </li>
    </>
  );
};

export default ListItem;
