import React, { useState, useEffect, useRef } from "react";
import classList from "./Statistics.module.scss";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import PropTypes from "prop-types";

const Statistics = (props) => {
  const { count = 247, title = "Title Here", more = "", countingDuration = 10 } = props;
  const [animateCount, setAnimateCount] = useState(0);
  const [test, setTest] = useState(false);

  const wrapper = useRef(null);
  const statisticsRef = useRef(null);


  useEffect(() => {
    if (count && test) {
      let timer = setInterval(() => {
        if (animateCount <= count) {
          setAnimateCount(animateCount++);
        } else {
          clearInterval(timer);
        }
      }, countingDuration);
    }
  }, [test]);

  useEffect(() => {
    const onScroll = () => {
      var bounding = wrapper.current.getBoundingClientRect();
      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        // console.log("In the viewport! :)");
        return (
          statisticsRef.current.className=classList.svg_animate,
          setTest(true)
        )
      } else {
        // console.log("Not in the viewport. :(");
        return (
          statisticsRef.current.className=classList.false,
          setTest(false),
          setAnimateCount(0)
        )
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


  return (
    <div ref={wrapper} className={classList.statistics_wrapper}>
      <div className={classList.inner_items}>
        <div ref={statisticsRef}>
          <svg
            width="78"
            height="80"
            viewBox="0 0 78 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 53.6295C7.29225 61.6781 13.3865 68.263 21.1566 72.1673C28.9267 76.0717 37.8475 77.0316 46.2704 74.8696C54.6932 72.7077 62.0489 67.57 66.978 60.4061C71.9072 53.2422 74.0767 44.5362 73.0856 35.8969C72.0945 27.2577 68.0098 19.2692 61.5863 13.4076C55.1629 7.54609 46.8348 4.20769 38.1412 4.00937C29.4476 3.81105 20.976 6.76621 14.2919 12.3288"
              stroke="white"
              strokeWidth={8}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={92}
              
            />
          </svg>
        </div>
        <div className={classList.content}>
          <Header fontWeight="semi-bold" color="#fff">
            {animateCount + more}
          </Header>
          <Paragraph color="#fff">{title}</Paragraph>
        </div>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  count: PropTypes.number,
  title: PropTypes.string,
  more: PropTypes.string,
  countingDuration: PropTypes.number
};

export default Statistics;
