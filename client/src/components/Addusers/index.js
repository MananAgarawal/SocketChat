import React, { useState } from "react";
import "./index.scss";

const Adduser = () => {

    const [Useremail,setUeremail] = useState('');

    const HandleOnUserEmailSubmit = async (e) => {
        e.preventDefault();
     
        const response = await fetch('http://localhost:5000/add',{
            method : 'POST',
            headers : {
                'content-type' : 'application-json'
            },
            body : {
                mail : Useremail,
            }
        })



    
    }

  return (
    <div className="Main-welcome">
      <div className="Navtop"></div>
      <div className="Chatarea">
        <form onSubmit={HandleOnUserEmailSubmit}>
          <div className="create-groups-flex">
            <label htmlFor="groupName">User Email:</label>
            <input onChange={(e) => {setUeremail(e.target.value)}} type="text" id="groupName" name="groupName" required />
            <button type="submit">Add to Chat</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adduser;
