import React from "react";
import "./index.scss";
import chatgif from "../../Assets/images/chat.gif";
import { useState } from "react";

const LogorSign = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const toggleForm = () => {
    console.log(isLoginFormVisible);

    setLoginFormVisible((prev) => !prev);
  };


const HandleLoginSubmit = () => {

}


const HandleSignUpSubmit = () => {


    
}

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
            {isLoginFormVisible ? (
              <div className="Signup">
                <h1 className="signtext">Signup</h1>
                <form onSubmit={HandleSignUpSubmit} className="signup-form-submit">
                  <div className="formarea">
                    <input
                      placeholder="Username"
                      className="username"
                      required
                    />
                    <input placeholder="Email" className="email" required />
                    <input
                      placeholder="Password"
                      className="password"
                      required
                    />
                    <button className="signup-btn">Submit</button>
                  </div>
                </form>
                <div className="slideup">
                  <h3 onClick={toggleForm} className="signupbutton">
                    <span>or</span>Login
                  </h3>
                </div>
              </div>
            ) : (
              <div className="Login">
                <div className="slidedown">
                  <h3 onClick={toggleForm} className="sign-uptog">
                    <span>or</span>Signup
                  </h3>
                </div>
                <form onSubmit={HandleLoginSubmit} className="login-form-submit">
                  <div className="formarea">
                    <input placeholder="Username" className="username" required/>
                    <input placeholder="Password" className="password" require/>
                    <button className="login-btn">Submit</button>
                  </div>
                </form>
                <h1 className="Login-text">Login</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogorSign;
