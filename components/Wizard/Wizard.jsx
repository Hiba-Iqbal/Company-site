import React, { useState } from "react";
import classList from "./Wizard.module.scss";
import Button from "../Button/Button";
import Header from "../Header/Header";
import optimize from "../../assets/images/sample/optimize.png";
import { post, trigger } from "../../utils/Data/helpers";
import dynamic from "next/dynamic";
import discount from "../../assets/images/sample/discount.svg";
import backButton from "../../assets/images/icons/backButton.png";
import WizardStepsSVG from "../WizardStepsSVG/WizardStepsSVG";
const Modal = dynamic(() => import("../../components/Modal/Modal"));
const ShowMessage = dynamic(() =>
  import("../../components/ShowMessage/ShowMessage")
);

const DetailForm = ({ submit, prevStep, title, steps }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const validate = Boolean(name) && Boolean(email) && Boolean(phone);
  console.log(validate, "checking logicc");
  const handleName = (e) => {
    // check name with regex
    let result = e.target.value.match(/^[a-zA-Z ]+$/i);
    if (result) {
      setName(e.target.value);
      console.log(name, "name");
    }
  };
  return (
    <>
      <div className={classList.wizard}>
        <div className={classList.gridWizard}>
          <div className={classList.cheel}>
            <img src={optimize.src} alt="" />
          </div>
          <div className={classList.contentWrepper}>
            <Header fontWeight="semi-bold" fontSize={20}>
              {title}
            </Header>
            <div className={classList.inputs}>
              <input
                value={name}
                onChange={handleName}
                name="name"
                type="text"
                placeholder="Enter Name"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Enter Email"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                type="number"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>
        <div className={classList.offerimg}>
          {/* <img src={discount.src} alt="" /> */}
        </div>
        <div className={classList.submit_action}>
          <div className={classList.bacButton}>
            {steps === 1 ? (
              ""
            ) : (
              <img src={backButton.src} alt="" onClick={prevStep} />
            )}
          </div>
          <WizardStepsSVG step={steps} />
          <Button
            hover={validate}
            backgroundColor={!validate && "gray"}
            disabled={!validate}
            customClass={`${!validate && classList.buttonDisabled}`}
            onClick={() => submit({ fullName: name, email, phone })}>
            Active Now
          </Button>
        </div>
      </div>
    </>
  );
};

