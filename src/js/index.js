//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="calander">
        <i class="fa-regular fa-clock"></i>
      </div>
      <div className="four"></div>
      <div className="three"></div>
      <div className="second"></div>
      <div className="one"></div>
    </div>
  );
}

//render your react application
ReactDOM.createRoot(document.getElementById("app")).render(<SimpleCounter />);
