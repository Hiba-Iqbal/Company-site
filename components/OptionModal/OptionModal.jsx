import React, {useState} from "react";
import classList from "./OptionModal.module.scss";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";
import Button from "../Button/Button";

const OptionModal = (props) => {
  const { visible, onHide, data: {title, fields, setter} } = props;
  const [value, setValue] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("radio", value)
    // setter(value)
    onHide()
  }
  return (
    <>
      <Modal modal={visible} setModal={onHide}>
        <div className={classList.option_modal_wrapper}>
          <Header style={{ margin: "0 0 30px 0" }}>{title}</Header>
          <form >
            {fields.map(({ type, value }, key) => (
              <div className={classList.radio_group}>
                <input
                  type="radio"
                  id={`id${key}`}
                  name={title}
                  value={value}
                  onChange={(e => setValue(e.target.value))}
                  />
                <label htmlFor={`id${key}`}>{type}</label>
              </div>
            ))}
            <div className={classList.submit_options}>
              <Button
                onClick={onHide}
                style={{ background: "#fff", border: "solid 1px #1d2228" }}
                color="#000"
                type="button">
                Back
              </Button>
              <Button type="submit">Next</Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default OptionModal;
