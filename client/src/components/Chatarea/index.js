import React from "react";
import './index.scss'
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import socket from "../../utils/socketconnection";
import { useLocation } from 'react-router-dom';

const Chatarea = () => {

    const location = useLocation();
    const [rerender, setrernder] = useState()
    useEffect(() => {
        setrernder('hell yeah!!')
    },[location.pathname])

    useEffect(() => {
        console.log('mounted')
        socket.emit('leave-prev-chat');
        socket.emit('pv-chat', location.state.chatid)
    })
    

    const [inputValue,setInputvalue] = useState('')

    useEffect(() => {
        const textarea = document.getElementById('myTextarea');
        const inputarea = document.getElementById('appending')
    
        const maxRows = 7;
        const textareaRows = textarea.value.split('\n').length;
        
        if (textareaRows > maxRows) {
          textarea.style.overflowY = 'scroll';
        } else {
            textarea.style.height = '25px';
            textarea.style.height = `${textarea.scrollHeight}px`;
            textarea.style.overflowY = 'hidden';
            inputarea.style.height = `${textarea.scrollHeight + 10}px`;
        }
      }, [inputValue]);



      socket.on('recieve-msg', msg => {
        console.log(msg)
      })

      const handlesendarrow = () => {
            socket.emit('send-message', inputValue , location.state.chatid)
            document.getElementById('myTextarea').value = '';
      }

    return (
        <div className="MainChatArea">
            <div className="Navtop">
                <Loadtopnav />
            </div>
            <div className="Chatarea">

            </div>
            <div id="appending" className="Inputarea">
                <textarea spellCheck="false" id="myTextarea" onChange={(e) => setInputvalue(e.target.value)} className="inputelem" placeholder="Type a message...."/>
                <IoSend onClick={handlesendarrow} className="Send-chat-button" />
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
