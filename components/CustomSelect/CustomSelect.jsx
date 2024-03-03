import React, { useState } from "react";
import classList from "./CustomSelect.module.scss";
import { BiChevronDown } from "react-icons/bi";

const CustomSelect = (props) => {
  const {
    label,
    placeholder = "Select",
    Options = [],
    type,
    onSelect,
    customClass,
    style = {},
  } = props;
  const [selectedValue, setSelectedValue] = useState("");
  const [open, setOpen] = useState(false);

  const hideOption = () => {
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const selectHanlder = (value) => {
    onSelect(value);
  };

  return (
    <div
      className={`${classList.custom_select_wrapper} ${
        type === "light" ? classList.light : ""
      } ${customClass}`}
      style={style}>
      <label htmlFor="">{label}</label>
      <div
        style={{ marginTop: label?.length > 0 ? 4 : 0 }}
        className={classList.select_area}>
        <div className={classList.place_holder}>
          {selectedValue.length > 0 ? "" : placeholder}
        </div>
        <input
          onBlur={hideOption}
          // onFocus={() => setOpen(true)}
          onClick={() => setOpen(!open)}
          value={selectedValue}
          type="text"
        />
        <BiChevronDown />
        {open && (
          <div className={classList.select_selection}>
            {Options.map((v, i) => (
              <p
                key={i}
                onClick={() => {
                  selectHanlder(v.value);
                  setSelectedValue(v.label);
                }}>
                {v.label}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
