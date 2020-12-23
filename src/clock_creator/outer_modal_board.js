import React from "react";
import "./outer_model_board.css";

export const OuterModalBoard = () => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};
