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
import { ClockBackgroundImage } from "../clock_components/clock_background_image";
import styled from "styled-components";
import data from "../json_data/temporary_data.json";

const AssemblerCanvas = (props) => {
  var newData = data.map((detail) =>{
    return detail
  });

  console.log(newData);
  const outer_style = newData[0]["outer_div"];
  const MyDiv = styled.div`
    ${outer_style}
  `;
  const components = newData[0]["components"];
  if (components["ClockFrame"]["display"]) {
    let properties = components["ClockFrame"];
    let height = properties["height"];
    let border_radius = properties["border_radius"];
    let width = properties["width"];
    let border_size = properties["border_size"];
    let image_url = properties["image_url"];
    let border_color = properties["border_color"];
    let shadow = properties["shadow"];
    var clock_frame = (
      <ClockFrame
        height={height}
        border_radius={border_radius}
        width={width}
        border_size={border_size}
        image_url={image_url}
        border_color={border_color}
        shadow={shadow}
      />
    );
  }
  if (components["ClockBackground"]["display"]) {
    let properties = components["ClockBackground"];
    let height = properties["height"];
    let border_radius = properties["border_radius"];
    let width = properties["width"];
    let background_color = properties["background_color"];
    var clock_background = (
      <ClockBackground
        height={height}
        border_radius={border_radius}
        width={width}
        background_color={background_color}
      />
    );
  }
  if (components["ClockInnerNumberFrame"]["display"]) {
    let properties = components["ClockInnerNumberFrame"];
    let height = properties["height"];
    let border_radius = properties["border_radius"];
    let width = properties["width"];
    let background_color = properties["background_color"];
    let image_url = properties["image_url"];
    var clock_inner_number_frame = (
      <ClockInnerNumberFrame
        height={height}
        border_radius={border_radius}
        width={width}
        background_color={background_color}
        image_url={image_url}
      />
    );
  }
  if (components["HoursBar"]["display"]) {
    let properties = components["HoursBar"];
    let outer_height = properties["outer_height"];
    let outer_width = properties["outer_width"];
    let bar_length = properties["bar_length"];
    let bar_thickness = properties["bar_thickness"];
    let bar_color = properties["bar_color"];
    let bar_corner = properties["bar_corner"];
    var hours_bar = (
      <HoursBar
        outer_height={outer_height}
        outer_width={outer_width}
        bar_length={bar_length}
        bar_thickness={bar_thickness}
        bar_color={bar_color}
        bar_corner={bar_corner}
      />
    );
  }
  if (components["MinutesBar"]["display"]) {
    let properties = components["MinutesBar"];
    let outer_height = properties["outer_height"];
    let outer_width = properties["outer_width"];
    let bar_length = properties["bar_length"];
    let bar_thickness = properties["bar_thickness"];
    let bar_color = properties["bar_color"];
    let bar_corner = properties["bar_corner"];
    var minutes_bar = (
      <MinutesBar
        outer_height={outer_height}
        outer_width={outer_width}
        bar_length={bar_length}
        bar_thickness={bar_thickness}
        bar_color={bar_color}
        bar_corner={bar_corner}
      />
    );
  }
  if (components["SecondsBar"]["display"]) {
    let properties = components["SecondsBar"];
    let outer_height = properties["outer_height"];
    let outer_width = properties["outer_width"];
    let bar_length = properties["bar_length"];
    let bar_thickness = properties["bar_thickness"];
    let bar_color = properties["bar_color"];
    let bar_corner = properties["bar_corner"];
    var seconds_bar = (
      <SecondsBar
        outer_height={outer_height}
        outer_width={outer_width}
        bar_length={bar_length}
        bar_thickness={bar_thickness}
        bar_color={bar_color}
        bar_corner={bar_corner}
      />
    );
  }
  if (components["CenterCap"]["display"]) {
    let properties = components["CenterCap"];
    let height = properties["height"];
    let border_radius = properties["border_radius"];
    let width = properties["width"];
    let background_color = properties["background_color"];
    var center_cap = (
      <CenterCap
        height={height}
        border_radius={border_radius}
        width={width}
        background_color={background_color}
      />
    );
  }
  if (components["TimeInnerAnalog"]["display"]) {
    let properties = components["TimeInnerAnalog"];
    let height = properties["height"];
    let width = properties["width"];
    let background_color = properties["background_color"];
    let inner_border_color = properties["inner_border_color"];
    let top = properties["top"];
    let left = properties["left"];
    let color = properties["color"];
    let font_size = properties["font_size"];
    let font_family = properties["font_family"];
    var time_inner_analog = (
      <TimeInnerAnalog
        height={height}
        width={width}
        background_color={background_color}
        inner_border_color={inner_border_color}
        top={top}
        left={left}
        color={color}
        font_size={font_size}
        font_family={font_family}
      />
    );
  }
  if (components["DayInnerAnalog"]["display"]) {
    let properties = components["DayInnerAnalog"];
    let height = properties["height"];
    let width = properties["width"];
    let background_color = properties["background_color"];
    let inner_border_color = properties["inner_border_color"];
    let top = properties["top"];
    let color = properties["color"];
    let font_size = properties["font_size"];
    let font_family = properties["font_family"];
    let left = properties["left"];
    var day_inner_analog = (
      <DayInnerAnalog
        height={height}
        width={width}
        background_color={background_color}
        inner_border_color={inner_border_color}
        top={top}
        left={left}
        color={color}
        font_size={font_size}
        font_family={font_family}
      />
    );
  }
  if (components["DateInnerAnalog"]["display"]) {
    let properties = components["DateInnerAnalog"];
    let height = properties["height"];
    let width = properties["width"];
    let background_color = properties["background_color"];
    let inner_border_color = properties["inner_border_color"];
    let top = properties["top"];
    let left = properties["left"];
    let color = properties["color"];
    let font_size = properties["font_size"];
    let font_family = properties["font_family"];
    var date_inner_analog = (
      <DateInnerAnalog
        height={height}
        width={width}
        background_color={background_color}
        inner_border_color={inner_border_color}
        top={top}
        left={left}
        color={color}
        font_size={font_size}
        font_family={font_family}
      />
    );
  }
  if (components["ClockBackgroundImage"]["display"]) {
    let properties = components["ClockBackgroundImage"];
    let height = properties["height"];
    let border_radius = properties["border_radius"];
    let width = properties["width"];
    let opacity = properties["opacity"];
    let image_url = properties["image_url"];
    var clock_background_image = (
      <ClockBackgroundImage
        height={height}
        border_radius={border_radius}
        width={width}
        opacity={opacity}
        image_url={image_url}
      />
    );
  }
  return (
    <MyDiv className="clock" key="assembled">
      {clock_frame}
      {clock_background}
      {clock_background_image}
      {clock_inner_number_frame}
      {hours_bar}
      {minutes_bar}
      {seconds_bar}
      {center_cap}
      {time_inner_analog}
      {day_inner_analog}
      {date_inner_analog}
    </MyDiv>
  );
};

export default AssemblerCanvas;
