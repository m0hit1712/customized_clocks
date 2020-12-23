import React from "react";
import { ClockBackground } from "../clock_components/clock_background";
import { ClockFrame } from "../clock_components/clock_frame";
import { ClockInnerNumberFrame } from "../clock_components/clock_inner_number_frame";
import { HoursBar } from "../clock_components/hours_bar";
import { MinutesBar } from "../clock_components/minutes_bar";
import { SecondsBar } from "../clock_components/seconds_bar";
import { CenterCap } from "../clock_components/center_cap";
import styled from "styled-components";

export const AncientThemeClock = (properties) => {
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
    <MyDiv className="clock" id="ancient_theme_clock">
      <ClockFrame
        height="250px"
        border_radius="50%"
        width="250px"
        border_size="0px"
        image_url="images/ancient_theme_frame.png"
      />
      <ClockBackground
        height="190px"
        border_radius="50%"
        width="190px"
        opacity="1"
        background_color="transparent"
      />
      <ClockInnerNumberFrame
        height="185px"
        border_radius="50%"
        width="185px"
        background_color="transparent"
        image_url="images/number_frame_ancient.png"
      />
      <HoursBar
        outer_height="100px"
        outer_width="100px"
        bar_length="50px"
        bar_thickness="8px"
        bar_color="#97773E"
        bar_corner="6px 6px 6px 6px"
      />
      <MinutesBar
        outer_height="140px"
        outer_width="140px"
        bar_length="70px"
        bar_thickness="4px"
        bar_color="#97773E"
        bar_corner="4px 4px 0 0"
      />
      <SecondsBar
        outer_height="140px"
        outer_width="140px"
        bar_length="90px"
        bar_thickness="2px"
        bar_color="#97773E"
        bar_corner="2px 2px 0 0"
      />
      <CenterCap
        width="15px"
        height="15px"
        background_color="black"
        border_radius="50%"
      />
    </MyDiv>
  );
};
