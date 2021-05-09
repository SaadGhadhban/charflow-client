import { useState } from "react";
import "./RegisterScreen.css";
import { useUserContext } from "../../UserContext";
import LoginScreen from "./LoginScreen";
import img from "../../svg/data-il.svg";

const RegisterScreen = ({ history }) => {
  const {
    email,
    password,
    confirmPassword,
    username,
    error,
    setEmail,
    setPassword,
    handleRegister,
    setConfirmPassword,
    setUsername,
  } = useUserContext();

  const [formExpand, setFormExpand] = useState(true);

  return (
    <div className="form-body">
      <div className="pre-form">
        <div className="pre-form cover">
          <p className="pre-title">Visualize your Data </p>
          <p className="pre-slogan">
            Use one of 5 interactive and responsive chart types from simple bars
            and lines to radar chart{" "}
          </p>
          <img className="img-svg" src={img} />
        </div>
      </div>
      <div className="main-form">
        <div className="form-nav">
          <h4 className="form-nav-item" onClick={() => setFormExpand(true)}>
            Login{" "}
          </h4>{" "}
          <p className="pp">or </p>{" "}
          <h4 className="form-nav-item" onClick={() => setFormExpand(false)}>
            Register
          </h4>
        </div>
        <div className="form-container">
          <div
            className={`${
              formExpand ? "login-container  form-expand" : "login-container"
            }`}
          >
            <LoginScreen history={history} />
          </div>
          <div
            className={`${
              formExpand ? "register-screen" : "register-screen form-expand"
            }`}
          >
            <form
              onSubmit={(e) => handleRegister(e, history)}
              className="register-screen__form"
            >
              <h3 className="register-screen__title">Register Now</h3>
              {error && <span className="error-message">{error}</span>}
              <div className="form-group">
                <label htmlFor="username">USERNAME </label>
                <input
                  type="text"
                  required
                  id="username"
                  placeholder="Enter username .."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL </label>
                <input
                  type="email"
                  required
                  id="email"
                  placeholder="Enter Email .."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">PASSWORD </label>
                <input
                  type="password"
                  required
                  id="password"
                  placeholder="Enter password .."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmpassword"> CONFIRM PASSWORD </label>
                <input
                  type="password"
                  required
                  id="confirmpassword"
                  placeholder="Enter password again .."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <div className="form-futter">
                <span className="register-screen__subtext">
                  Already have an account ?{" "}
                </span>
                <p className="pp2" onClick={() => setFormExpand(true)}>
                  Login
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
