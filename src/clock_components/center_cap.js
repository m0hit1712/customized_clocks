import React from "react";
import styled from "styled-components";

export const CenterCap = (properties) => {
  //properties contain = id, height, width, image_url, background-color, border_radius
  const MyDiv = styled.div`
    background: ${properties.background_color};
    height: ${properties.height};
    width: ${properties.width};
    border-radius: ${properties.border_radius};
    z-index: 10;
  `;

  return <MyDiv id={properties.id} className="center_cap"></MyDiv>;
};
