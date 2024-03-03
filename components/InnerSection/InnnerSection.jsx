import classList from "./InnnerSection.module.scss";

const InnnerSection = ({ children, padding }) => {
  // console.log(padding, "padding Inner Section");
  return (
    <div className={classList.innerSection} style={{ padding: padding }}>
      {children}
    </div>
  );
};

export default InnnerSection;
