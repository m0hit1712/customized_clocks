import React from "react";
import styled from "styled-components";

export const ClockFrame = (properties) => {
  //properties contain = id, height, width, border-size, border_radius, border_color ,image_url

  if(properties.shadow)
  {
    var shadow =
      "inset 1px 4px 10px 8px rgba(126, 127, 137, 0.1),5px 5px 12px 2px rgba(0, 0, 0, 0.6)";
  }
  const MyDiv = styled.div`
    background: url(${properties.image_url});
    border: ${properties.border_size} solid ${properties.border_color};
    height: ${properties.height};
    width: ${properties.width};
    border-radius: ${properties.border_radius};
    background-size: cover;
    position: absolute;
    box-shadow: ${shadow};
    z-index: 10;
  `;
  return <MyDiv id={properties.id} className="clock_outer_frame"></MyDiv>;
};
