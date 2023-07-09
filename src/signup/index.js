import React, { useEffect, useState } from "react";
// import logo from "../public/clock.png";
import icon from "../public/HeadingLOGO.png";
import eye from "../public/eye-solid.svg";
import eyeslash from "../public/eye-slash-solid.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    category: "Anal",
  });
  const url = process.env.REACT_APP_SERVICE_ID;
  const [showPassword, setShowPassWord] = useState(false);
  const [showConfirmPassword, setShowConfirmPassWord] = useState(false);
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (
      userDetails.password === userDetails.confirmpassword &&
      userDetails.email.length > 1 &&
      userDetails.username.length > 1 &&
      userDetails.category.length > 1 &&
      userDetails.password.length > 8 &&
      userDetails.email
    ) {
      setValidation(true);
    }
  }, [userDetails]);
  const userNameHandler = (e) => {
    setUserDetails({ ...userDetails, username: e.target.value });
  };
  const emailHandler = (e) => {
    setUserDetails({ ...userDetails, email: e.target.value });
  };

  const passwordHandler = (e) => {
    setUserDetails({ ...userDetails, password: e.target.value });
  };

  const confirmPasswordHandler = (e) => {
    setUserDetails({ ...userDetails, confirmpassword: e.target.value });
  };
  const signUpHandler = () => {
//   let   {username,email,password,category }=userDetails
//     let obj={
//         "email":email,
//         "username": username,
//         "password":password,
//         "category": category
//     }
let payLoad = {...userDetails};
delete payLoad.confirmpassword
    if (validation) {
      axios
        .post(url + "/signup", payLoad )
        .then((res) => {
        //   alert("succesfully signed in");
          navigate("/")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // const categoryHandler = (e) => {
  // setUserDetails({...userDetails, category: e.target.value})

  // };
  console.log(userDetails, "userDetails");
  return (
    <>
      <div className="sign-up">
        <div>
          <div className="logo-with-name">
            <img src={icon} alt="icon" />
          </div>
          <div>
            <p className="fields-label">USERNAME</p>
            <input
              className="input-inner-colore input-field"
              name="email"
              placeholder="USERNAME"
              type="text"
              onChange={userNameHandler}
            />
            <p className="fields-label">EMAIL</p>
            <input
              className="input-inner-colore input-field"
              name="email"
              placeholder="Email"
              type="email"
              onChange={emailHandler}
            />
            <p className="fields-label">PASSWORD</p>

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
            <p className="fields-label">CONFIRM PASSWORD</p>

            <input
              className="input-inner-colore input-field"
              name="password"
              id="loginPassword"
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              onChange={confirmPasswordHandler}
            />
            <img
              src={showConfirmPassword ? eyeslash : eye}
              alt="eyeicon"
              className="eye-icon"
              onClick={() => setShowConfirmPassWord(!showConfirmPassword)}
            />

            {/* <p className="fields-label">CATEGORIES</p>
            <input
              className="input-inner-colore input-field"
              name="email"
              placeholder="Category"
              type="text"
                onChange={categoryHandler}
            /> */}
          </div>
          <div>
            <button className="signup" onClick={signUpHandler}>
              <span className="button-text-color">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
