import './index.scss'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const Chats = ({Chatid}) => {
    
    const Messages = useSelector((state) => state.Messages);
    const FilteredMessages = Messages.filter(obj => obj.MsgId === Chatid)
    console.log(Messages)
    return (
        <div>
            <div className='Main-Message-area'>
                 {FilteredMessages.map((indimsg,index) => (
                    <div className='Message-container'>
                        <div className='SendedByName'>{indimsg.SendedBy}</div>
                        <div className='TimeStampOfMessage'>{new Date(indimsg.Timestamp).toLocaleString()}</div>
                        <div className='Message-itself'>{indimsg.ActualMessage}</div>
                    </div>
                 ))}
            </div>
        </div>
    );
}

export default Chats;