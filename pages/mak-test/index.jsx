import React from "react";
import Wizard from "../../components/Wizard/Wizard";
import { useState } from "react";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TrustPilotReview from "../../components/TrustPilotReview/TrustPilotReview";
import UseCheckbox from "../../components/UseCheckbox/UseCheckbox";

const index = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {/* <h1>trust pilot</h1> */}
      <UseCheckbox
        getFieldValue={(e) => console.log(e)}
        label="Test"
        name="gender"
      />
      {/* <TrustPilotReview /> */}
    </div>
  );
};

export default index;
