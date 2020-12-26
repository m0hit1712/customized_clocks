import React from "react";
import styled from "styled-components";

export const ClockBackgroundImage = (properties) => {
  //properties contain = id, height, width, image_url, background-color, border_radius
  const MyDiv = styled.div`
    background: url(${properties.image_url});
    height: ${properties.height};
    width: ${properties.width};
    border-radius: ${properties.border_radius};
    background-size: cover;
    position: absolute;
    z-index: 1;
  `;

  return <MyDiv id={properties.id} className="clock_background_image"></MyDiv>;
};