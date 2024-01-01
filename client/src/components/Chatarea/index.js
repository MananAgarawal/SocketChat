import React from "react";
import './index.scss'
import { useState, useEffect } from "react";
import arrow from '../../Assets/images/send-arrow.gif'
import { FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { io  } from 'socket.io-client'

const Chatarea = () => {

    useEffect(() => {
        const socket = io('http://localhost:5000/socket', {
            transports: ['websocket']
         });
        console.log(socket)
        
    
        return () => {
          socket.disconnect();
        };
      }, []);

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const textarea = document.getElementById('myTextarea');
        const inputarea = document.getElementById('appending')
    
        const maxRows = 7;
        const textareaRows = textarea.value.split('\n').length;
        
        if (textareaRows > maxRows) {
          textarea.style.overflowY = 'scroll';
        } else {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
            textarea.style.overflowY = 'hidden';
            inputarea.style.height = `${textarea.scrollHeight + 10}px`;
        }
      }, [inputValue]);


      const handlesendarrow = () => {
            
      }

    return (
        <div className="MainChatArea">
            <div className="Navtop">
                <Loadtopnav />
            </div>
            <div className="Chatarea">
            </div>
            <div id="appending" className="Inputarea">
                <textarea spellCheck="false" id="myTextarea" onChange={(e) => setInputValue(e.target.value)} className="inputelem" placeholder="Type a message...."/>
                <img onClick={handlesendarrow} className="sendarrow" src={arrow}  alt="Looping GIF" />
            </div>
        </div>
    );
}


const Loadtopnav = () => {
    return(
        <div className="maintop">
            <div className="mainpfp">
                <FaUserCircle />
            </div>
            <div className="maintopic">
                <p className="topicname">
                    Name
                </p>
                <p className="topicstatus">
                    status
                </p>
            </div>
            <div className="maindelete">
                <MdDelete />
            </div>
        </div>
    );
}

export default Chatarea;
