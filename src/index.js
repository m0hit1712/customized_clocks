import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {start_clock} from "./rotate_clock"
import {Clock} from "./assembled_clock"


function Clocks() {
  setTimeout(start_clock(".hr", ".min", ".sec"), 200);
  return (
    <section>
      <div className="grid">
        <Clock height="300px" width="300px"></Clock>
        <Clock height="300px" width="300px"></Clock>
        <Clock height="300px" width="300px"></Clock>
        <Clock height="300px" width="300px"></Clock>
        <Clock height="300px" width="300px"></Clock>
        <Clock height="300px" width="300px"></Clock>
        <Clock height="300px" width="300px"></Clock>
        <Clock height="300px" width="300px"></Clock>
      </div>
    </section>
  );
}

ReactDOM.render(<Clocks />, document.getElementById("root"));
