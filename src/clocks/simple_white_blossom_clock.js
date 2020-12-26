import React from "react";
import { ClockBackgroundImage } from "../clock_components/clock_background_image";
import { ClockBackground } from "../clock_components/clock_background";
import { ClockFrame } from "../clock_components/clock_frame";
import { ClockInnerNumberFrame } from "../clock_components/clock_inner_number_frame";
import { HoursBar } from "../clock_components/hours_bar";
import { MinutesBar } from "../clock_components/minutes_bar";
import { SecondsBar } from "../clock_components/seconds_bar";
import { CenterCap } from "../clock_components/center_cap";
import { TimeInnerAnalog } from "../clock_components/time_inner_analog";
import styled from "styled-components";

export const SimpleWhiteBlossomClock = (properties) => {
  const MyDiv = styled.div`
    height: ${properties => properties.height || "300px"};
    width: ${properties => properties.width || "300px"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${properties.background_color};
    transition-duration: 0.5s;
  `;

  return (
    <MyDiv className="clock" id="simple_white_blossom_clock">
      <ClockFrame
        height="200px"
        border_radius="50%"
        width="200px"
        border_size="25px"
        border_color="#1E1E1E"
        shadow
      />
      <ClockBackground
        height="200px"
        border_radius="50%"
        width="200px"
        opacity="0.6"
        background_color="white"
      />
      <ClockBackgroundImage
        height="200px"
        border_radius="50%"
        width="200px"
        opacity="0.6"
        image_url="images/blossom_leafs.png"
      />
      <ClockInnerNumberFrame
        height="200px"
        border_radius="50%"
        width="200px"
        image_url="images/clock.png"
      />
      <HoursBar
        outer_height="140px"
        outer_width="140px"
        bar_length="70px"
        bar_thickness="8px"
        bar_color="black"
        bar_corner="6px 6px 0 0"
      />
      <MinutesBar
        outer_height="160px"
        outer_width="160px"
        bar_length="80px"
        bar_thickness="4px"
        bar_color="black"
        bar_corner="3px 3px 0 0"
      />
      <SecondsBar
        outer_height="180px"
        outer_width="180px"
        bar_length="120px"
        bar_thickness="2px"
        bar_color="black"
        bar_corner="2px 2px 0 0"
      />
      <CenterCap
        width="15px"
        height="15px"
        background_color="black"
        border_radius="50%"
      />
      <TimeInnerAnalog
        height="30px"
        width="80px"
        color="#E372A0"
        background_color="black"
        inner_border_color="white"
        font_size="18px"
        top="80px"
      ></TimeInnerAnalog>
    </MyDiv>
  );
};
