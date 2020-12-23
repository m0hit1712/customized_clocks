import React from "react";
import { ClockBackground } from "../clock_components/clock_background";
import { ClockFrame } from "../clock_components/clock_frame";
import { ClockInnerNumberFrame } from "../clock_components/clock_inner_number_frame";
import { HoursBar } from "../clock_components/hours_bar";
import { MinutesBar } from "../clock_components/minutes_bar";
import { SecondsBar } from "../clock_components/seconds_bar";
import { CenterCap } from "../clock_components/center_cap";
import styled from "styled-components";

export const LemonThemeClock = (properties) => {
  const MyDiv = styled.div`
    height: ${(properties) => properties.height || "300px"};
    width: ${(properties) => properties.width || "300px"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${properties.background_color};
    transition-duration: 0.5s;
  `;

  return (
    <MyDiv className="clock" id="lemon_theme_clock">
      <ClockFrame
        height="200px"
        border_radius="50%"
        width="200px"
        border_size="10px"
        border_color="#E1EA00"
        shadow
      />
      <ClockBackground
        height="100px"
        border_radius="50%"
        width="100px"
        opacity="0.6"
        image_url="images/lemon_background.png"
      />
      <ClockInnerNumberFrame
        height="200px"
        border_radius="50%"
        width="200px"
        image_url="images/lemon_clock_number_frame.png"
        background_color="white"
      />
      <HoursBar
        outer_height="120px"
        outer_width="120px"
        bar_length="60px"
        bar_thickness="8px"
        bar_color="#1B1E00"
        bar_corner="6px 6px 0 0"
      />
      <MinutesBar
        outer_height="160px"
        outer_width="160px"
        bar_length="80px"
        bar_thickness="4px"
        bar_color="#1B1E00"
        bar_corner="3px 3px 0 0"
      />
      <SecondsBar
        outer_height="180px"
        outer_width="180px"
        bar_length="120px"
        bar_thickness="2px"
        bar_color="#1B1E00"
        bar_corner="2px 2px 0 0"
      />
      <CenterCap
        width="15px"
        height="15px"
        background_color="#575A00"
        border_radius="50%"
      />
    </MyDiv>
  );
};
