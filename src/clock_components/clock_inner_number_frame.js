import React from "react";
import styled from "styled-components";

export const ClockInnerNumberFrame = (properties) => {
  //properties contain = id, height, width, border_radius ,image_url
  const MyDiv = styled.div`
    background: url(${properties.image_url});
    height: ${properties.height};
    width: ${properties.width};
    border-radius: ${properties.border_radius};
    background-size: cover;
    position: absolute;
    background-color: ${properties.background_color};
  `;

return <MyDiv id={properties.id} className="clock_inner_frame"></MyDiv>;


};

