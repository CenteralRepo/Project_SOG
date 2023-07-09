import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Login";
import VideoPage from "./Login/VideoPage";
import Signup from "./signup";

const App = () => {
  return (
    <div className="App">
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />}></Route>
          <Route exact path="/signUp" element={<Signup />}></Route>
          <Route exact path='/videoPlayer' element={ <VideoPage /> }></Route>
        </Routes>
      </Router>

      {/* <LoginPage /> */}
    </div>
    </div>
  );
};

export default App;
