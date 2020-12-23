import React from "react";
import styled from "styled-components";

export const MinutesBar = (properties) => {
  const MyDiv = styled.div`
    height: ${properties.outer_height};
    width: ${properties.outer_width};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  `;

  const InnerMyDiv = styled.div({
    height: properties.outer_height,
    width: properties.outer_width,
    display: "flex",
    justifyContent: "center",
    "::before": {
      content: "''",
      position: "absolute",
      width: properties.bar_thickness,
      height: properties.bar_length,
      background: properties.bar_color,
      borderRadius: properties.bar_corner,
    },
  });

  return (
    <MyDiv className="minute" id={properties.id}>
      <InnerMyDiv className="min"></InnerMyDiv>
    </MyDiv>
  );
};
