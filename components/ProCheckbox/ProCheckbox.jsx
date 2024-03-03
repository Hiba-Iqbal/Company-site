import React, { useEffect } from "react";
import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";
import classList from "./ProCheckbox.module.scss";
const ProCheckbox = ({
  className: customClass,
  label,
  value,
  id,
  itemSelected,
  setItemSelected,
  quantity,
}) => {
  const [check, setCheck] = React.useState(false);
  const updateSelected = (isChecked) => {
    if (isChecked) {
      // add to selected item
      const newItemSelected = [
        ...itemSelected,
        {
          id,
          value,
          quantity,
          label
        },
      ];
      setItemSelected(newItemSelected);
    } else {
      // remove from selected item
      const newItemSelected = itemSelected.filter((item) => item.id !== id);
      setItemSelected(newItemSelected);
    }
  };
  useEffect(() => {
    updateSelected(check);
  }, [check]);

  const handleCheckBoxHandler = (e) => {
    const { checked } = e.target;
    setCheck(checked);
  };

  const handleLabelClick = () => {
    setCheck(!check);
  };
  return (
    <>
      <div className={`${classList.checkBoxWrapper} ${customClass}`}>
        {/* <input
          onChange={(e) => handleCheckBoxHandler(e, value)}
          type="checkbox"
          value={value}
          className={classList.iAmHover}
          checked={check}
        />
        <label
          className={classList.iAmHover}
          onClick={() => handleLabelClick()}>
          {label}
        </label> */}
        <label
          onClick={() => handleLabelClick()}
          className={classList.container}>
          {label}
          <input
            onChange={(e) => handleCheckBoxHandler(e, value)}
            type="checkbox"
          />
          <span className={classList.checkmark}></span>
        </label>
      </div>
    </>
  );
};

export default ProCheckbox;
