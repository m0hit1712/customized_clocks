import React from "react";
import styled from "styled-components";

export const ClockFrame = (properties) => {
  //properties contain = id, height, width, border-size, border_radius, border_color ,image_url

  const MyDiv = styled.div`
    background: url(${properties.image_url});
    border: ${properties.border_size} solid ${properties.border_color};
    height: ${properties.height};
    width: ${properties.width};
    border-radius: ${properties.border_radius};
    background-size: cover;
    position: absolute;
    box-shadow: ${properties.shadow};
    z-index: 10;
    padding: 0px;
    margin: 0px;
  `;
  return <MyDiv id={properties.id} className="clock_outer_frame"></MyDiv>;
};
