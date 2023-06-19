import React, { useState } from "react";
// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
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
                        <h1>Welcome to AigroCare</h1>
                    </div>
                    <div className="part2">
                        <p>Login to your account to continue</p>
                        <form action="" onSubmit={submitForm}>
                            <div>
                                <TextField
                                    placeholder={"Enter your Email"}
                                    value={email}
                                    InputProps={{
                                        style: {
                                            borderRadius: "25px",
                                            height: "45px",
                                            color: " #292828",
                                            fontSize: "15px",
                                            width: "330px",
                                        },
                                    }}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    type="password"
                                    value={password}
                                    autoComplete="current-password"
                                    placeholder={"Enter your password"}
                                    InputProps={{
                                        style: {
                                            borderRadius: "25px",
                                            height: "45px",
                                            color: " #292828",
                                            fontSize: "15px",
                                            width: "330px",
                                        },
                                    }}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {/*input type="email" placeholder="sandeeprewa43@gmail.com" />
             <input type="password" value="sandeep@123" />   */}

                            <div className="checkbox1">
                                <div className="checkbox">
                                    <input
                                        type="checkbox"
                                        id="checkbox"
                                        name="checkbox"
                                        value=""
                                    />
                                    &nbsp;
                                    <label for="vehicle2"> Remember Me</label>
                                </div>
                                <p>Forgot password?</p>
                            </div>
                            <div className="loginbtn">
                                {/*  <input type="button" value="log In" />  */}
                                <button variant="contained">log In</button>
                            </div>
                        </form>

                        <p>
                            Don't have an account?{" "}
                            <span onClick={() => alert("hello")}>sign Up</span>
                        </p>
                        <div className="line">
                            <div class="line-1"></div>

                            <div class="line-2"> or</div>

                            <div class="line-3"></div>
                        </div>

                        <div className="liginWith">
                            {/*  <FacebookIcon sx={{ color: "blue" }} />
            <GoogleIcon sx={{ color: "blue" }} />  */}
                            <div>
                                <BsFacebook />
                            </div>
                            <div>
                                <FcGoogle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
