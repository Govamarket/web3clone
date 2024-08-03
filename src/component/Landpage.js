import React from "react";
import "./Landpage.css";
import { FaLongArrowAltRight } from "react-icons/fa";

function Landpage() {
  return (
    <div className="container">
      <section className="text-article">
        <h1>
          TALISMAN <br /> QUESTS
        </h1>
        <span className="text">
          <p>
            {" "}
            Take up the sceptre, unlock the story and unleash <br /> the power
            of the Talisman. Start earning rewards in <br /> Talisman’s official
            points program.
          </p>
        </span>
        <button className="btn">Check Eligibility</button> <br />
        <span className="arrow">
          <a href="#">
            Read Announcement <FaLongArrowAltRight />
          </a>
        </span>
      </section>

      <section className="side-img">
        <img src="./eth.jpg"></img>
        <div className="bubble-container">
          <section className="first-col">
            <span className="img-1">
              {" "}
              <img src="./ethereum-bubble.svg"></img>
            </span>
            <span className="img-2">
              {" "}
              <img src="./arbitrum-bubble.svg"></img>
            </span>
          </section>

          <section className="second-col">
            <span className="img-3">
              {" "}
              <img src="./analog-bubble.svg"></img>
            </span>
            <span className="img-4">
              <img src="./polkadot-bubble.svg"></img>
            </span>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Landpage;
