import { useState, useEffect } from "react";
import { FaRegUserCircle, FaRandom } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { IoMdPersonAdd, IoMdMoon } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import "../mystyles.scss";

const Sidebar = () => {
  const [conversations, setconvo] = useState([
    {
      name: "Manan",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Golu",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Aalu",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Manan",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Golu",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Aalu",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Manan",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Golu",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Aalu",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Manan",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Golu",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Aalu",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Manan",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Golu",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Aalu",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Manan",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Golu",
      lastM: "alr then see ya",
      timestamp: "today",
    },
    {
      name: "Aalu",
      lastM: "alr then see ya",
      timestamp: "today",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /app/welcome when the component mounts
    // navigate('/app/welcome');
  }, []);

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
        <span onClick={() => {navigate('creategroup')}} className="icons">
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
      <div id="brute-forced" className="conversation">
        <Loadchats convo={conversations} />
      </div>
      <div className="brute-forcing-the-overflow">

      </div>
    </div>
  );
};

const Loadchats = (props) => {
  return (
    <div className="chat-container">
      {props.convo.map((curConvo, index) => (
        <div key={index} className="indi-convo">
          <p className="convo-icon">{curConvo.name[0]}</p>
          <p className="convo-name">{curConvo.name}</p>
          <p className="convo-lastM">{curConvo.lastM}</p>
          <p className="convo-timestamp">{curConvo.timestamp}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
