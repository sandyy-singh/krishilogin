import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import "../style/Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const nawEntry = {
      email: email,
      password: password,
    };
    setAllEntry([...allEntry, nawEntry]);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="loginBg">
        <div className="frame">
          <div className="part1">
            <h1 className="full-text">Welcome to AigroCare</h1>
            <h1 className="short-text">Welcome</h1>
          </div>
          <div className="part2">
            <h5>Login to your account to continue</h5>
            <form action="" onSubmit={submitForm}>
              <input
                type="email"
                placeholder="sandeeprewa43@gmail.com"
                value={email}
                autoComplete="current-password"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                value={password}
                autoComplete="current-password"
                placeholder={"Enter your password"}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="checkbox1">
                <div className="checkbox">
                  <input
                    type="checkbox"
                  />
                  &nbsp;
                  <label for="vehicle2"> Remember Me</label>
                </div>
                <p className="Forgot">Forgot password?</p>
              </div>
              <div className="loginbtn">
                {/*  <input type="button" value="log In" />  */}
                <button variant="contained">Login</button>
              </div>
            </form>

            <p className="para">
              Don't have an account?
              <span onClick={() => alert("hello")}>Sign Up!</span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
