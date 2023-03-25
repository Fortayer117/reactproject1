import {useState } from "react";
import "./navbar.css";

function Navbar() {const [active,setactive] =useState(false);
  return (
    <div className="navbar">
      <h1>logo</h1>
      <div className={active ? "links active" : "links"}>
        <a href="">link</a>
        <a href="">link</a>
        <a href="">link</a>
        <a href="">link</a>
      </div>
      <div className="hamburger" onClick={() => setactive(!active)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
export default Navbar;
