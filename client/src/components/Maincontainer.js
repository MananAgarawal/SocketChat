import './mystyles.scss'
import React from 'react';
import Sidebar from './sidebar'
import Chatarea from './Chatarea';
import Welcome from './welcome';
import Creategroup from './Creategroups';

const Maincontainer = () => {
    return (
        <div className ='conatiner'>
            <Sidebar /> 


            {/* <Creategroup /> */}
            {/* <Welcome /> */}
            {/* <Chatarea /> */}
        </div>
    );
}

export default Maincontainer;
