import React from "react";
import "./index.scss";
import chatgif from "../../Assets/images/chat.gif";
import { useState } from "react";
import { ToastContainer , toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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

      document.getElementById('username').value = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';

      console.log(json.msg);
      
      if(json.msg === 'Success'){
        toast("Account Created Succesfully");
      } 
      else if (json.msg ==='Invalid email format'){
        toast("Invalid email format");
        return;
      }
      else if (json.msg ==='Email Already Exists'){
        toast("Email Already Exists");
        return;
      }

      
      
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
                      id="username"
                      className="username"
                      required
                    />
                    <input id="email" onChange={HandleInputChange} name="Mail" type="Email" placeholder="email" className="email" required />
                    <input
                      id="password"
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
      <ToastContainer />
    </div>
  );
};

export default LogorSign;
