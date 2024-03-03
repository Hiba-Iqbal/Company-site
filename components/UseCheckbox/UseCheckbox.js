// import { getValueTransition } from "framer-motion/types/animation/utils/transitions";
import classList from "./UseCheckbox.module.scss";
import { useState } from "react";

function UseCheckbox({ label, name, getFieldValue }) {
  const [checkbox, setCheckbox] = useState("");
  const changeHandler = (e) => {
    const { name, value, checked } = e.target;
    setCheckbox(checked);
    getFieldValue({ name: checked });
  };
  return (
    <>
      <div className={classList.container}>
        <input
          name={name}
          id="one"
          type="checkbox"
          onChange={(e) => changeHandler(e)}
        />
        <label for="one">
          <span></span>
          {label}
        </label>
      </div>
    </>
  );
}

export default UseCheckbox;
