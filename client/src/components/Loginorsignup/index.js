import React from "react";
import chatgif from "../../Assets/images/chat.gif";
import { useState, useEffect } from "react";
import { ToastContainer , toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "./index.scss";


const LogorSign = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {

  }, []);

  const toggleForm = () => {
    setLoginFormVisible((prev) => !prev);
    inputcleanup();
  };


  const inputcleanup = () => {
    SetAuthInfo({
      Name : '',
      Mail : '',
      Pass : '',
    })
}



const HandleLoginSubmit = async (event) => {
      setLoading(true);
      event.preventDefault();

      try{
        const response = await fetch("http://localhost:5005/login",{
          method : 'POST',
          headers : {
            'Content-type' : 'application/json'
          },
          body : JSON.stringify(AuthInfo)
      });

      const json = await response.json();

      if (json.msg === 'Email not found'){
          toast("Email not found");
      } else if (json.msg === 'Invalid password'){
          toast("Invalid password");
      } else if (json.msg === 'Authentication successful'){
          localStorage.setItem('AuthToken', json.token);
          toast("Authentication successful");
      } else {
        toast ("Oops something went wrong");
      }

      inputcleanup();

      } catch (error) {
        console.error('Error',error)
      }

      setLoading(false);
}   



const HandleSignUpSubmit = async (event) => {
     setLoading(true);
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

      inputcleanup();

      console.log(json.msg);
      
      if(json.msg === 'Success'){
        toast("Account Created Succesfully");
      } 
      else if (json.msg ==='Invalid email format'){
        toast("Invalid email format");
      }
      else if (json.msg ==='Email Already Exists'){
        toast("Email Already Exists");
      }
    
      } catch (error) {
          console.error(`Error :`, error)
      }
      setLoginFormVisible(false);
      setLoading(false);
}

  return (
    <div className="Mainlogorsign">
      <div className="three">
        <div className="whitey">
          <img className="chatgif" src={chatgif} alt="chatgif" />
        </div>
      </div>
      <div className="seven">
        <div className="graey">
          <div className="MainLogorsign">
          {loading ? (
            <div className="loader-container">
              <span className="loader"></span>
            </div>
            ) : (
              <>
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
                      <input id="email" type="email" onChange={HandleInputChange} name="Mail" placeholder="Email" className="Email" required/>
                      <input id="password" onChange={HandleInputChange} name="Pass" placeholder="Password" className="password" required/>
                      <button className="login-btn">Submit</button>
                    </div>
                  </form>
                  <h1 className="Login-text">Login</h1>
                </div>
              )}
              </>
            )}
          
          </div>
        </div>
      </div>
   
      <ToastContainer />
    </div>
  );
};

export default LogorSign;
