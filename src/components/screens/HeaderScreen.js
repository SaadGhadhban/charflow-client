import React, { useState, useEffect } from "react";
import { useUserContext } from "../../UserContext";
import "./HeaderScreen.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { BiLogOut, BiBarChartAlt } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

function HeaderScreen() {
  let history = useHistory;

  const { privateData, setPrivateData, error, setError } = useUserContext();

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
    }
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);

        setPrivateData(data.data.username);
      } catch (error) {
        localStorage.removeItem("authToken");
      }
    };

    fetchPrivateData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setPrivateData("");
    setShow(false);
  };

  useEffect(() => {
    setShow(false);
  }, [history]);

  return (
    <div className="header-main-container">
      <div className="logo-container">
        <h1>Logo</h1>
      </div>

      <div className={`register-container ${privateData ? "auth" : ""}`}>
        {privateData ? (
          <h2 className="username-header" onClick={() => setShow(!show)}>
            {privateData} <FiMenu className="menu-icon" size="0.8em" />
          </h2>
        ) : (
          <Link className="login-link-header" to="/register">
            <h3 className="login-title-container">Login </h3>{" "}
          </Link>
        )}
        <div className="drop-menu">
          <ul>
            <li className="profile">
              <CgProfile size="2.5em" />
            </li>
            <li className="dropdown-link">
              {" "}
              <Link to="/dashboard">
                {" "}
                <MdDashboard size="1em" /> Dashboard
              </Link>
            </li>
            <li className="dropdown-link">
              {" "}
              <Link to="/addChart">
                {" "}
                <BiBarChartAlt size="1em" /> Add chart
              </Link>
            </li>
            <li className="dropdown-link">
              <button className="logout" onClick={() => handleLogout()}>
                <Link className="logout-link" to="/">
                  <BiLogOut size="1em" /> Logout{" "}
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderScreen;
