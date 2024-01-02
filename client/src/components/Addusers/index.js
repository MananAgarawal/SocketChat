import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./index.scss";

const Adduser = () => {
  const [Useremail, setUeremail] = useState("");

  const HandleOnUserEmailSubmit = async (e) => {
    e.preventDefault();
    const AuthToken = localStorage.getItem("AuthToken");
    try {
      const response = await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {
          authorization: AuthToken,
          "content-type": "application/json",
        },
        body: JSON.stringify({ Useremail }),
      });
      const json = await response.json();
      toast(`${json.msg}`);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="Main-welcome">
      <div className="Navtop"></div>
      <div className="Chatarea">
        <form onSubmit={HandleOnUserEmailSubmit}>
          <div className="create-groups-flex">
            <label htmlFor="groupName">User Email:</label>
            <input
              onChange={(e) => {
                setUeremail(e.target.value);
              }}
              type="email"
              id="groupName"
              name="groupName"
              required
            />
            <button type="submit">Add to Chat</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Adduser;
