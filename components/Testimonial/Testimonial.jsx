import classList from "./Testimonial.module.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";

const Testimonial = ({ profilePhoto, title, clientName, status, children }) => {
  return (
    <>
      <div>
        <div className={classList.testimonialMain}>
          <div className={classList.content}>
            <Header>{title}</Header>
            <span className={classList.profileBox}>
              <img src={profilePhoto?.src} alt="" />
              <span className={classList.hoverPlay}>
                <AiFillPlayCircle color="white" size={50} />
              </span>
            </span>
            <Paragraph>{children}</Paragraph>
            <Header>{clientName}</Header>
            <Paragraph>{status}</Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
