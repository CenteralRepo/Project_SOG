import React, { useState } from "react";
import logo from "../public/clock.png";
import icon from "../public/HeadingLOGO.png";
import eye from "../public/eye-solid.svg";
import eyeslash from "../public/eye-slash-solid.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VideoPage from "./VideoPage";

const LoginPage = () =>{
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
      });
      const navigate = useNavigate();
      const url=process.env.REACT_APP_SERVICE_ID
      console.log(url,"url");
      const [showPassword, setShowPassWord] = useState(false);
      const [loginData, setLoginData] = useState()
      const [show, setShow]=useState(false);
      const emailHandler = (e) => {
        setCredentials({ ...credentials, email: e.target.value });
      };
      const passwordHandler = (e) => {
        setCredentials({ ...credentials, password: e.target.value });
      };
      const loginHandler = () => {
        console.log(credentials);
        if (credentials.email.length > 10 && credentials.password.length > 7) {
          axios
            .post(url+"/user/login", credentials)
            .then((res) => {
              console.log(res.status);
              if(res.status === 200){
                // navigate("/videoPlayer")
                console.log(res.data)
                setShow(true)
                setLoginData(res.data)
              }
            })
            .catch(() => {
              console.log("err");
            });
        }
      };
      const signUpHandler = () => {
        // window.open("/SignUp");
        navigate("/Signup")
      };
    return <>
    {show && loginData && <VideoPage loginData={loginData}/>}
        {!show && <div className="login">
          <div className="clock">
            <img src={logo} alt="logo" width="255" height="242" />
          </div>
          <div className="logo-with-name">
            <img src={icon} alt="icon" />
          </div>
          <div>
            <p className="fields-label">EMAIL</p>
            <input
              className="input-inner-colore input-field"
              name="email"
              placeholder="Email"
              type="text"
              onChange={emailHandler}
            />
            <p className="fields-label">PASSWORD</p>
            <label>
              <input
                className="input-inner-colore input-field"
                name="password"
                id="loginPassword"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                onChange={passwordHandler}
              />
              <img
                src={showPassword ? eyeslash : eye}
                alt="eyeicon"
                className="eye-icon"
                onClick={() => setShowPassWord(!showPassword)}
              />
            </label>
          </div>
          {/* <div><input type="checkbox" onChange={showAndHidePasswordHandler()}/><span className="fields-label">Show Password</span></div> */}
          <div>
            <button className="signup" onClick={loginHandler}>
              <span className="button-text-color">DIVE IN</span>
            </button>
          </div>
          <p>
            Create new account?{" "}
            <span className="create-new" onClick={signUpHandler}>
              <u style={{cursor:"pointer"}}>Sign up</u>
            </span>
          </p>
        </div>}
      
    </>
}
export default LoginPage;