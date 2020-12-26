import React from "react";
import styled from "styled-components";

export const ClockBackground = (properties) => {
  //properties contain = id, height, width, image_url, background-color, border_radius
  const MyDiv = styled.div`
    background-color: ${properties.background_color};
    height: ${properties.height};
    width: ${properties.width};
    border-radius: ${properties.border_radius};
    background-size: cover;
    position: absolute;
    z-index: 0;
  `;

  return <MyDiv id={properties.id} className="clock_background"></MyDiv>;
};
