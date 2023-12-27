import React from "react";
import "./index.scss";
import chatgif from "../../Assets/images/chat.gif";
import { useState } from "react";

const LogorSign = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);

  const toggleForm = () => {
    console.log(isLoginFormVisible);

    setLoginFormVisible((prev) => !prev);
  };

  return (
    <div className="Mainlogorsign">
      <div className="three">
        <div className="whitey">
          <img className="chatgif" src={chatgif} />
        </div>
      </div>
      <div className="seven">
        <div className="graey">
          <div className="MainLogorsign">
            <div className="Signup">
              <h1 className="signtext">Signup</h1>
              <form className="signup-form-submit">
                <div className="formarea">
                  <input placeholder="Username" className="username" required />
                  <input placeholder="Email" className="email" required />
                  <input placeholder="Password" className="password" required />
                  <button className="signup-btn">Submit</button>
                </div>
              </form>
              <div className="slideup">
                <h3 onClick={toggleForm} className="Loginbtn">
                  <span>or</span>Login
                </h3>
              </div>
            </div>
            <div className="Login"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogorSign;
