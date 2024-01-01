import { Route, Routes } from 'react-router-dom';
import './App.scss';
import LogorSign from './components/Loginorsignup';
import Maincontainer from './components/Maincontainer';
import Welcome from './components/welcome';
import Chatarea from './components/Chatarea';
import Creategroup from './components/Creategroups';
import Adduser from './components/Addusers';

function App() {
  return (
      <div className="App">
        <Routes>
            <Route path='/' element={<LogorSign/>} />
            <Route path='/App' element={<Maincontainer />}>
                <Route index element={<Welcome />} />
                <Route path='chat' element={<Chatarea />}/>
                <Route path='creategroup' element={<Creategroup />}/>
                <Route path='Add' element={<Adduser />}/>
            </Route>
        </Routes>
      </div>
   
  );
}

export default App;
