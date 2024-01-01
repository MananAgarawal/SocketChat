import React from "react";
import "./index.scss";

const Creategroup = () => {


  return (
    <div className="Main-welcome">
      <div className="Navtop">
      </div>
      <div className="Chatarea">
        <form>
          <div className="create-groups-flex">
            <label htmlFor="groupName">Group Name:</label>
            <input type="text" id="groupName" name="groupName" required />
            <label htmlFor="groupDescription">Group Description:</label>
            <input type="text" id="groupDescription" name="groupDescription" required />
            <label htmlFor="groupMembers">Max Members:</label>
            <input type="Number" id="groupMembers" name="groupMembers" required />
            <button type="submit">Create Group</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Creategroup;
