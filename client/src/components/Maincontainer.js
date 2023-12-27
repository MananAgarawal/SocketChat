import './mystyles.scss'
import React from 'react';
import Sidebar from './sidebar'
import Chatarea from './Chatarea';



const Maincontainer = () => {
    return (
        <div className ='conatiner'>
            <Sidebar />
            <Chatarea />
        </div>
    );
}

export default Maincontainer;
