import React, { useState } from "react";
import { FaRegUserCircle, FaRandom } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { IoMdPersonAdd, IoMdMoon } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import "./index.scss";
import "../mystyles.scss";

const Sidebar = () => {

    const [conversations,setconvo] = useState([
        {
            name : "Manan",
            lastM : "alr then see ya",
            timestamp : "today"
        },
        {
            name : "Golu",
            lastM : "alr then see ya",
            timestamp : "today"
        },
        {
            name : "Aalu",
            lastM : "alr then see ya",
            timestamp : "today"
        },
    ])

  return (
    <div className="Mainsidebar">
      <div className="navheader">
        <span className="icons mainuser">
          <FaRegUserCircle />
        </span>
        <span className="icons">
          <FaRandom />
        </span>
        <span className="icons">
          <IoMdPersonAdd />
        </span>
        <span className="icons">
          <IoMdMoon />
        </span>
        <span className="icons">
          <TiGroup />
        </span>
      </div>
      <div className="searchandfilter">
        <div className="search">
          <label htmlFor="myInput" className="searchicon">
            <GoSearch />
          </label>
          <input
            type="text"
            id="myInput"
            placeholder="Search chat"
            className="searchinput"
          />
        </div>
        <div className="filter">
          <CiFilter />
        </div>
      </div>
      <div className="conversation">
        <Loadchats convo={conversations} />
      </div>
    </div>
  );
};

const Loadchats = () => {
  return (
    <div className="chat-container">
      
    </div>
  );
};

export default Sidebar;
