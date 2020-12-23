import React from "react";
import styled from "styled-components";
import "./css/fonts_loaded.css";

export const DayInnerAnalog = (properties) => {
  var font_family = "analog";
  if (properties.font_family) {
    font_family = properties.font_family;
  }

  const MyDiv = styled.div`
    height: ${properties.height};
    width: ${properties.width};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: ${properties.background_color};
    color: ${properties.color};
    margin-top: ${properties.top};
    margin-left: ${properties.left};
    z-index: 1;
    font-family: ${font_family};
    font-size: ${properties.font_size};
    font-weight: bold;
  `;

  const InnerMyDiv = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    box-shadow: inset 1px 4px 10px 8px rgba(126, 127, 137, 0.2);
  `;

  const Item = styled.div`
    padding: 4px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border 1px solid ${properties.inner_border_color};
  `;

  return (
    <MyDiv>
      <InnerMyDiv>
        <Item className="day_analog"></Item>
      </InnerMyDiv>
    </MyDiv>
  );
};
