import React from "react";
import classList from "./ProBtnBox.module.scss";

const ProBtnBox = ({
  className: customClass,
  label,
  value,
  quantity,
  id,
  itemSelected,
  setItemSelected,
}) => {
  const handleIncrementPck = (maxQuantity) => {
    //check quantity is not equal to max quantity
    const quantity = getQuantity();
    if (quantity < maxQuantity) {
      //check if pack already exists
      const packExists = itemSelected.find((item) => item.id === id);
      if (packExists) {
        //if pack exists, increment quantity
        const newItemSelected = itemSelected.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        setItemSelected(newItemSelected);
      } else {
        //if pack does not exist, add pack
        const newItemSelected = [
          ...itemSelected,
          { id, label, value, quantity: 1 },
        ];
        setItemSelected(newItemSelected);
      }
    }
  };
  const handleDecrementPck = () => {
    const quantity = getQuantity();
    if (quantity <= 0) {
      // if quantity is 0, remove pack
      const newItemSelected = itemSelected.filter((item) => item.id !== id);
      setItemSelected(newItemSelected);
    } else {
      // if quantity is not 0, decrement quantity
      const newItemSelected = itemSelected.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      setItemSelected(newItemSelected);
    }
  };

  const getQuantity = () => {
    const packExists = itemSelected.find((item) => item.id === id);
    if (packExists) {
      return packExists.quantity;
    }
    return 0;
  };

  const checkMaxQuantity = (maxQuantity) => {
    const quantity = getQuantity();
    if (quantity >= maxQuantity) {
      return true;
    }
    return false;
  };

  const checkMinQuantity = (minQuantity) => {
    const quantity = getQuantity();
    if (quantity <= minQuantity) {
      return true;
    }
    return false;
  };

  return (
    <div className={`${classList.BtnWrapper} ${customClass}`}>
      <div
        className={`${classList.center} ${classList.labelWrapper} ${classList.tooltip}`}>
        {label}
        <span className={classList.tooltiptext}>{label}</span>
      </div>
      <div className={classList.actionsWrapper}>
        <button
          disabled={checkMinQuantity(0)}
          onClick={handleDecrementPck}
          className={`${classList.actionBtn} ${
            checkMinQuantity(0) && classList.cursorDisabled
          }`}>
          <div>-</div>
        </button>
        <label>{getQuantity()}</label>
        <button
          disabled={checkMaxQuantity(20)}
          onClick={() => handleIncrementPck(20)}
          className={`${classList.actionBtn} ${
            checkMaxQuantity(20) && classList.cursorDisabled
          }`}>
          <div>+</div>
        </button>
      </div>
    </div>
  );
};

export default ProBtnBox;
