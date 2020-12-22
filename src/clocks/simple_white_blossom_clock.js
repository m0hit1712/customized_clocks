import React from "react";
import "./css/simple_white_blossom_clock.css";

export function rotate_clock(hr_s, min_s, sec_s) {
  setInterval(() => {
    const deg = 6;
    const hr = document.querySelectorAll(hr_s);
    const min = document.querySelectorAll(min_s);
    const sec = document.querySelectorAll(sec_s);

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    for (let i = 0; i < hr.length; i++) {
      hr[i].style.transform = `rotate(${hh + mm / 12}deg)`;
      min[i].style.transform = `rotate(${mm}deg)`;
      sec[i].style.transform = `rotate(${ss}deg)`;
    }
  }, 500);
}

export const SimpleWhiteBlossomClock = () => {
  return (
    <div id="renderer">
      <div id="simple_white_blossom_clock" className="clock">
        <div className="hour">
          <div className="hr" id="hr"></div>
        </div>
        <div className="minute">
          <div className="min" id="min"></div>
        </div>
        <div className="second">
          <div className="sec" id="sec"></div>
        </div>
      </div>
    </div>
  );
};
