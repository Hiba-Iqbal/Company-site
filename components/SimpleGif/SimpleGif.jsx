import classList from "./SimpleGif.module.scss";
import gifBack from "./../../assets/images/gifs/gitShow1.gif";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";

const SimpleGif = ({
  gifImage = gifBack,
  stepHeadContent = "IMPECCABLE DESIGNS  ",
  stepParaContent = "Revolutionizing your brand with immaculate designs  ",
}) => {
  return (
    <div className={classList.gifsMain}>
      <div className={`${classList.gifsContainer}`}>
        <div className={classList.gifsBanner}>
          <img src={gifImage.src} alt="" />
        </div>
      </div>
      <div className={classList.contentDetails}>
        <Header fontWeight="semi-bold" variant="h3">{stepHeadContent}</Header>
        <Paragraph>{stepParaContent}</Paragraph>
      </div>
    </div>
  );
};

export default SimpleGif;
