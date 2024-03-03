import classList from "./PackageList.module.scss";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";

const PackageList = (props) => {
  const { title, services } = props;

  const addClassNameByValue = ()=> {
   let bool = services.some((ser)=> {
      if(ser === "Youtube Page Design") {
        return true;
      }
    })
    return bool
  }
  return (
    <div className={`${addClassNameByValue() ? classList.remove_spacing_y : "akjsdl"} ${classList.package_list}`}>
      {title?.length && (
        <Header fontWeight="bold" fontSize={20}>
          {title}
        </Header>
      ) || ""}
      {
        services?.map((ser, i)=> (
          <div key={i} className={classList.list_items}>
        <FaCheck
          className={classList.check_icon}
          color="#272a3d"
          size={"15px"}
        />
        <Paragraph fontWeight="medium" > {ser}</Paragraph>
      </div>
        ))
      }
      
    </div>
  );
};

export default PackageList;
