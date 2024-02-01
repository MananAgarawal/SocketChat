import './index.scss'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Chats = ({Chatid}) => {
    
    const Messages = useSelector((state) => state.Messages);
    const FilteredMessages = Messages.filter(obj => obj.MsgId === Chatid)
    return (
        <div>
            <div className='Main-Message-area'>
                 {FilteredMessages.map((indimsg,index) => (
                    <div key={index} className='Message-container'>
                        <div className='upperflex'>
                        <div className='SendedByName'>{indimsg.SendedBy.charAt(0).toUpperCase() + indimsg.SendedBy.slice(1)}</div>
                        <div className='TimeStampOfMessage'> {new Date(indimsg.Timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                        </div>
                        <p className='Message-itself'>{indimsg.ActualMessage}</p>
                    </div>
                 ))}
            </div>
        </div>
    );
}

export default Chats;