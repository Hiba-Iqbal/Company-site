import React from "react";
import CustomPakage from "../../components/CustomPakage/CustomPakage";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import BulletList from "../../components/BulletList/BulletList";
import GifsBanner from "../../components/GifsBanner/GifsBanner";
import classList from "./index.module.scss";
import Section from "../../components/Section/Section";
import StepsGifsBanners from "../../components/StepsGifsBanners/StepsGifsBanners";
import SimpleGif from "../../components/SimpleGif/SimpleGif";
import CustomerFeedBackGifsBanner from "../../components/CustomerFeedBackGifsBanner/CustomerFeedBackGifsBanner";
import UseInput from "../../components/UseInput/UseInput";
import UseForm, { formMethodsObject } from "../../components/UseForm/UseForm";
import Button from "../../components/Button/Button";

const index = () => {
  const formRef = React.useRef(null);
  let formDataFromBackend = {
    name: "Ali",
    email: "email@gmail.com",
    password: "123456",
    phone: "0322222222",
    link: "google.com",
  };

  const resetHandler = () => {
    formMethodsObject.resetForm();
  };

  const setHandler = () => {
    formMethodsObject.setFormData(formDataFromBackend);
  };

  const getHandler = () => {
    console.log(formMethodsObject.getFormData());
  };

  const getFieldHandler = () => {
    console.log(formMethodsObject.getFieldValue("name"));
  };
  const setFieldHandler = () => {
    const obj = {
      name: "YOU HAVE CHANGED ",
    };
    formMethodsObject.setFieldValue(obj);
  };

  const getFieldValuesHandler = () => {
    console.log(formMethodsObject.getFieldValues(["name", "email"]));
  };

  const resetFieldHanlder = () => {
    formMethodsObject.resetField("name");
  };

  const scrollToFieldHandler = () => {
    formMethodsObject.scrollToField("name");
  };

  const errorHandler = () => {
    formMethodsObject.displayFlex("name");
  };

  return (
    <>
      {/* <Section>
        <StepsGifsBanners />
      </Section>
      <Section>
        <CustomerFeedBackGifsBanner />
      </Section> */}
      {/* <Button onClick={scrollToFieldHandler}>Scroll to Name</Button>
      <Section>
        <UseInput
          getFieldValue={(e) => {
            console.log(e);
          }}
          placeholder="Enter Your Link"
        />
      </Section>
      <Section>
        <UseInput
          getFieldValue={(e) => {
            console.log(e);
          }}
          placeholder="Enter Your Link"
        />
      </Section>
      <Section>
        <UseInput
          getFieldValue={(e) => {
            console.log(e);
          }}
          placeholder="Enter Your Link"
        />
      </Section> */}

      {/* FORM ELEMENT */}
      {/* <Section>
        <UseForm
          form={formRef}
          onFinish={(e) => {
            console.log("I AM IN FORM", e);
          }}>
          <UseInput
            required={true}
            error={true}
            placeholder="Enter Your Email"
            name="email"
          />
          <UseInput error={true} placeholder="Enter Your Name" name="name" />
          <UseInput
            required={true}
            placeholder="Enter Your Phone"
            name="phone"
          />
          <UseInput placeholder="Enter Your Link" name="link" />
          <Button>Submit</Button>
        </UseForm>
        <Button onClick={errorHandler}>Show Red</Button>
        <Button onClick={resetHandler}>Reset</Button>
        <Button onClick={getHandler}>Get</Button>
        <Button onClick={setHandler}>Set</Button>
        <Button onClick={getFieldHandler}>Get Name</Button>
        <Button onClick={setFieldHandler}>Set FieldValue</Button>
        <Button onClick={getFieldValuesHandler}>getFieldValues</Button>
        <Button onClick={resetFieldHanlder}>reset Name</Button>
      </Section> */}

      
    </>
  );
};

export default index;
