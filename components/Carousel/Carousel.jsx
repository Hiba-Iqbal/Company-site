import classList from "./Carousel.module.scss";
import Slider from "react-slick";
import Section from "../Section/Section";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const Carousel = (props) => {
  const {
    children,
    showDots = true,
    infinite = true,
    showArrows = false,
    fade = false,
    autoplay = false,
    speed = 500,
    slidesToShow = 1,
    slidesToScroll = 1,
  } = props;
  const settings = {
    dots: showDots,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: showArrows,
    fade: fade,
    autoplay: autoplay,
  };

  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  );
};

Carousel.propTypes = {
  showDots: Boolean,
  infinite: Boolean,
  showArrows: Boolean,
  fade: Boolean,
  autoplay: Boolean,
  speed: Number,
  slidesToShow: Number,
  slidesToScroll: Number,
};

export default Carousel;
