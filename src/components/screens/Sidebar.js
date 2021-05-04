import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsPersonPlusFill,
  BsInfoCircle,
} from "react-icons/bs";
import { FaHome, FaChartBar } from "react-icons/fa";

function Sidebar() {
  const [openLink, setOpenLink] = useState(false);

  return (
    <div className="sidebar-container-2">
      <button onClick={() => setOpenLink(!openLink)} className="nav-header">
        {" "}
        NAVIGATION{" "}
        {openLink ? (
          <BsFillCaretUpFill className="nav-arrow" />
        ) : (
          <BsFillCaretDownFill className="nav-arrow" />
        )}{" "}
      </button>
      <div
        className={` ${
          openLink ? "nav-container active-link" : "nav-container"
        }`}
      >
        <ul className="side-link-container">
          <li className="side-link-item">
            {" "}
            <Link className="side-link-item" to="/">
              Home
            </Link>
          </li>
          <li className="side-link-item">
            {" "}
            <Link to="/about" className="side-link-item">
              {" "}
              About{" "}
            </Link>
          </li>
          <li className="side-link-item">
            {" "}
            <Link className="side-link-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-nav-icons">
        <Link to="/" className="link-icon">
          <div className="link-icon-div home-icon">
            <FaHome size="2em" />
          </div>
          <p>Home</p>
        </Link>
        <Link to="/Addchart" className="link-icon">
          <div className="link-icon-div add-chart-icon">
            <p>+</p>
            <FaChartBar size="1.8em" />
          </div>
          <p>Add Chart</p>
        </Link>
        <Link to="/register" className="link-icon ">
          <div className="link-icon-div sign-up-icon">
            <BsPersonPlusFill size="2em" />
          </div>
          <p>Sign Up</p>
        </Link>
        <Link to="/about" className="link-icon">
          <div className="link-icon-div info-icon">
            <BsInfoCircle size="2em" />
          </div>
          <p>About</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
