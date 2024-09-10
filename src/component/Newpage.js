import React from "react";
import { useRef } from "react";
import "./Newpage.css";
import Foot from "./Foot";

function Newpage() {
  return (
    <div className="nav">
      {/* Header page */}

      <div className="container-1">
        <span></span>
        <span></span>
        <div className="mother">
          <section className="bar-1">
            <section className="row">
              <section className="col-1">
                <h1>
                  YOU'RE NOT <br /> ELIGIBLE YET
                </h1>{" "}
                <br />
                <li>Here's how to become eligible:</li>
              </section>
            </section>

            <section className="middle">
              <li>Get Talisman Wallet  Installed?
              <a href="#">Refresh</a></li>

              <li>
                {" "}
                Connect an Ethereum Account with<span>Talisman</span>
              </li>

              <li> Sign-in to start earning rewards</li>
            </section>

            <section className="btn">
              <button>
                <a href="#">Download Talisman</a>
              </button>
            </section>
          </section>
        </div>

        {/* Vertical line */}
        <section className="vertical-line"></section>

        <section className="bar-2">
          <span className="p-1">
            <li>Step 1</li>
          </span>
          <section className="left-main">
            <span>
              <h1>Download Talisman</h1>
            </span>
            <span className="text">
              <p>
                To join our Quests you first need to get Talisman by downloading
                it from here: Once you’ve installed <br /> the Talisman
                extension in your browser, you’ll be able to manage crypto
                assets and use applications <br /> from the Polkadot and
                Ethereum ecosystems plus earn rewards through our Quests.
              </p>
            </span>

            <span className="main">
              <img src="./talisman-mockup.webp"></img>
            </span>
          </section>
        </section>
      </div>
      <Foot />
    </div>
  
  );
  
}

export default Newpage;
