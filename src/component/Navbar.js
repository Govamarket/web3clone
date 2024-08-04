import React, { Fragment } from "react";
import { useRef } from "react";
import { FaHandPaper } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

  function Navbar() {
    const navRef = useRef(null);
    // const hiddenApp = useRef(null);

    function hiddenApp() {
      
      const hiddenAp = document.querySelector ('.nav-b');

      if (!hiddenAp == "") {
        alert('hello world');
      }
    }
  
    hiddenApp()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  



  return (
    <Fragment>
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
      <button className="nav-b" onClick={hiddenApp}>Check Eligibility</button> 
    </header>
    </Fragment>
    
  );
  
}

export default Navbar;
