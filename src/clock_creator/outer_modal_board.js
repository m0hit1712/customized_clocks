import React from "react";
import "./outer_model_board.css";
import styled from "styled-components";

export const OuterModalBoard = (properties) => {

  window.onclick = () => {
    document.getElementById("myModal").style.display = "none";
  }

  const MyDiv = styled.div`
    display: ${properties.display};
  ` 
  return (
    <MyDiv id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </MyDiv>
  );
};
