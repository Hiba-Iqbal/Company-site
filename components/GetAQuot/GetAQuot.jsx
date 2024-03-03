import React, { useState } from "react";
import classList from "./GetAQuot.module.scss";
import Section from "../Section/Section";
import Button from "../../components/Button/Button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import OptionModal from "../OptionModal/OptionModal";
import CustomSelect from "../CustomSelect/CustomSelect";
import Header from "../Header/Header";
import {
  businessOption,
  industryOptions,
  budgetOption,
} from "../../utils/Data/globalVariables";
import { post } from "../../utils/Data/helpers";
import ShowMessage from "../ShowMessage/ShowMessage";

const GetAQuot = (props) => {
  const { isSubmitted, setIsSubmitted, type, setParentModal } = props;

  const [showModal, setShowModal] = useState(false);
  const [throwOption, setThrowOptions] = useState([]);
  const [typeOfOptions, setTypeOfOptions] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const [modal, setModal] = useState(null);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "note") {
      setNote(value);
    }
  };

  const formData = [
    {
      type: "business",
      title: "What type of business is this for",
      setter: setBusinessName,
      fields: [
        {
          type: "personal project",
          value: "personal project",
        },
        {
          type: "my project",
          value: "my project",
        },
        {
          type: "your project",
          value: "your project",
        },
      ],
    },
    {
      type: "industry",
      title: "What industry do you operate for",
      setter: setIndustry,
      fields: [
        {
          type: "personal industry",
          value: "personal industry",
        },
        {
          type: "my industry",
          value: "my industry",
        },
        {
          type: "your industry",
          value: "your industry",
        },
      ],
    },
    {
      type: "budget",
      title: "What s your estimated budget or this project",
      setter: setBudget,
      fields: [
        {
          type: "Less than $500",
          value: "Less than $500",
        },
        {
          type: "$500 - $999",
          value: "$500 - $999",
        },
        {
          type: "$1000 - $1999",
          value: "$1000 - $1999",
        },
        {
          type: "$2000 - $2999",
          value: "$2000 - $2999",
        },
        {
          type: "$3000 - $3999",
          value: "$3000 - $3999",
        },
        {
          type: "$4000 - $4999",
          value: "$4000 - $4999",
        },
        {
          type: "$5000 or more",
          value: "$5000 or more",
        },
      ],
    },
  ];

  const setOption = (type) => {
    if (type === "business") {
      setThrowOptions(businessOption);
      setTypeOfOptions("What type of business is this for");
    } else if (type === "industry") {
      setThrowOptions(industryOptions);
      setTypeOfOptions("What industry do you operate for");
    } else if (type === "budget") {
      setThrowOptions(budgetOption);
      setTypeOfOptions("What s your estimated budget or this project");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const data = {
    //     name,
    //     email,
    //     phone,
    //     businessName,
    //     message: note,
    //     industry,
    //     budget,
    //   };
    //   const res = await post("/quotation", data);
    //   if (res.status) {
    //     setIsSubmitted(true);
    //     setParentModal(false);
    //   }
    //   // console.log("res", res);
    // } catch (error) {
    //   setParentModal(false);
    //   setIsSubmitted(false);
    //   console.log(error);
    // }
  };

  const filteredFormData = formData.find((el) => el.type === modal);

  return (
    <div className={`${classList.get_a_quot_wrapper}`}>
      <Section>
        <form
          // onSubmit={handleFormSubmit}
          autoComplete="off"
          className={`${classList.form_wrapper} ${
            type === "light" ? classList.bg_light : ""
          }`}>
          <Header
            style={{
              textAlign: "center",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
            color="#fff">
            {" "}
            Get a quote{" "}
          </Header>
          <div className={classList.form_row}>
            <div className={`${classList.flex_cols} ${classList.input_styles}`}>
              <input
                value={name}
                onChange={(e) => inputChangeHandler(e)}
                name="name"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className={`${classList.flex_cols} ${classList.input_styles}`}>
              <input
                value={email}
                onChange={(e) => inputChangeHandler(e)}
                name="email"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className={classList.form_row}>
            <div className={`${classList.flex_cols} ${classList.input_styles}`}>
              <input
                value={phone}
                onChange={(e) => inputChangeHandler(e)}
                name="phone"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div
              // onClick={() => {
              //   setShowModal(true), setModal("business");
              // }}
              className={`${classList.flex_cols} ${classList.select_typed}`}>
              <CustomSelect
                placeholder="Business"
                type="light"
                Options={businessOption}
                onSelect={(e) => setBusinessName(e)}
              />
            </div>
          </div>
          <div className={classList.form_row}>
            <div className={`${classList.flex_cols} ${classList.select_typed}`}>
              <CustomSelect
                placeholder="Industry"
                type="light"
                Options={industryOptions}
                onSelect={(e) => setIndustry(e)}
              />
            </div>
            <div className={`${classList.flex_cols} ${classList.select_typed}`}>
              <CustomSelect
                placeholder="Budget"
                type="light"
                onSelect={(e) => setBudget(e)}
                Options={budgetOption}
              />
            </div>
          </div>
          <div className={classList.form_row}>
            <div className={`${classList.flex_cols} ${classList.input_styles}`}>
              <textarea
                placeholder="Enter Message Here"
                name="note"
                id=""
                cols="10"
                rows="10"
                value={note}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
          </div>
          <div className={classList.form_row}>
            <div
              className={`${classList.flex_cols} ${classList.checkbox_typed}`}>
              <input
                style={{ cursor: "pointer" }}
                onChange={(e) => setPrivacyAgreed(e.target.checked)}
                type="checkbox"
                id="agree"
                name={"agree"}
                value={""}></input>
              <label htmlFor="agree" style={{ cursor: "pointer" }}>
                By clicking submit you agree to our Privacy policy
              </label>
            </div>
          </div>
          <div className={classList.form_row}>
            <div
              className={`${classList.flex_cols} ${classList.button_styles}`}>
              {type === "light" ? (
                <Button hover={true} type="submit">
                  Submit
                </Button>
              ) : (
                <Button
                  hoverLight={true}
                  style={{ background: "#fff" }}
                  color="#000"
                  type="submit">
                  Submit
                </Button>
              )}
            </div>
          </div>
        </form>
      </Section>
      {modal && (
        <OptionModal
          title={typeOfOptions}
          options={throwOption}
          visible={showModal}
          data={filteredFormData}
          onHide={() => setModal(null)}
        />
      )}
      {isSubmitted && (
        <ShowMessage
          modal={isSubmitted}
          setModal={setIsSubmitted}
          infoType="success">
          Successfully submitted
        </ShowMessage>
      )}
    </div>
  );
};

export default GetAQuot;
