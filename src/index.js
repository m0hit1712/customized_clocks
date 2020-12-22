import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {start_clock} from "./rotate_clock"

/*
import {
  SimpleWhiteBlossomClock,
  start_clock,
} from "./clocks/simple_white_blossom_clock";

import { BlackMultiFunctionClock } from "./clocks/black_multi_function_clock";
*/
import {Clock } from "./assembled_clock"


function Clocks() {
  setTimeout(start_clock(".hr", ".min", ".sec"), 200);
  return (
    <section>
      <div className="grid">
        <Clock></Clock>
        <Clock></Clock>
        <Clock></Clock>
        <Clock></Clock>
      </div>
    </section>
  );
}

ReactDOM.render(<Clocks />, document.getElementById("root"));
