import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { start_clock } from "./start_clock";
import { OuterModalBoard } from "./clock_creator/outer_modal_board";
import { ClockObjects } from "./clock_renderer/dynamic_renderer";
import { shuffle } from "./libraries/shuffle";

function Clocks() {
  setTimeout(start_clock(".hr", ".min", ".sec", "analog_board"), 400);
  const list = ClockObjects();
  console.log(list);
  const [ShowBoard, SetBoardDisplay] = useState(false);
  const ChangeBoardDisplay = () => {
    if (ShowBoard === false) {
      SetBoardDisplay(true);
    } else {
      SetBoardDisplay(false);
    }
  };
  var elements = [];
  for (let i in list) {
    elements.push(<div className="grid_item">{list[i]}</div>);
  }
  elements = shuffle(elements);
  return (
    <section>
      <div className="grid">
        {elements}
        <div id="add_clock" onClick={ChangeBoardDisplay}>
          <img
            src="https://img.icons8.com/fluent/48/000000/plus-math.png"
            alt="add book"
          />
          <p>Add Clock</p>
        </div>
        {ShowBoard ? (
          <OuterModalBoard display="block" toggler={ChangeBoardDisplay} />
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
}

ReactDOM.render(<Clocks />, document.getElementById("root"));
