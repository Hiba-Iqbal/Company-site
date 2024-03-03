import React from "react";
import classNameList from "./IdeationProgressSVG.module.scss";

const IdeationProgressSVG = ({setStep, step}) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695.22 54.64">
        <defs></defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g className={classNameList.rounder} onClick={() => setStep(0)} >
              <rect
                className={`${classNameList.cls1}`}
                x="20"
                y="13"
                width="622"
                height="2"
              />
              <path
                className={`${classNameList.cls2}`}
                style={{fill: step === 0 && "#272a3d" }}
                d="M13.5,0h0A13.49,13.49,0,0,1,27,13.5h0A13.49,13.49,0,0,1,13.5,27h0A13.49,13.49,0,0,1,0,13.5H0A13.49,13.49,0,0,1,13.5,0Z"
              />
              <path
              className={`${classNameList.cls3}`}
              d="M13.5,8h0A5.5,5.5,0,0,1,19,13.5h0A5.5,5.5,0,0,1,13.5,19h0A5.5,5.5,0,0,1,8,13.5H8A5.5,5.5,0,0,1,13.5,8Z"
            />
            </g>
            
            <text
              className={`${classNameList.cls4}`}
              transform="translate(0 50.64)"
            >
              Reseach
            </text>
            <g className={classNameList.rounder} onClick={() => setStep(1)}>
            <path
              className={`${classNameList.cls2}`}
              style={{fill: step === 1 && "#272a3d" }}
              d="M141.5,0h0A13.49,13.49,0,0,1,155,13.5h0A13.49,13.49,0,0,1,141.5,27h0A13.49,13.49,0,0,1,128,13.5h0A13.49,13.49,0,0,1,141.5,0Z"
            />
            <path
              className={`${classNameList.cls3}`}
              d="M141.5,8h0a5.5,5.5,0,0,1,5.5,5.5h0a5.5,5.5,0,0,1-5.5,5.5h0a5.5,5.5,0,0,1-5.5-5.5h0A5.5,5.5,0,0,1,141.5,8Z"
            />
            </g>
            <text
              className={`${classNameList.cls4}`}
              transform="translate(128 50.64)"
            >
              Ideation
            </text>
            <g className={classNameList.rounder} onClick={() => setStep(2)}>
            <path
              className={`${classNameList.cls2}`}
              style={{fill: step === 2 && "#272a3d" }}
              d="M269.5,0h0A13.49,13.49,0,0,1,283,13.5h0A13.49,13.49,0,0,1,269.5,27h0A13.49,13.49,0,0,1,256,13.5h0A13.49,13.49,0,0,1,269.5,0Z"
            />
            <path
              className={`${classNameList.cls3}`}
              d="M269.5,8h0a5.5,5.5,0,0,1,5.5,5.5h0a5.5,5.5,0,0,1-5.5,5.5h0a5.5,5.5,0,0,1-5.5-5.5h0A5.5,5.5,0,0,1,269.5,8Z"
            />
            </g>
            <text
              className={`${classNameList.cls4}`}
              transform="translate(256 50.64)"
            >
              Design
            </text>
            <g className={classNameList.rounder} onClick={() => setStep(3)}>
            <path
              className={`${classNameList.cls2}`}
              style={{fill: step === 3 && "#272a3d" }}
              d="M397.5,0h0A13.49,13.49,0,0,1,411,13.5h0A13.49,13.49,0,0,1,397.5,27h0A13.49,13.49,0,0,1,384,13.5h0A13.49,13.49,0,0,1,397.5,0Z"
            />
            <path
              className={`${classNameList.cls3}`}
              d="M397.5,8h0a5.5,5.5,0,0,1,5.5,5.5h0a5.5,5.5,0,0,1-5.5,5.5h0a5.5,5.5,0,0,1-5.5-5.5h0A5.5,5.5,0,0,1,397.5,8Z"
            />
            </g>
            <text
              className={`${classNameList.cls4}`}
              transform="translate(384 50.64)"
            >
              Revision
            </text>
            <g className={classNameList.rounder} onClick={() => setStep(4)} >
            <path
              className={`${classNameList.cls2}`}
              style={{fill: step === 4 && "#272a3d" }}

              d="M525.5,0h0A13.49,13.49,0,0,1,539,13.5h0A13.49,13.49,0,0,1,525.5,27h0A13.49,13.49,0,0,1,512,13.5h0A13.49,13.49,0,0,1,525.5,0Z"
            />
            <path
              className={`${classNameList.cls3}`}
              d="M525.5,8h0a5.5,5.5,0,0,1,5.5,5.5h0a5.5,5.5,0,0,1-5.5,5.5h0a5.5,5.5,0,0,1-5.5-5.5h0A5.5,5.5,0,0,1,525.5,8Z"
            />
            </g>
            <text
              className={`${classNameList.cls4}`}
              transform="translate(512 50.64)"
            >
              Develop
            </text>
            <g className={classNameList.rounder} onClick={() => setStep(5)}>
            <path
              className={`${classNameList.cls2}`}
              style={{fill: step === 5 && "#272a3d" }}
              d="M653.5,0h0A13.49,13.49,0,0,1,667,13.5h0A13.49,13.49,0,0,1,653.5,27h0A13.49,13.49,0,0,1,640,13.5h0A13.49,13.49,0,0,1,653.5,0Z"
            />
            <path
              className={`${classNameList.cls3}`}
              d="M653.5,8h0a5.5,5.5,0,0,1,5.5,5.5h0a5.5,5.5,0,0,1-5.5,5.5h0a5.5,5.5,0,0,1-5.5-5.5h0A5.5,5.5,0,0,1,653.5,8Z"
            />
            </g>
            <text
              className={`${classNameList.cls4}`}
              transform="translate(640 50.64)"
            >
              Finish
            </text>
          </g>
        </g>
      </svg>
    </>
  );
};

export default IdeationProgressSVG;
