import React from "react";
import './App.css';
import HeaderCenterText from './HeaderCenterText';
import HeaderLogo from './HeaderLogo';
import HeaderSignIn from "./HeaderSignIn";

function App(){
  return ( 
    <React.Fragment>
      <div class="container">
        <div class="row">
          <div class="col"><HeaderLogo/></div>
          <div class="col"><HeaderCenterText/></div>
          <div class="col"><HeaderSignIn/></div>
        </div>
      </div>      
      <hr/>
    </React.Fragment>


  );
}

export default App;
