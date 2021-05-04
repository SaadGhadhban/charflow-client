import React, { useState } from "react";
import "./LoginScreen.css";
import "./ContactScreen.css";
import { useUserContext } from "../../UserContext";
import axios from "axios";

function ContactScreen() {
  const { error, setError } = useUserContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleContact = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const handleAcync = async () => {
      const { data } = await axios.post(
        "/api/auth/contact",
        { message, email, name },
        config
      );

      setSuccess(data.data);
    };
    try {
      handleAcync();
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div className="contact-screen-main">
      <div className="contact-form-container">
        {success ? (
          <span className="success-span">{success}</span>
        ) : (
          <form onSubmit={handleContact} className="login-screen__form">
            <h3 className="contact-screen__title">Contact</h3>
            {error ? <span className="error-message">{error}</span> : ""}
            <div className="form-group">
              <label htmlFor="name">Your Name </label>
              <input
                type="text"
                required
                id="name"
                placeholder="Enter your Name .."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Please Enter your Email </label>
              <input
                type="email"
                required
                id="email"
                placeholder="Enter Email .."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group textarea">
              <label htmlFor="message">MESSAGE: </label>
              <textarea
                className="contact-msg"
                required
                id="message"
                placeholder="Enter a Message .."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send!
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactScreen;
