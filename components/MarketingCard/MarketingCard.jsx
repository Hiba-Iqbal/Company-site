import classList from "./MarketingCard.module.scss";
const MarketingCard = ({
  backgroundColor = "#ffffff",
  icon,
  iconSize = 50,
  content = "Test",
  customClass,
  inLineStyle = "",
  customStyle = {},
  style,
}) => {
  return (
    <>
      <div
        className={`${classList.marketingCard} ${customClass}`}
        style={{ backgroundColor, ...style }}>
        <img
          src={icon.src}
          alt=""
          style={{ ...customStyle, height: `${iconSize}px` }}
        />
        <p className={classList.para}>{content}</p>
      </div>
    </>
  );
};

export default MarketingCard;
