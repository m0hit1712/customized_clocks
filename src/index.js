import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  SimpleWhiteBlossomClock,
  rotate_clock,
} from "./clocks/simple_white_blossom_clock";

function Clocks() {
  return (
    <section>
      <SimpleWhiteBlossomClock />
      {setTimeout(rotate_clock(".hr", ".min", ".sec"), 200)};
    </section>
  );
}

ReactDOM.render(<Clocks />, document.getElementById("root"));
