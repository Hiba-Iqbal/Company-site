import classList from "./GifsBanner.module.scss";
import gifBack from "./../../assets/images/gifs/gitShow1.gif";

const GifsBanner = ({
  content = "DESIGN BRIEF",
  count = 1,
  gifImage = gifBack,
  afterEffect = false,
  stepContent = "The client submits a precise definition of what they require and how they want to see their logo design."
}) => {
  return (
    <div className={classList.gifsMain}>
      <div
        className={`${classList.gifsContainer} ${
          afterEffect && classList.afterEffect
        }`}>
        <div className={classList.gifsBanner}>
          <h4>{content}</h4>
          <img src={gifImage.src} alt="" />
          <h6>{count}</h6>
        </div>
      </div>
      <div className={classList.contentDetails}>
        {stepContent}
      </div>
    </div>
  );
};

export default GifsBanner;
