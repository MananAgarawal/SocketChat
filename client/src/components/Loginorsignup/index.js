import React from "react";
import "./index.scss";
import chatgif from "../../Assets/images/chat.gif";
import { useState } from "react";

const LogorSign = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const [AuthInfo,SetAuthInfo] = useState({
        Name : '',
        Mail : '',
        Pass : '',
  })

  const HandleInputChange = (event) => {
        const {name, value} = event.target;
        SetAuthInfo({
          ...AuthInfo,
          [name] : value,
        });
  };


  const toggleForm = () => {
    setLoginFormVisible((prev) => !prev);
  };


const HandleLoginSubmit = () => {

}   




const HandleSignUpSubmit = async (event) => {
      event.preventDefault();

      try{
        const response = await fetch('http://localhost:5005/signup',{
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(AuthInfo)
  
        });

      const json = await response.json();

      await SetAuthInfo({
        Name : '',
        Mail : '',
        Pass : '',
      })

      } catch (error) {
          console.error(`Error :`, error.message)
      }
     
      setLoginFormVisible(false);
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
                      name="Name"
                      onChange={HandleInputChange}
                      placeholder="Username"
                      className="username"
                      required
                    />
                    <input onChange={HandleInputChange} name="Mail" type="Email" placeholder="email" className="email" required />
                    <input
                      onChange={HandleInputChange}
                      name="Pass"
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
                    <input name="Name" placeholder="Username" className="username" required/>
                    <input name="Pass" placeholder="Password" className="password" required/>
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
