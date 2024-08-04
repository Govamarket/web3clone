import React from "react";
import { FaHandPaper } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Foot.css";

function Foot() {

  return (
    <div className="footer">
      <section className="line-1">
        <button>Download Talisman</button>
      </section>

      <section className="line-2">
        <span className="hand">
          {" "}
          <FaHandPaper />
        </span>
        <span>
          <p>Talisman</p>
        </span>
      </section>

      <section className="line-3">
        <span className="cord">
          {" "}
          <FaDiscord />
        </span>
        <span>
          <p>Discord</p>
        </span>
      </section>

      <section className="line-4">
        <span className="x">
          {" "}
          <FaXTwitter />
        </span>
        <span>
          <p>Twitter</p>
        </span>
      </section>

      <section className="line-5">
        <span>
          {" "}
          <p>Terms</p>
        </span>
      </section>

      <section className="line-6">
        <span>
          <p>Privacy</p>
        </span>
      </section>
    </div>
  );
}

export default Foot;
