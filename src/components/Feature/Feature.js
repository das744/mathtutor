import React from "react";
import FCard from "./FCard";
import FData from "./FData";

import './Feature.css'

const Why = (props) => {
  return (
    <div className="feature_div ">
      <h2><span> My </span>Features</h2>

      <div className="feature_section ">
        
          {FData.map((val,ind)=>{
            return(
              <FCard  imgsrc={val.imgsrc}
                      title={val.title}
                      content ={val.content} />

            );
          })};

      </div>
    </div>
  );
};

export default Why;
