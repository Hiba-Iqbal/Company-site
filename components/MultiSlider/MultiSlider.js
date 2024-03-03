import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import classList from "./MultiSlider.module.scss";
const MultiSlider = (props) => {
  const {
    showDots = true,
    autoPlay = false,
    swipe = false,
    arrows = false,
    infinite = true,
    children,
    mobile = 1,
    desktop = 5,
    tablet = 4,
    superLargeDesktop = 6
  } = props;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2800, min: 1601 },
      items: superLargeDesktop,
    },
    desktop: {
      breakpoint: { max: 1600, min: 992 },
      items: desktop,
    },
    tablet: {
      breakpoint: { max: 991, min: 541 },
      items: tablet,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: mobile,
    },
  };

  return (
    <Carousel
      autoPlay={autoPlay}
      arrows={arrows}
      showDots={showDots}
      swipeable={swipe}
      infinite={infinite}
      responsive={responsive}>
      {children}
    </Carousel>
  );
};

export default MultiSlider;
