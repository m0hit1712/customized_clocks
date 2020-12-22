import React from "react";
import "./css/black_multi_functional_clock.css";

export const BlackMultiFunctionClock = () => {
  return (
    <div id="renderer">
      <div id="simple_white_blossom_clock" className="clock">
        <div id="clock_theme_background"></div>
        <div className="hour">
          <div className="hr" id="hr"></div>
        </div>
        <div className="minute">
          <div className="min" id="min"></div>
        </div>
        <div className="second">
          <div className="sec" id="sec"></div>
        </div>
        <div className="inner_analog">
          <div id="analog_hour"></div>
          <div id="analog_minute"></div>
          <div id="analog_second"></div>
        </div>
      </div>
    </div>
  );
};
