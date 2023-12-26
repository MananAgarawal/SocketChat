import './mystyles.scss'
import React from 'react';
import Sidebar from './sidebar'
import Workarea from './workarea';



const Maincontainer = () => {
    return (
        <div className ='conatiner'>
            <Sidebar />
            <Workarea />
        </div>
    );
}

export default Maincontainer;
