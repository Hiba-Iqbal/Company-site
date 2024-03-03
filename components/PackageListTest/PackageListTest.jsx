import classList from "./PackageListTest.module.scss";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";

const PackageListTest = (props) => {
  const { title , listitem} = props;
  return (
    <div className={classList.package_list}>
      {title?.length && (
        <Header fontWeight="bold" fontSize={18}>
          {title}
        </Header>
      )}
      {listitem}
    </div>
  );
};

export default PackageListTest;
