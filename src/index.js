import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { start_clock } from "./start_clock";
import { SimpleWhiteBlossomClock } from "./clocks/simple_white_blossom_clock";
import { BlackMultiFunctionalClock } from "./clocks/black_multi_functional_clock";
import { LemonThemeClock } from "./clocks/lemon_theme_clock";
import { AncientThemeClock } from "./clocks/ancient_theme_clock";
import { OuterModalBoard } from "./clock_creator/outer_modal_board";

function Clocks() {
  setTimeout(start_clock(".hr", ".min", ".sec", "analog_board"), 400);
  
  const [ShowBoard, SetBoardDisplay] = useState(false);
  const ChangeBoardDisplay = () => {
    if (ShowBoard === false)
    {
      SetBoardDisplay(true);
    }
    else
    {
      SetBoardDisplay(false)
    }
  } 
  return (
    <section>
      <div className="grid">
        <div className="grid_item">
          <SimpleWhiteBlossomClock></SimpleWhiteBlossomClock>
          <p>Simple White Blossom theme clock</p>
        </div>
        <div className="grid_item">
          <BlackMultiFunctionalClock></BlackMultiFunctionalClock>
          <p>Multi functional black theme clock</p>
        </div>
        <div className="grid_item">
          <LemonThemeClock></LemonThemeClock>
          <p>Lemon theme clock</p>
        </div>
        <div className="grid_item">
          <AncientThemeClock />
          <p>Ancient Theme Clock</p>
        </div>
        <div id="add_clock" onClick={ChangeBoardDisplay}>
          <img
            src="https://img.icons8.com/fluent/48/000000/plus-math.png"
            alt="add book"
          />
          <p>Add Clock</p>
        </div>
        {ShowBoard ? <OuterModalBoard display="block" toggler={ChangeBoardDisplay}/> : <div></div>}
      </div>
    </section>
  );
}

ReactDOM.render(<Clocks />, document.getElementById("root"));
