import React from 'react';
import useInView from "react-cool-inview";
import dynamic from "next/dynamic";
const ShowCase = dynamic(() => import("./../ShowCase/ShowCase"));

const ShowCaseWrapper = ({data, type,backgroundColor,btnColor}) => {
    const { observe, inView } = useInView({
        onEnter: ({ unobserve }) => unobserve(), // only run once
      });
    //   console.log("inviewww", inView)
  return (
      <div ref={observe}>
          {inView &&  <ShowCase data={data} type={type} backgroundColor={backgroundColor} btnColor={btnColor} />}
      </div>
  )
};

export default ShowCaseWrapper;
