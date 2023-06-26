import React from "react";
import house1 from "./../img/house1.png";

function PictureBody(){
  return ( 
    <React.Fragment>
      <img src={house1} alt="A House" />
      <p>a house</p>
      <p>Costs: $$$</p>
      <p>Rating: 1.3/5 ✰</p>
    </React.Fragment>


  );
}

export default PictureBody;
