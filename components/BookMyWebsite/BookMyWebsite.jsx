import Button from "../Button/Button";
import classList from "./BookMyWebsite.module.scss";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";

const BookMyWebsite = () => {
  return (
    <>
      <div className={classList.bookMyWebsite}>
        <Section padding="30px 0px">
          <span className={classList.bookMyWebsiteGrid}>
            <div className={classList.content}>
              <Header color="white" fontWeight="sami-bold" fontSize="25">
                Wondering how to put a stop to your digital marketing miseries?
                Try BOOKMYWEBSITES.
              </Header>
            </div>
            <div className={classList.contentButtton}>
              <Button>Let's Get Started</Button>
              <Button>Call Now +1805472123</Button>
            </div>
          </span>
        </Section>
      </div>
    </>
  );
};

export default BookMyWebsite;
