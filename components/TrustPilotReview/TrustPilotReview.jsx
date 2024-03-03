import React from 'react';
import classList from "./TrustPilotReview.module.scss"

const TrustPilotReview = () => {
  return (
      <div  className={classList.container} >
          <div  style={{color: "white"}} class="trustpilot-widget" data-style-height="40px" data-theme="dark" data-locale="en-US" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="61f315a6d648f92b404f6ac1" data-style-height="24px" data-style-width="100%">
  <a style={{color: "white"}} href="/" target="_blank" rel="noopener">Trustpilot</a>
</div>
{/* <div class="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="61f315a6d648f92b404f6ac1" data-style-height="52px"  data-style-width="100%">
  <a href="https://www.trustpilot.com/review/thecoredesigns.com" target="_blank" rel="noopener">Trustpilot</a>
</div> */}
      </div>

  )
};

export default TrustPilotReview;
