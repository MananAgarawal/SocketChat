import { useState, useEffect } from "react";
import { FaRegUserCircle, FaRandom } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { IoMdPersonAdd, IoMdMoon } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import { json, useNavigate } from "react-router-dom";
import "./index.scss";
import "../mystyles.scss";
import { useDispatch, useSelector } from "react-redux";
import { TURNOFF, TURNON } from "../../redux/slices/loaderslice";

const Sidebar = () => {
  const navigate = useNavigate();
  const Loader = useSelector((state) => state.Loader);
  const dispatch = useDispatch();
  const [chats, setchats] = useState(<div></div>);

  useEffect(() => {
    try {
      const LoadChats = async () => {
        const AuthToken = localStorage.getItem("AuthToken");
        const response = await fetch("http://localhost:5000/allchats", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: AuthToken,
          },
        });
        const json = await response.json();
        setchats(<ChatFormat convo={json.conversations} you={json.you} />);
        dispatch(TURNOFF());
      };
      LoadChats();
    } catch (error) {
      console.error("Error", error);
      dispatch(TURNOFF());
    }
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
        <span
          onClick={() => {
            navigate("add");
          }}
          className="icons"
        >
          <IoMdPersonAdd />
        </span>
        <span className="icons">
          <IoMdMoon />
        </span>
        <span
          onClick={() => {
            navigate("creategroup");
          }}
          className="icons"
        >
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
        {Loader ? (
          <div className="loader-container">
            <span className="loader"></span>
          </div>
        ) : (
          chats
        )}
      </div>
      <div className="brute-forcing-the-overflow"></div>
    </div>
  );
};

const ChatFormat = ({ convo, you }) => {

  const navigate = useNavigate();

  const HandleIndiConvoRender = () => {
    navigate("chat");
  };

  return (
    <div className="chat-container">
      {convo.map((curConvo) => (
        <div key={curConvo.chatid} onClick={HandleIndiConvoRender} className="indi-convo">
          <p className="convo-icon">{curConvo.chatname.find(name => name!= you)?.[0]}</p>
          <p className="convo-name">{curConvo.chatname.find(name => name!= you)}</p>
          <p className="convo-lastM">start chatting now</p>
          <p className="convo-timestamp">today</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
