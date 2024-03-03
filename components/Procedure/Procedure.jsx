import React, { useState, useRef, useEffect } from "react";
import classList from "./Procedure.module.scss";
import Section from "../Section/Section";
import Header from "../../components/Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import ideation from "../../assets/images/ideation.png";
import IdeationProgressSVG from "../IdeationProgressSVG/IdeationProgressSVG";
import InnerContainer from "../InnerContainer/InnerContainer";
import { motion, AnimatePresence } from "framer-motion";
import finalization from "../../assets/images/sample/finalization.webp";
import research from "../../assets/images/sample/research.webp";
import revisions from "../../assets/images/sample/revisions.webp";
import design from "../../assets/images/sample/design.webp";
import development from "../../assets/images/sample/development.webp";
import Image from "next/image";

const data = [
  {
    heading: "Research",
    img: research,
    para: "Once your order is confirmed, our project management team gets started on research to evaluate the industry andcompetitors of your brand. This allows them to wireframe something that is not only befitting for your business model but also effectively communicates with your audience.",
  },
  {
    heading: "Ideation",
    img: ideation,
    para: "Once our research is completed, our experts draft out the basic design ideas. These concepts are simply blueprints or mockups which are a first step towards creating exceptional web experiences that will communicate and connect the web visitors with your brand.",
  },
  {
    heading: "Desgin",
    img: design,
    para: "Once the basic version has been created, the head designers will work on converting your blueprints into finished design layouts. In case you are unable to provide us with specific content, we will use dummy content to finish the layout and our content team will work on creating content for your website.",
  },
  {
    heading: "Revision",
    img: revisions,
    para: "You might come with different ideas or not agree with the overall experience that we craft: hence we will give you the freedom to get your website customized  just according to your preference. Your  feedback will not only be valued but also implemented.",
  },
  {
    heading: "Development",
    img: development,
    para: "After the basic design has been created and approved by you in regards to layout and basic structure of the website, our development team will work on developing a stunning website keeping your brand and industry in mind. We work on colors that match and reflect your brand’s logo so they both can complement each other.",
  },
  {
    heading: "Finalization",
    img: finalization,
    para: "Once you are 100% satisfied with your design, content, functionalities and imagery of the website, we will finalize your website. Our team of experts will go ahead with the final launch of your website and handover the project to you after the official closure.",
  },
];

const AnimatedContent = ({ heading, para }) => {
  return (
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
      <Header fontSize={24} fontWeight="bold">
        {heading}
      </Header>
      <Paragraph style={{ marginBottom: "50px" }}>{para}</Paragraph>
    </motion.div>
  );
};
const AnimatedImage = ({ image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}>
      <Image
        src={image.src}
        width={350}
        height={350}
        objectFit="contain"
        alt=""
      />
    </motion.div>
  );
};
const Procedure = () => {
  const [step, setStep] = useState(0);
  var interval = useRef(null);
  useEffect(() => {
    interval.current = setInterval(() => {
      setStep((state) => ++state % 6);
    }, 3000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const getStepImage = (step) => {
    return data[step].img;
  };

  return (
    <div id="howitworks">
      <Section>
        <Header
          fontWeight="bold"
          style={{ margin: "20px auto", width: "max-content" }}>
          How it works?
        </Header>
        <div className={classList.container}>
          <AnimatePresence exitBeforeEnter>
            {step === 0 && <AnimatedImage key={0} image={data[step].img} />}
            {step === 1 && <AnimatedImage key={1} image={data[step].img} />}
            {step === 2 && <AnimatedImage key={2} image={data[step].img} />}
            {step === 3 && <AnimatedImage key={3} image={data[step].img} />}
            {step === 4 && <AnimatedImage key={4} image={data[step].img} />}
            {step === 5 && <AnimatedImage key={5} image={data[step].img} />}
          </AnimatePresence>
          <div className={classList.content}>
            <div className={classList.procedure_wrapper}>
              <InnerContainer>
                <AnimatePresence exitBeforeEnter>
                  {step === 0 && (
                    <AnimatedContent
                      key={0}
                      heading={data[0].heading}
                      para={data[0].para}
                    />
                  )}
                  {step === 1 && (
                    <AnimatedContent
                      key={1}
                      heading={data[1].heading}
                      para={data[1].para}
                    />
                  )}
                  {step === 2 && (
                    <AnimatedContent
                      key={2}
                      heading={data[2].heading}
                      para={data[2].para}
                    />
                  )}
                  {step === 3 && (
                    <AnimatedContent
                      key={3}
                      heading={data[3].heading}
                      para={data[3].para}
                    />
                  )}
                  {step === 4 && (
                    <AnimatedContent
                      key={4}
                      heading={data[4].heading}
                      para={data[4].para}
                    />
                  )}
                  {step === 5 && (
                    <AnimatedContent
                      key={5}
                      heading={data[5].heading}
                      para={data[5].para}
                    />
                  )}
                </AnimatePresence>
                <div className={classList.procedure_svg}>
                  <IdeationProgressSVG setStep={setStep} step={step} />
                </div>
              </InnerContainer>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Procedure;
