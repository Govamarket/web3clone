import React, { Fragment } from "react";
import { useRef } from "react";
import { FaHandPaper } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

  function Navbar() {
    const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <section className="logo">
        <a href="">
          <span className="icon">
            <FaHandPaper />
          </span>
          <span>
            <p>Talisman</p>
          </span>
        </a>
      </section>

      <nav ref={navRef}>
      <span> <a href="#">Profile</a></span>
        <a href="#">Quests</a>
        <a href="#">Wallet Mining</a>
       

     
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
     

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <button className="nav-b">Check Eligibility</button> 
    </header>
  );
  
}

export default Navbar;
