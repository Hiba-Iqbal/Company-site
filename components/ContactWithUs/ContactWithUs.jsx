import { useState } from "react";
import Form from "../Form/Form";
import classList from "./ContactWithUs.module.scss";
import { AiFillGift } from "react-icons/ai";

const ContactWithUs = () => {
  const [form, setForm] = useState(false);
  return (
    <div
      className={`${classList.contact_with_us_wrapper} ${
        form ? classList.show_form : ""
      }`}
    >
      <div className={classList.fixed_form_wrapper}>
        {/* <button onClick={()=> setForm(!form)} className={classList.animated_action}>GET 70% DISCOUNT </button> */}
        <div className={classList.animated_action}>
          <AiFillGift size="50px" style={{background: "#B72A12", heigt: "100%", padding: "10px"}} />
          <div >GET  <span style={{color: "#B72A12"}}>70%</span> DISCOUNT</div>
        </div>
        <Form
          description={""}
          heading={"Get In Touch"}
          buttonText={"Send Message"}
          className={classList.formHeading}
          headerClass={classList.formHeader}
        />
      </div>
    </div>
  );
};

export default ContactWithUs;
