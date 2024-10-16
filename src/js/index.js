//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/simplecounter.css";

import Home from "./component/home.jsx";

//render your react application
// ReactDOM.createRoot(document.getElementById("app")).render(<Home />)
let counter = 0;
setInterval(function () {
  ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
  ++counter;
}, 1000);
