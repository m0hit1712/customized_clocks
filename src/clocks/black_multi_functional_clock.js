import React from "react";
import { ClockBackground } from "../clock_components/clock_background";
import { ClockFrame } from "../clock_components/clock_frame";
import { ClockInnerNumberFrame } from "../clock_components/clock_inner_number_frame";
import { HoursBar } from "../clock_components/hours_bar";
import { MinutesBar } from "../clock_components/minutes_bar";
import { SecondsBar } from "../clock_components/seconds_bar";
import { CenterCap } from "../clock_components/center_cap";
import { TimeInnerAnalog } from "../clock_components/time_inner_analog";
import { DayInnerAnalog } from "../clock_components/day_inner_analog";
import { DateInnerAnalog } from "../clock_components/date_inner_analog";
import styled from "styled-components";

export const BlackMultiFunctionalClock = (properties) => {
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
    <MyDiv className="clock" id="black_multi_functional_clock">
      <ClockFrame
        height="200px"
        border_radius="50%"
        width="200px"
        border_size="10px"
        border_color="black"
        shadow
      />
      <ClockBackground
        height="204px"
        border_radius="50%"
        width="204px"
        opacity="1"
        background_color="black"
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
        bar_color="#7E7F89"
      />
      <MinutesBar
        outer_height="160px"
        outer_width="160px"
        bar_length="80px"
        bar_thickness="4px"
        bar_color="#7E7F89"
      />
      <SecondsBar
        outer_height="180px"
        outer_width="180px"
        bar_length="120px"
        bar_thickness="2px"
        bar_color="#7E7F89"
      />
      <CenterCap
        width="15px"
        height="15px"
        background_color="#170F23"
        border_radius="50%"
      />
      <TimeInnerAnalog
        height="30px"
        width="80px"
        background_color="black"
        inner_border_color="grey"
        top="-60px"
        color="red"
        font_size="13px"
        font_family="analog2"
      />
      <DayInnerAnalog
        height="25px"
        width="25px"
        background_color="black"
        inner_border_color="grey"
        top="60px"
        left="60px"
        color="red"
        font_size="10px"
        font_family="analog2"
      />
      <DateInnerAnalog
        height="25px"
        width="60px"
        background_color="black"
        inner_border_color="grey"
        top="60px"
        left="-40px"
        color="red"
        font_size="10px"
        font_family="analog2"
      />
    </MyDiv>
  );
};
