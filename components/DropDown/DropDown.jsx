import React, { useState } from "react";
import StyledButton from "../StyledButton/StyledButton";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Header from "../Header/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Paragraph from "../Paragraph/Paragraph";
import classList from "./DropDown.module.scss";
var setInitialState = (options, pathname) => {
  var navigatedTo = options.find(({ to }) => to === pathname);
  return navigatedTo.name;
};
var isActive = (options, pathname) => {
  return options.some(({ to }) => to === pathname);
};
const DropdownOptionsContainer = ({ children, ...restProps }) => {
  return (
    <div {...restProps} className={classList.dropdownOptionsContainer}>
      {children}
    </div>
  );
};
const DropdownOption = ({
  fontWeight = "medium",
  fontSize,
  color,
  optionBackground,
  optionHoverBackground,
  onSelect,
  setValue,
  option: { name, value, to },
  pathname,
  setNav,
}) => {
  var [hover, setHover] = useState(false);
  return (
    <Link href={to ? to : "#"}>
      <div
        onClick={() => {
          setValue(name);
          onSelect(value);
          setNav && setNav(false);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={classList.dropdownOption}
        style={{
          background:
            pathname === to
              ? optionHoverBackground
              : hover
              ? optionHoverBackground
              : optionBackground,
        }}>
        <Paragraph
          fontWeight={fontWeight}
          fontSize={12}
          style={{ transition: "color 300ms ease-in-out", marginBottom: 0 }}
          color={pathname === to ? "white" : hover ? "white" : color}>
          {name}
        </Paragraph>
      </div>
    </Link>
  );
};
const Dropdown = ({
  title = "dropdown",
  options = [],
  fontSize,
  fontWeight = "medium",
  color,
  titleBackground = "transparent",
  optionBackground = "white",
  optionHoverBackground = "#1d2228",
  onSelect,
  iconColor = "black",
  setNav,
}) => {
  var [expand, setExpand] = useState(false);
  let { pathname } = useRouter();
  var [value, setValue] = useState(
    isActive(options, pathname) ? setInitialState(options, pathname) : title
  );
  // console.log(pathname);
  isActive(options, pathname);
  return (
    <div className={classList.dropdown}>
      <StyledButton
        onClick={() => {
          setExpand((prevState) => !prevState);
        }}
        // onMouseEnter={() => setExpand(true)}
        // onMouseLeave={() => setExpand(false)}
        // onMouseLeave={() => setExpand(false)}
        onBlur={() => {
          setTimeout(() => {
            setExpand(false);
          }, 200);
        }}
        style={{ margin: 0, background: titleBackground }}>
        <Paragraph
          fontWeight="medium"
          style={{
            color: isActive(options, pathname) ? optionHoverBackground : color,
            marginBottom: 0,
          }}>
          {isActive(options, pathname) ? value : title}
        </Paragraph>
        {!expand ? (
          <HiChevronDown
            color={
              isActive(options, pathname) ? optionHoverBackground : iconColor
            }
            size={"20px"}
          />
        ) : (
          <HiChevronUp
            color={
              isActive(options, pathname) ? optionHoverBackground : iconColor
            }
            size={"20px"}
          />
        )}
      </StyledButton>
      <AnimatePresence exitBeforeEnter>
        {expand && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            className="dropdown-wrapper">
            <DropdownOptionsContainer>
              {options.map((option) => (
                <DropdownOption
                  setNav={setNav}
                  optionHoverBackground={optionHoverBackground}
                  optionBackground={optionBackground}
                  fontSize={fontSize}
                  color={color}
                  onSelect={onSelect}
                  setValue={setValue}
                  option={option}
                  key={option.name}
                  fontWeight={fontWeight}
                  pathname={pathname}
                />
              ))}
            </DropdownOptionsContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Dropdown;
