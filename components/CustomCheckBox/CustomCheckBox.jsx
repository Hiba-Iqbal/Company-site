import classList from "./CustomCheckBox.module.scss";
const CustomCheckBox = ({ label = "default value",labelClassName }) => {
  return (
    <label className={classList.container}>
      {label}
      <input
        onChange={(e) => console.log(e.target.value)}
        value={"value"}
        type="checkbox"
        name={"name"}
      />
      <span className={classList.checkmark}></span>
    </label>
  );
};

export default CustomCheckBox;
