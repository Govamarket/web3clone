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
          <p> Take up the sceptre, unlock the story and unleash <br /> the power of
          the Talisman. Start earning rewards in <br /> Talisman’s official
          points program.</p>
        </span>
        <button className="btn">Check Eligibility</button> <br />

        <span><a href="#">Read Announcement <FaLongArrowAltRight /></a></span>
      </section>

      <section className="side-img">
      <img src="./eth.jpg"></img>
        <span></span>
        <span></span>
        <span></span>
      </section>
    
    </div>
  );
}

export default Landpage;
