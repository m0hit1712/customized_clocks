import React from "react";
import {ClockBackground} from "./clock_components/clock_background";
import {ClockFrame} from "./clock_components/clock_frame";
import {ClockInnerNumberFrame} from "./clock_components/clock_inner_number_frame";
import {HoursBar} from "./clock_components/hours_bar";
import {MinutesBar} from "./clock_components/minutes_bar";
import {SecondsBar} from "./clock_components/seconds_bar";
import {CenterCap} from "./clock_components/center_cap";

export const Clock = () => {

  return (<div id="clock">
          <ClockFrame height="200px" border_radius="50%" width="200px" id="2" border_size="25px" border_color="black" />
          <ClockBackground height="200px" border_radius="50%" width="200px" opacity="0.6" id="1" image_url="blossom_leafs.png" />
          <ClockInnerNumberFrame height="200px" border_radius="50%" width="200px" image_url="clock.png"/>
          <HoursBar outer_height="140px" outer_width="140px" bar_length="70px" bar_thickness="8px" bar_color="black"/>
          <MinutesBar outer_height="160px" outer_width="160px" bar_length="80px" bar_thickness="4px" bar_color="black"/>
          <SecondsBar outer_height="180px" outer_width="180px" bar_length="120px" bar_thickness="2px" bar_color="black"/>
          <CenterCap width="15px" height="15px" background_color="black" border_radius="50%"/>
  </div>);
};


