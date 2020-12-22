import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  SimpleWhiteBlossomClock,
  start_clock,
} from "./clocks/simple_white_blossom_clock";

function Clocks() {
  setTimeout(start_clock(".hr", ".min", ".sec"), 200);
  return (
    <section>
      <div className="grid">
        <SimpleWhiteBlossomClock />
      </div>
    </section>
  );
}

ReactDOM.render(<Clocks />, document.getElementById("root"));
