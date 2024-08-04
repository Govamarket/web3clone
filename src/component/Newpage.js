import React from "react";
import "./Newpage.css";
import Navbar from "./Navbar.js";

function Newpage() {
  return (
    <div className="nav">
      <Navbar />

      <div className="container-1">
        <span></span>
        <span></span>
        <section className="bar-1">
          <section className="row">
            <section className="col-1">
              <h1>
                YOU'RE NOT <br /> ELIGIBLE YET
              </h1>{" "}
              <br />
              <p>Here's how to become eligible:</p>
            </section>
          </section>

          <section className="middle">
            <section className="line-1">
              <spa>
                <p>Get Talisman Wallet</p>
              </spa>
              <span>
                <p>Installed?</p>
                <a href="#">Refresh</a>
              </span>
            </section>
            <section className="line-1">
              <p>
                Connect an Ethereum Account with <br /> Talisman
              </p>
            </section>
            <section className="line-1">
              <p>Sign-in to start earning rewards</p>
            </section>
          </section>

          <section className="btn">
            <button>
              <a href="#">Download Talisman</a>
            </button>
          </section>
        </section>

        <section className="bar-2">
          <span>
            <p>Step 1</p>
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
    </div>
  );
}

export default Newpage;
