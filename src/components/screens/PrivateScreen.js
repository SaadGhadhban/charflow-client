import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useUserContext } from "../../UserContext";
import { Bar, Doughnut } from "react-chartjs-2";
import "./PrivateScreen.css";
import { Link } from "react-router-dom";

const PrivateScreen = ({ history }) => {
  const { privateData, setPrivateData, error, setError } = useUserContext();

  const chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 18, 11, 19, 3, 9],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "# of counts",
        data: [5, 12, 20, 6, 8, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgba(75, 192, 192, 0.3)",
          "rgba(153, 102, 255, 0.3)",
          "rgba(255, 159, 64, 0.3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/register");
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
        setError("You are not authorized to view this page, please Login");
      }
    };

    fetchPrivateData();
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    history.push("/register");
  };
  return (
    <>
      {error ? (
        <span className="error-message">{error}</span>
      ) : (
        <div style={{ background: "green", color: "white" }}>{privateData}</div>
      )}
      <button onClick={handleLogout}>Logout</button>
      <h2>Your chart</h2>
      <div className="chart-c">
        <div className="Barcharts">
          <Bar data={chartData} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="pieChart">
          <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
      <div>
        <h2>Your data</h2>
        <p>{privateData}</p>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </>
  );
};

export default PrivateScreen;
