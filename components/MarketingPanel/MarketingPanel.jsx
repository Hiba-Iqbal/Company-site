import classList from "./MarketingPanel.module.scss";
import Button from "../Button/Button";
import Header from "../Header/Header";

const MarketingPanel = ({}) => {
  return (
    <>
      <div className={classList.marketingPanel}>
        <span>
          <Header color="white">
            Wondering how to put a stop to your digital marketing miseries?
          </Header>
          <div className={classList.marketingButton}>
            <Button>Lets's Get Started</Button>
            <Button>Call Now +926142085</Button>
          </div>
        </span>
      </div>
    </>
  );
};

export default MarketingPanel;
