import { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../../UserContext";
import { Bar, Doughnut, Line, Radar, Polar } from "react-chartjs-2";
import { v4 as uuidv4, v4 } from "uuid";
import "./AddChartScreen.css";
import { BiListPlus, BiFullscreen, BiDoughnutChart } from "react-icons/bi";
import { FaRegChartBar, FaChartPie } from "react-icons/fa";
import { AiOutlineLineChart, AiOutlineRadarChart } from "react-icons/ai";
import { IoIosLock } from "react-icons/io";
import { IoEarth } from "react-icons/io5";

const AddChartScreen = ({ history }) => {
  const { privateData, setPrivateData, error, setError } = useUserContext();

  const [numberOfDatasets, setNumberOfDatasets] = useState(0);
  const [next, setNext] = useState(false);
  const [title, setTitle] = useState("");

  const [valueArray, setValueArray] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  const [description, setDescription] = useState("");

  const [dataOne, setDataOne] = useState("");
  const [dataTwo, setDataTwo] = useState("");
  const [dataThree, setDataThree] = useState("");
  const [dataFour, setDataFour] = useState("");
  const [dataFive, setDataFive] = useState("");
  const [dataSix, setDataSix] = useState("");
  const [dataSeven, setDataSeven] = useState("");
  const [dataEight, setDataEight] = useState("");
  const [dataNine, setDataNine] = useState("");
  const [dataTen, setDataTen] = useState("");
  //ccc
  const [dataEleven, setDataEleven] = useState("");
  const [dataTwelve, setDataTwelve] = useState("");
  const [dataThirteen, setDataThirteen] = useState("");
  const [dataFourteen, setDataFourteen] = useState("");
  const [dataFifteen, setDataFifteen] = useState("");
  const [dataSixteen, setDataSixteen] = useState("");
  const [dataSeventeen, setDataSeventeen] = useState("");
  const [dataEighteen, setDataEighteen] = useState("");
  const [dataNineteen, setDataNineteen] = useState("");
  const [dataTwenty, setDataTwenty] = useState("");

  //ccc

  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);
  const [valueThree, setValueThree] = useState(0);
  const [valueFour, setValueFour] = useState(0);
  const [valueFive, setValueFive] = useState(0);
  const [valueSix, setValueSix] = useState(0);
  const [valueSeven, setValueSeven] = useState(0);
  const [valueEight, setValueEight] = useState(0);
  const [valueNine, setValueNine] = useState(0);
  const [valueTen, setValueTen] = useState(0);

  //cc
  const [valueEleven, setValueEleven] = useState("");
  const [valueTwelve, setValueTwelve] = useState("");
  const [valueThirteen, setValueThirteen] = useState("");
  const [valueFourteen, setValueFourteen] = useState("");
  const [valueFifteen, setValueFifteen] = useState("");
  const [valueSixteen, setValueSixteen] = useState("");
  const [valueSeventeen, setValueSeventeen] = useState("");
  const [valueEighteen, setValueEighteen] = useState("");
  const [valueNineteen, setValueNineteen] = useState("");
  const [valueTwenty, setValueTwenty] = useState("");
  const [show, setShow] = useState(false);

  const [isPrivate, setIsPrivate] = useState(true);
  const [auth, setAuth] = useState("");
  const [chartType, setChartType] = useState([]);

  const handleSubmitOne = (e) => {
    e.preventDefault();

    if (numberOfDatasets > 20) {
      setError("Number of Datasets should be 20 or less");
    } else if (chartType.length < 1) {
      setError("Please select chart type");
    } else if (numberOfDatasets < 2) {
      setError("Number of Labels should be more than 2");
    } else {
      setNext(!next);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const handleData = (d) => {
      setDataArray((dataArray) => [...dataArray, d]);
    };

    const handleValue = (v) => {
      setValueArray((valueArray) => [...valueArray, v]);
    };

    // handle Values

    if (valueOne) {
      handleValue(valueOne);
    }
    if (valueTwo) {
      handleValue(valueTwo);
    }
    if (valueThree) {
      handleValue(valueThree);
    }
    if (valueFour) {
      handleValue(valueFour);
    }
    if (valueFive) {
      handleValue(valueFive);
    }
    if (valueSix) {
      handleValue(valueSix);
    }
    if (valueSeven) {
      handleValue(valueSeven);
    }
    if (valueEight) {
      handleValue(valueEight);
    }
    if (valueNine) {
      handleValue(valueNine);
    }
    if (valueTen) {
      handleValue(valueTen);
    }
    //BB
    if (valueEleven) {
      handleValue(valueEleven);
    }
    if (valueTwelve) {
      handleValue(valueTwelve);
    }
    if (valueThirteen) {
      handleValue(valueThirteen);
    }
    if (valueFourteen) {
      handleValue(valueFourteen);
    }
    if (valueFifteen) {
      handleValue(valueFifteen);
    }
    if (valueSixteen) {
      handleValue(valueSixteen);
    }
    if (valueSeventeen) {
      handleValue(valueSeventeen);
    }
    if (valueEighteen) {
      handleValue(valueEighteen);
    }
    if (valueNineteen) {
      handleValue(valueNineteen);
    }
    if (valueTwenty) {
      handleValue(valueTwenty);
    }

    //handle Data

    if (dataOne) {
      handleData(dataOne);
    }
    if (dataTwo) {
      handleData(dataTwo);
    }
    if (dataThree) {
      handleData(dataThree);
    }
    if (dataFour) {
      handleData(dataFour);
    }
    if (dataFive) {
      handleData(dataFive);
    }
    if (dataSix) {
      handleData(dataSix);
    }
    if (dataSeven) {
      handleData(dataSeven);
    }
    if (dataEight) {
      handleData(dataEight);
    }
    if (dataNine) {
      handleData(dataNine);
    }
    if (dataTen) {
      handleData(dataTen);
    }

    //BB
    if (dataEleven) {
      handleData(dataEleven);
    }
    if (dataTwelve) {
      handleData(dataTwelve);
    }
    if (dataThirteen) {
      handleData(dataThirteen);
    }
    if (dataFourteen) {
      handleData(dataFourteen);
    }
    if (dataFifteen) {
      handleData(dataFifteen);
    }
    if (dataSixteen) {
      handleData(dataSixteen);
    }
    if (dataSeventeen) {
      handleData(dataSeventeen);
    }
    if (dataEighteen) {
      handleData(dataEighteen);
    }
    if (dataNineteen) {
      handleData(dataNineteen);
    }
    if (dataTwenty) {
      handleData(dataTwenty);
    }

    if (dataArray.length != valueArray.length) {
      setError("Please enter all fields");
    } else {
      setShow(true);
      setNext(false);
    }
  };

  const handlePublic = () => {
    setIsPrivate(false);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const sendData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth}`,
        },
      };
      const finishedData = {
        data: {
          title: title,
          labels: dataArray,
          datasets: valueArray,
        },
        private: isPrivate,
        description: description,
        chartType: chartType,
      };

      try {
        const { data } = await axios.post(
          "/api/private/addchart",
          { chart: finishedData },
          config
        );

        history.push("/dashboard");
      } catch (error) {
        // localStorage.removeItem('authToken');

        setError("You are not authorized to view this page, please Login");
      }
    };
    sendData();
  };

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/register");
    }
    setAuth(localStorage.getItem("authToken"));
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);

        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized to view this page, please Login");
      }
    };

    fetchPrivateData();
  }, [history]);

  return (
    <>
      <div className="main-addchart-screen">
        <div className="second-section">
          <div className={`main-input ${next || show ? "" : "active-main"}`}>
            <div className="addchart-title">
              <BiListPlus size="2.5em" />
              <h2>Add Chart</h2>
            </div>
            {error ? <p className="error-msg"> &#8226; {error}</p> : ""}
            <form className="addchart-form" onSubmit={handleSubmitOne}>
              <div className="form-group">
                <label className="add-chart-label" htmlFor="title">
                  Add Title:{" "}
                </label>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group number-of-labels">
                <label className="add-chart-label" htmlFor="number-of-labels">
                  Number of Labels:{" "}
                </label>
                <input
                  type="number"
                  id="number-of-labels"
                  onChange={(e) =>
                    setNumberOfDatasets(parseInt(e.target.value))
                  }
                />
                <p className="cond">You can add from 1 - 20 Label</p>
              </div>
              <div className="form-group checkbox-container">
                <span className="icon-addchart">
                  <FaRegChartBar size="1.2em" />
                </span>
                <label className="add-chart-label" htmlFor="Bar">
                  Bar Chart
                </label>

                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={(e) =>
                    setChartType((chartType) => [...chartType, e.target.name])
                  }
                  name="Bar"
                />
              </div>
              <div className="form-group checkbox-container">
                <span className="icon-addchart">
                  <AiOutlineLineChart size="1.2em" />
                </span>
                <label className="add-chart-label" htmlFor="Bar">
                  Line Chart
                </label>
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={(e) =>
                    setChartType((chartType) => [...chartType, e.target.name])
                  }
                  name="Line"
                />
              </div>
              <div className="form-group checkbox-container">
                <span className="icon-addchart">
                  <BiDoughnutChart size="1.2em" />
                </span>
                <label htmlFor="Bar">Doughnut Chart</label>
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={(e) =>
                    setChartType((chartType) => [...chartType, e.target.name])
                  }
                  name="Doughnut"
                />
              </div>
              <div className="form-group checkbox-container">
                <span className="icon-addchart">
                  <FaChartPie size="1.2em" />
                </span>
                <label htmlFor="Bar">Polar Chart</label>
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={(e) =>
                    setChartType((chartType) => [...chartType, e.target.name])
                  }
                  name="Polar"
                />
              </div>
              <div className="form-group checkbox-container">
                <span className="icon-addchart">
                  <AiOutlineRadarChart size="1.2em" />
                </span>
                <label htmlFor="Bar">Radar Chart</label>
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={(e) =>
                    setChartType((chartType) => [...chartType, e.target.name])
                  }
                  name="Radar"
                />
              </div>
              <div className="form-group chart-desc">
                <label htmlFor="description">Chart description: </label>
                <textarea
                  type="number"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <br />
              <button className="btn btn-primary" type="submit">
                Next
              </button>
            </form>
          </div>

          <form
            className={`'input-wrapper' ${
              numberOfDatasets >= 1 && next ? "input-show" : ""
            }`}
            onSubmit={handleSubmit}
          >
            <div
              className={`data-input ${
                numberOfDatasets >= 1 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataOne}
                onChange={(e) => setDataOne(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueOne}
                onChange={(e) => setValueOne(e.target.value)}
              />
            </div>
            <div
              className={`data-input ${
                numberOfDatasets >= 2 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataTwo}
                onChange={(e) => setDataTwo(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueTwo}
                onChange={(e) => setValueTwo(e.target.value)}
              />
            </div>
            <div
              className={`data-input ${
                numberOfDatasets >= 3 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataThree}
                onChange={(e) => setDataThree(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueThree}
                onChange={(e) => setValueThree(e.target.value)}
              />
            </div>
            <div
              className={`data-input ${
                numberOfDatasets >= 4 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataFour}
                onChange={(e) => setDataFour(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueFour}
                onChange={(e) => setValueFour(e.target.value)}
              />
            </div>
            <div
              className={`data-input ${
                numberOfDatasets >= 5 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataFive}
                onChange={(e) => setDataFive(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueFive}
                onChange={(e) => setValueFive(e.target.value)}
              />
            </div>
            <div
              className={`data-input ${
                numberOfDatasets >= 6 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataSix}
                onChange={(e) => setDataSix(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueSix}
                onChange={(e) => setValueSix(e.target.value)}
              />
            </div>
            <div
              className={`data-input ${
                numberOfDatasets >= 7 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataSeven}
                onChange={(e) => setDataSeven(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueSeven}
                onChange={(e) => setValueSeven(e.target.value)}
              />
            </div>
            <div
              className={`data-input ${
                numberOfDatasets >= 8 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataEight}
                onChange={(e) => setDataEight(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueEight}
                onChange={(e) => setValueEight(e.target.value)}
              />
            </div>
            <div
              className={`data-input ${
                numberOfDatasets >= 9 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataNine}
                onChange={(e) => setDataNine(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueNine}
                onChange={(e) => setValueNine(e.target.value)}
              />
            </div>
            <div
              className={`data-input ${
                numberOfDatasets >= 10 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataTen}
                onChange={(e) => setDataTen(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueTen}
                onChange={(e) => setValueTen(e.target.value)}
              />
            </div>

            <div
              className={`data-input ${
                numberOfDatasets >= 11 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataEleven}
                onChange={(e) => setDataEleven(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueEleven}
                onChange={(e) => setValueEleven(e.target.value)}
              />
            </div>

            <div
              className={`data-input ${
                numberOfDatasets >= 12 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataTwelve}
                onChange={(e) => setDataTwelve(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueTwelve}
                onChange={(e) => setValueTwelve(e.target.value)}
              />
            </div>

            <div
              className={`data-input ${
                numberOfDatasets >= 13 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataThirteen}
                onChange={(e) => setDataThirteen(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueThirteen}
                onChange={(e) => setValueThirteen(e.target.value)}
              />
            </div>

            <div
              className={`data-input ${
                numberOfDatasets >= 14 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataFourteen}
                onChange={(e) => setDataFourteen(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueFourteen}
                onChange={(e) => setValueFourteen(e.target.value)}
              />
            </div>

            <div
              className={`data-input ${
                numberOfDatasets >= 15 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataFifteen}
                onChange={(e) => setDataFifteen(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueFifteen}
                onChange={(e) => setValueFifteen(e.target.value)}
              />
            </div>

            <div
              className={`data-input ${
                numberOfDatasets >= 16 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataSixteen}
                onChange={(e) => setDataSixteen(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueSixteen}
                onChange={(e) => setValueSixteen(e.target.value)}
              />
            </div>

            <div
              className={`data-input ${
                numberOfDatasets >= 17 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataSeventeen}
                onChange={(e) => setDataSeventeen(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueSeventeen}
                onChange={(e) => setValueSeventeen(e.target.value)}
              />
            </div>

            <div
              className={`data-input ${
                numberOfDatasets >= 18 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataEighteen}
                onChange={(e) => setDataEighteen(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueEighteen}
                onChange={(e) => setValueEighteen(e.target.value)}
              />
            </div>

            <div
              className={`data-input ${
                numberOfDatasets >= 19 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataNineteen}
                onChange={(e) => setDataNineteen(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueNineteen}
                onChange={(e) => setValueNineteen(e.target.value)}
              />
            </div>

            <div
              className={`data-input ${
                numberOfDatasets >= 20 && next ? "active-main" : ""
              }`}
            >
              <label>Data Label :</label>
              <input
                placeholder="Enter Label"
                type="text"
                value={dataTwenty}
                onChange={(e) => setDataTwenty(e.target.value)}
              />
              <label>Data Value</label>
              <input
                type="number"
                value={valueTwenty}
                onChange={(e) => setValueTwenty(e.target.value)}
              />
            </div>

            <div className={`${next ? "active-main" : "submit-btn"}`}>
              <button className="submit-chart btn btn-primary">submit</button>
            </div>
          </form>
        </div>
        {show ? (
          <div className="final-submit-container">
            <form className="final-submit-form" onSubmit={handleFinalSubmit}>
              <button className="private-save" type="submit">
                <IoIosLock className="final-submit-icon" size="1.2em" />
                Save as Private{" "}
              </button>
              <button
                className="public-save"
                type="submit"
                onClick={handlePublic}
              >
                <IoEarth className="final-submit-icon" size="1.2em" />
                Save as Public{" "}
              </button>
            </form>
            <form className="final-submit-form">
              <button className="reset-btn wide" type="submit">
                <IoIosLock className="final-submit-icon" size="1.2em" />
                Reset/Try again
              </button>
            </form>
          </div>
        ) : (
          ""
        )}
        {show ? (
          <div className="charts-wrapper2">
            {chartType.map((chart) => {
              if (chart === "Bar") {
                return (
                  <div key={v4()} className="chart-c">
                    <div key={v4()} className="pieChart">
                      <Bar
                        data={{
                          labels: dataArray,
                          datasets: [
                            {
                              label: title,
                              data: valueArray,
                              backgroundColor: [
                                "#264653",
                                "#2a9d8f",
                                "#e9c46a",
                                "#f4a261",
                                "#e76f51",
                                "#283618",
                                "#e07a5f",
                                "#3d405b",
                                "#81b29a",
                                "#f2cc8f",
                                "#50514f",
                                "#f25f5c",
                                "#ffe066",
                                "#247ba0",
                                "#70c1b3",
                                "#8cb369",
                                "#f4e285",
                                "#f4a259",
                                "#5b8e7d",
                                "#bc4b51",
                              ],
                              borderColor: [
                                "#264653",
                                "#2a9d8f",
                                "#e9c46a",
                                "#f4a261",
                                "#e76f51",
                                "#283618",
                                "#e07a5f",
                                "#3d405b",
                                "#81b29a",
                                "#f2cc8f",
                                "#50514f",
                                "#f25f5c",
                                "#ffe066",
                                "#247ba0",
                                "#70c1b3",
                                "#8cb369",
                                "#f4e285",
                                "#f4a259",
                                "#5b8e7d",
                                "#bc4b51",
                              ],
                              borderWidth: 1,
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            yAxes: [
                              {
                                ticks: {
                                  beginAtZero: true,
                                },
                              },
                            ],
                          },
                        }}
                      />
                    </div>

                    <div>
                      <div className="chart-futter">
                        <div className="des-section">
                          <span className="des-intro">Description:</span>
                          <p className="des-body">{description}</p>
                        </div>

                        <div className="user-section">
                          <span className="username-intro">created by:</span>{" "}
                          <h4 className="username">{privateData.username}</h4>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="btn-container">
                      <button
                        onClick={(e) => {
                          if (
                            e.target.parentNode.parentNode.parentNode
                              .className === "chart-c"
                          ) {
                            e.target.parentNode.parentNode.parentNode.children[0].className =
                              "pieChart expand-two";
                            e.target.parentNode.parentNode.parentNode.className =
                              "chart-c expand";
                          } else if (
                            e.target.parentNode.parentNode.parentNode
                              .className === "chart-c expand"
                          ) {
                            e.target.parentNode.parentNode.parentNode.children[0].className =
                              "pieChart";
                            e.target.parentNode.parentNode.parentNode.className =
                              "chart-c";
                          }
                        }}
                        className="expand-btn"
                      >
                        <BiFullscreen size={"1.2em"} />
                      </button>
                    </div>
                  </div>
                );
              }
              if (chart === "Doughnut") {
                return (
                  <div className="chart-c">
                    <div key={v4()} className="pieChart">
                      <Doughnut
                        data={{
                          labels: dataArray,
                          datasets: [
                            {
                              label: title,
                              data: valueArray,
                              backgroundColor: [
                                "#264653",
                                "#2a9d8f",
                                "#e9c46a",
                                "#f4a261",
                                "#e76f51",
                                "#283618",
                                "#e07a5f",
                                "#3d405b",
                                "#81b29a",
                                "#f2cc8f",
                                "#50514f",
                                "#f25f5c",
                                "#ffe066",
                                "#247ba0",
                                "#70c1b3",
                                "#8cb369",
                                "#f4e285",
                                "#f4a259",
                                "#5b8e7d",
                                "#bc4b51",
                              ],
                              borderColor: [
                                "#264653",
                                "#2a9d8f",
                                "#e9c46a",
                                "#f4a261",
                                "#e76f51",
                                "#283618",
                                "#e07a5f",
                                "#3d405b",
                                "#81b29a",
                                "#f2cc8f",
                                "#50514f",
                                "#f25f5c",
                                "#ffe066",
                                "#247ba0",
                                "#70c1b3",
                                "#8cb369",
                                "#f4e285",
                                "#f4a259",
                                "#5b8e7d",
                                "#bc4b51",
                              ],
                              borderWidth: 1,
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            yAxes: [
                              {
                                ticks: {
                                  beginAtZero: true,
                                },
                              },
                            ],
                          },
                        }}
                      />
                    </div>

                    <div>
                      <div className="chart-futter">
                        <div className="des-section">
                          <span className="des-intro">Description:</span>
                          <p className="des-body">{description}</p>
                        </div>

                        <div className="user-section">
                          <span className="username-intro">created by:</span>{" "}
                          <h4 className="username">{privateData.username}</h4>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="btn-container">
                      <button
                        onClick={(e) => {
                          if (
                            e.target.parentNode.parentNode.parentNode
                              .className === "chart-c"
                          ) {
                            e.target.parentNode.parentNode.parentNode.children[0].className =
                              "pieChart expand-two";
                            e.target.parentNode.parentNode.parentNode.className =
                              "chart-c expand";
                          } else if (
                            e.target.parentNode.parentNode.parentNode
                              .className === "chart-c expand"
                          ) {
                            e.target.parentNode.parentNode.parentNode.children[0].className =
                              "pieChart";
                            e.target.parentNode.parentNode.parentNode.className =
                              "chart-c";
                          }
                        }}
                        className="expand-btn"
                      >
                        <BiFullscreen size={"1.2em"} />
                      </button>
                    </div>
                  </div>
                );
              }
              if (chart === "Line") {
                return (
                  <div className="chart-c">
                    <div key={v4()} className="pieChart">
                      <Line
                        data={{
                          labels: dataArray,
                          datasets: [
                            {
                              label: title,
                              data: valueArray,
                              backgroundColor: [
                                "#264653",
                                "#2a9d8f",
                                "#e9c46a",
                                "#f4a261",
                                "#e76f51",
                                "#283618",
                                "#e07a5f",
                                "#3d405b",
                                "#81b29a",
                                "#f2cc8f",
                                "#50514f",
                                "#f25f5c",
                                "#ffe066",
                                "#247ba0",
                                "#70c1b3",
                                "#8cb369",
                                "#f4e285",
                                "#f4a259",
                                "#5b8e7d",
                                "#bc4b51",
                              ],

                              borderWidth: 1,
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            yAxes: [
                              {
                                ticks: {
                                  beginAtZero: true,
                                },
                              },
                            ],
                          },
                        }}
                      />
                    </div>

                    <div>
                      <div className="chart-futter">
                        <div className="des-section">
                          <span className="des-intro">Description:</span>
                          <p className="des-body">{description}</p>
                        </div>

                        <div className="user-section">
                          <span className="username-intro">created by:</span>{" "}
                          <h4 className="username">{privateData.username}</h4>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="btn-container">
                      <button
                        onClick={(e) => {
                          if (
                            e.target.parentNode.parentNode.parentNode
                              .className === "chart-c"
                          ) {
                            e.target.parentNode.parentNode.parentNode.children[0].className =
                              "pieChart expand-two";
                            e.target.parentNode.parentNode.parentNode.className =
                              "chart-c expand";
                          } else if (
                            e.target.parentNode.parentNode.parentNode
                              .className === "chart-c expand"
                          ) {
                            e.target.parentNode.parentNode.parentNode.children[0].className =
                              "pieChart";
                            e.target.parentNode.parentNode.parentNode.className =
                              "chart-c";
                          }
                        }}
                        className="expand-btn"
                      >
                        <BiFullscreen size={"1.2em"} />
                      </button>
                    </div>
                  </div>
                );
              }
              if (chart === "Radar") {
                return (
                  <div className="chart-c">
                    <div key={v4()} className="pieChart">
                      <Radar
                        data={{
                          labels: dataArray,
                          datasets: [
                            {
                              label: title,
                              data: valueArray,
                              backgroundColor: [
                                "#264653",
                                "#2a9d8f",
                                "#e9c46a",
                                "#f4a261",
                                "#e76f51",
                                "#283618",
                                "#e07a5f",
                                "#3d405b",
                                "#81b29a",
                                "#f2cc8f",
                                "#50514f",
                                "#f25f5c",
                                "#ffe066",
                                "#247ba0",
                                "#70c1b3",
                                "#8cb369",
                                "#f4e285",
                                "#f4a259",
                                "#5b8e7d",
                                "#bc4b51",
                              ],
                              borderColor: [
                                "#264653",
                                "#2a9d8f",
                                "#e9c46a",
                                "#f4a261",
                                "#e76f51",
                                "#283618",
                                "#e07a5f",
                                "#3d405b",
                                "#81b29a",
                                "#f2cc8f",
                                "#50514f",
                                "#f25f5c",
                                "#ffe066",
                                "#247ba0",
                                "#70c1b3",
                                "#8cb369",
                                "#f4e285",
                                "#f4a259",
                                "#5b8e7d",
                                "#bc4b51",
                              ],
                              borderWidth: 1,
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            yAxes: [
                              {
                                ticks: {
                                  beginAtZero: true,
                                },
                              },
                            ],
                          },
                        }}
                      />
                    </div>

                    <div>
                      <div className="chart-futter">
                        <div className="des-section">
                          <span className="des-intro">Description:</span>
                          <p className="des-body">{description}</p>
                        </div>

                        <div className="user-section">
                          <span className="username-intro">created by:</span>{" "}
                          <h4 className="username">{privateData.username}</h4>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="btn-container">
                      <button
                        onClick={(e) => {
                          if (
                            e.target.parentNode.parentNode.parentNode
                              .className === "chart-c"
                          ) {
                            e.target.parentNode.parentNode.parentNode.children[0].className =
                              "pieChart expand-two";
                            e.target.parentNode.parentNode.parentNode.className =
                              "chart-c expand";
                          } else if (
                            e.target.parentNode.parentNode.parentNode
                              .className === "chart-c expand"
                          ) {
                            e.target.parentNode.parentNode.parentNode.children[0].className =
                              "pieChart";
                            e.target.parentNode.parentNode.parentNode.className =
                              "chart-c";
                          }
                        }}
                        className="expand-btn"
                      >
                        <BiFullscreen size={"1.2em"} />
                      </button>
                    </div>
                  </div>
                );
              }
              if (chart === "Polar") {
                return (
                  <div className="chart-c">
                    <div key={v4()} className="pieChart">
                      <Polar
                        data={{
                          labels: dataArray,
                          datasets: [
                            {
                              label: title,
                              data: valueArray,
                              backgroundColor: [
                                "#264653",
                                "#2a9d8f",
                                "#e9c46a",
                                "#f4a261",
                                "#e76f51",
                                "#283618",
                                "#e07a5f",
                                "#3d405b",
                                "#81b29a",
                                "#f2cc8f",
                                "#50514f",
                                "#f25f5c",
                                "#ffe066",
                                "#247ba0",
                                "#70c1b3",
                                "#8cb369",
                                "#f4e285",
                                "#f4a259",
                                "#5b8e7d",
                                "#bc4b51",
                              ],
                              borderColor: [
                                "#264653",
                                "#2a9d8f",
                                "#e9c46a",
                                "#f4a261",
                                "#e76f51",
                                "#283618",
                                "#e07a5f",
                                "#3d405b",
                                "#81b29a",
                                "#f2cc8f",
                                "#50514f",
                                "#f25f5c",
                                "#ffe066",
                                "#247ba0",
                                "#70c1b3",
                                "#8cb369",
                                "#f4e285",
                                "#f4a259",
                                "#5b8e7d",
                                "#bc4b51",
                              ],
                              borderWidth: 1,
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            yAxes: [
                              {
                                ticks: {
                                  beginAtZero: true,
                                },
                              },
                            ],
                          },
                        }}
                      />
                    </div>

                    <div>
                      <div className="chart-futter">
                        <div className="des-section">
                          <span className="des-intro">Description:</span>
                          <p className="des-body">{description}</p>
                        </div>

                        <div className="user-section">
                          <span className="username-intro">created by:</span>{" "}
                          <h4 className="username">{privateData.username}</h4>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="btn-container">
                      <button
                        onClick={(e) => {
                          if (
                            e.target.parentNode.parentNode.parentNode
                              .className === "chart-c"
                          ) {
                            e.target.parentNode.parentNode.parentNode.children[0].className =
                              "pieChart expand-two";
                            e.target.parentNode.parentNode.parentNode.className =
                              "chart-c expand";
                          } else if (
                            e.target.parentNode.parentNode.parentNode
                              .className === "chart-c expand"
                          ) {
                            e.target.parentNode.parentNode.parentNode.children[0].className =
                              "pieChart";
                            e.target.parentNode.parentNode.parentNode.className =
                              "chart-c";
                          }
                        }}
                        className="expand-btn"
                      >
                        <BiFullscreen size={"1.2em"} />
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default AddChartScreen;
