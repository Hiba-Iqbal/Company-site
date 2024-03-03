import React from "react";
import { AiOutlineMore as Arrow } from "react-icons/ai";
import { HiChevronLeft } from "react-icons/hi";
import classList from "./Drawer.module.scss";

const Drawer = ({
  children,
  addLoader = false,
  showDrawer,
  handleDrawer,
  classname,
}) => {
  return (
    <>
      <div className={classList.open_drawer}>
        <button className={classList.drawer_show_btn} onClick={handleDrawer}>
          <Arrow />
        </button>
      </div>

      <div
        className={`${classList.drawer_wrapper} ${
          showDrawer && classList.show_drawer
        } ${classList.classname}`}>
        {addLoader && (
          <div className={classList.is_loader}>
            <Spin />
          </div>
        )}

        <button className={classList.drawer_close_btn} onClick={handleDrawer}>
          <HiChevronLeft />
        </button>

        <div className={classList.drawer_items}>{children}</div>
      </div>
    </>
  );
};

export default Drawer;
