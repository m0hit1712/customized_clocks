import React from "react";
import "./outer_model_board.css";
import AssemblerCanvas from "./creator_canvas"
import Options from "./options"
//import styled from "styled-components";

export const OuterModalBoard = (properties) => {
    const Toggle = () => {
      properties.toggler()
    };
  return (
    <div id="myModal" className="modal" style={{ display: properties.display }}>
      <div className="modal-content">
        <span className="close" onClick={Toggle}>
          &times;
        </span>
        <div id="creator_board">
          <div id="assemble_canvas">
            <AssemblerCanvas />
          </div>
          <div id="option_box">
            <Options />
          </div>
        </div>
      </div>
    </div>
  );
};
