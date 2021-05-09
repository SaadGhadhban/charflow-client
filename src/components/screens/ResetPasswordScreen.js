import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ForgotPasswordScreen.css";

const ResetPasswordScreen = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("passwords does not match ..");
    }

    const handleAcync = async () => {
      const { data } = await axios.put(
        `https://agile-fjord-24980.herokuapp.com/api/auth/resetpassword/${match.params.resetToken}`,
        { password },
        config
      );

      setSuccess(data.data);
    };
    try {
      handleAcync();
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="forgotpassword-screen">
      <form
        onSubmit={handleResetPassword}
        className="forgotpassword-screen__form"
      >
        <h3 className="forgotpassword-screen__title">Reset Password</h3>
        {error && <span className="error-message">{error}</span>}
        {success && (
          <span className="success-message">
            {success}{" "}
            <Link className="login-link" to="/register">
              Login
            </Link>
          </span>
        )}
        <div className={`${success ? "no-show" : "form-group"}`}>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter password .."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={`${success ? "no-show" : "form-group"}`}>
          <label htmlFor="confirmpassword"> Confirm Password: </label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Enter password again .."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {success ? (
          ""
        ) : (
          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        )}
      </form>
    </div>
  );
};

export default ResetPasswordScreen;
