import classList from "./RatingCard.module.scss";
import profile1 from "../../assets/images/sample/profile.svg";
import comma from "../../assets/images/icons/comma.svg";
import Paragraph from "../Paragraph/Paragraph";
import fiveStare from "../../assets/images/icons/fiveStars.svg";
import { AiFillStar } from "react-icons/ai";

const RatingCard = ({ data }) => {
  return (
    <>
      <div className={classList.rattingCrd}>
        <img className={classList.commas} src={comma.src} alt="" />
        <div className={classList.flex_space_between}>
          <div>
            <Paragraph fontSize={12}>{data.content}</Paragraph>
            <Paragraph>{data.title}</Paragraph>
          </div>
          <div className={classList.profileRateing}>
            <img src={data?.image?.src} alt="" className={classList.profile} />
            <div className={classList.rate}>
              <Paragraph>{data.name}</Paragraph>
              <div className={classList.rating_box}>
                {data.rating.map((v) => (
                  <AiFillStar key={v} size={30} color="orange" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingCard;