const WizardFrom = ({
  data,
  steps,
  nextStep,
  prevStep,
  title = "",
  onHide,
  submit,
  setSteps,
}) => {
  const [val, setVal] = useState(data.value);
  const nextSetter = () => {
    data.setter(val);
    nextStep();
  };

  return (
    <>
      <div className={classList.wizard}>
        <div className={classList.gridWizard}>
          <div className={classList.cheel}>
            <img src={optimize.src} alt="" />
          </div>
          <div className={classList.contentWrepper}>
            <Header
              style={{ marginBottom: 30 }}
              fontWeight="semi-bold"
              fontSize={22}>
              {title}
            </Header>
            <div className={classList.scrol}>
              {data.fields.map((v, i) => (
                <label className={classList.container}>
                  {v.type}
                  <input
                    onChange={(e) => setVal(e.target.value)}
                    value={v.value}
                    type="radio"
                    name={data.type}
                  />
                  <span className={classList.checkmark}></span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className={classList.submit_action}>
          <div className={classList.bacButton}>
            {steps === 1 ? (
              ""
            ) : (
              <img src={backButton.src} alt="" onClick={prevStep} />
            )}
          </div>
          <WizardStepsSVG step={steps} setStep={setSteps} />
          {/* <Button
            onClick={steps === 1 ? onHide : prevStep}
            hoverLight={true}
            color="#000"
            backgroundColor="#fff"
            style={{ border: "solid 1px #000000" }}>
            {steps === 1 ? "Cancel" : "Back"}
          </Button> */}
          <Button
            disabled={!Boolean(val)}
            onClick={nextSetter}
            type="button"
            hover={Boolean(val)}
            backgroundColor={!Boolean(val) && "gray"}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

const Wizard = (props) => {
  const { show, onHide, setThankYou } = props;
  const [steps, setSteps] = useState(1);
  const [business, setBusiness] = useState(null);
  const [industry, setIndustry] = useState(null);
  const [budget, setBudget] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => {
    setSteps((steps) => steps + 1);
  };
  const prevStep = () => {
    setSteps((steps) => steps - 1);
  };
  // const thankYouModal = () => {
  //   return ;
  // };

  const submit = async (details) => {
    // try {
    //   const data = {
    //     businessType: business,
    //     operationType: industry,
    //     budget,
    //     ...details,
    //     fullName: `${details.fullName} 70%`,
    //   };
    //   console.log("data", data);
    //   const res = await post("/wizard", data);
    //   trigger({
    //     action: "lead generated",
    //     category: "generate_lead",
    //     label: "service sold",
    //     value: data,
    //   });
    //   // if (res.status) {
    //   //   setIsSubmitted(true);
    //   // }
    //   if (res.status) {
    //     onHide();
    //     setThankYou({
    //       show: true,
    //       name: details.fullName,
    //     });
    //   }
    //   // console.log("res", res);
    // } catch (error) {
    //   console.log(error);
    //   setIsSubmitted(false);
    //   setTimeout(() => {
    //     onHide();
    //   }, 1000);
    // }
  };

  const data = [
    {
      type: "business",
      title: "What type of business is this for",
      setter: setBusiness,
      value: business,
      fields: [
        {
          type: "Personal project",
          value: "ersonal project",
        },
        {
          type: "Sole trader/self-employed",
          value: "Sole trader/self-employed",
        },
        {
          type: "Small business (1 - 9 employees) ",
          value: "Small business (1 - 9 employees)",
        },
        {
          type: "Medium Business (10 - 29 employees) ",
          value: "Medium business (10 - 29 employees)",
        },
        {
          type: "Large Business (30 - 99 employees) ",
          value: "Large business (30 - 99 employees)",
        },
        {
          type: "Extra Large Business (100 or more employees) ",
          value: "Extra Large business (100 or more employees)",
        },
        {
          type: "Charity/non-profit ",
          value: "Charity/non-profit",
        },
      ],
    },
    {
      type: "industry",
      title: "What industry do you operate for",
      setter: setIndustry,
      value: industry,
      fields: [
        {
          type: "Business services",
          value: "Business services",
        },
        {
          type: "Creative industries",
          value: "Creative industries",
        },
        {
          type: "Entertainment & events",
          value: "Entertainment & events",
        },
        {
          type: "Financial services",
          value: "Financial services",
        },
        {
          type: "Health & fitness",
          value: "Health & fitness",
        },
        {
          type: "Home services",
          value: "Home services",
        },
      ],
    },
    {
      type: "budget",
      title: "What s your estimated budget or this project",
      setter: setBudget,
      value: budget,
      fields: [
        {
          type: "Less than $500",
          value: "Less than $500",
        },
        {
          type: "$500 - $ 999",
          value: "my budget",
        },
        {
          type: "$1,000 - $1,999",
          value: "$1,000 - $1,999",
        },
        {
          type: "$3,000 - $4,999",
          value: "$3,000 - $4,999",
        },
        {
          type: "$5,000 or more",
          value: "$5,000 or more",
        },
      ],
    },
  ];
  return (
    <Modal modal={show} setModal={onHide}>
      <div className={classList.wizard_form_wrapper}>
        <span className={classList.close} onClick={onHide}>
          X
        </span>
        {steps === 1 && (
          <WizardFrom
            title="What type of business is this for?"
            steps={steps}
            setSteps={setSteps}
            data={data[0]}
            prevStep={prevStep}
            nextStep={nextStep}
            onHide={onHide}
          />
        )}
        {steps === 2 && (
          <WizardFrom
            title="What industry do you operate in?"
            steps={steps}
            setSteps={setSteps}
            data={data[1]}
            prevStep={prevStep}
            nextStep={nextStep}
            onHide={onHide}
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
        {steps === 3 && (
          <WizardFrom
            title="What is your estimated budget for this project?"
            steps={steps}
            data={data[2]}
            setSteps={setSteps}
            prevStep={prevStep}
            nextStep={nextStep}
            onHide={onHide}
            submit={submit}
          />
        )}
        {steps === 4 && (
          <DetailForm
            title="Enter Your Details"
            steps={steps}
            setSteps={setSteps}
            prevStep={prevStep}
            submit={submit}
          />
        )}
      </div>
    </Modal>
  );
};

export default Wizard;
