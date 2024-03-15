"use client";
import { useState } from "react";

const RegistrationForm = () => {
  const container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "Column",
    backgroundColor: "black",
    height: "100vh",
  };
  const heading = {
    color: "white",
    fontSize: "30px",
    margin: "0 auto",
  };
  const form = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "Column",
  };

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const onClickHandler = (e) => {
    e.preventDefault();

    if (!userName || !email || !pass || !confirmPass) {
      setError("Please fill the all inputs");
      return;
    }

    setError("");

    console.log("Username:", userName);
    console.log("Email:", email);
    console.log("Password:", pass);
    console.log("Confirm Password:", confirmPass);
    setSubmitted(true);
  };

  return (
    <div style={container}>
      <h1 style={heading}>Registration Form</h1>
      <form style={form} onSubmit={onClickHandler}>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
          autoComplete="off"
          placeholder="Name"
          style={{ width: "300px", margin: "10px auto" }}
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          autoComplete="off"
          placeholder="Email"
          style={{ width: "300px", margin: "10px auto" }}
        />
        <input
          onChange={(e) => {
            setPass(e.target.value);
          }}
          type="password"
          autoComplete="off"
          style={{ width: "300px", margin: "10px auto" }}
          placeholder="Password"
        />
        <input
          onChange={(e) => {
            setConfirmPass(e.target.value);
          }}
          type="password"
          autoComplete="off"
          placeholder="Confirm Password"
          style={{ width: "300px", margin: "10px auto" }}
        />
        <button onClick={onClickHandler} style={{ color: "white" }}>
          Submit
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {submitted && (
          <p
            style={{ color: "white" }}
          >{`The name of user is ${userName} and email is ${email}`}</p>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
