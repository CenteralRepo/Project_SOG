import React, { useState } from "react";
import logo from "./public/clock.png";
import icon from "./public/HeadingLOGO.png"
import eye from "./public/eye-solid.svg";
import eyeslash from "./public/eye-slash-solid.svg";
import axios from "axios";
import "./App.css";

const App = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword,setShowPassWord]=useState(false)
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
        .post("http://localhost:3000/user/login", credentials)
        .then(() => {
          console.log("INSIDE");
        })
        .catch(() => {
          console.log("err");
        });
    }
  };
  // const showAndHidePasswordHandler = () =>{
  //   console.log("IN");
  //   var x = document.getElementById("loginPassword");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }
  return (
    <div className="App">
      <div className="container">
        <div className="login">
          <div className="clock">
            <img src={logo} alt="logo" width="255" height="242" />
          </div>
          <div className="logo-with-name">
            <img src={icon} alt="icon" />
          </div>
          <div>
            <p className="fields-label">email</p>
            <input
              className="input-inner-colore input-field"
              name="email"
              placeholder="email"
              type="text"
              onChange={emailHandler}
            />
            <p className="fields-label">PASSWORD</p>
            <label >
            <input
              className="input-inner-colore input-field"
              name="password"
              id="loginPassword"
              placeholder="PASSWORD"
              type={showPassword ?"text":"password"}
              onChange={passwordHandler}
            />
             <img src={showPassword ? eyeslash :eye} alt="eyeicon" className="eye-icon" onClick={()=>setShowPassWord(!showPassword)}/>
        
            </label>
          </div>
          {/* <div><input type="checkbox" onChange={showAndHidePasswordHandler()}/><span className="fields-label">Show Password</span></div> */}
          <div>
            <button className="signup" onClick={loginHandler}>
              <span className="button-text-color">DIVE IN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
