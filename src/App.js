import { BrowserRouter, Route,Routes,Link, Navigate  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home  from './pages/Home';
import { About }  from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { useState } from 'react';

function App() {
  const [login,setLogin]=useState(false)
  return (
    <BrowserRouter >
        <div className="App">
      <Header/>

      <ul className='nav'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>





      </ul>
      <button onClick={()=>setLogin(!login)}>{login?"logout":"login"}</button>

    </div>
    <Routes>
    <Route path='/' element={<Home/>} exact/>
    <Route path='/about' element={<About/>} exact/>

    <Route path='/profile' element= {login?<Profile/>:<Navigate replace to="/"></Navigate>} />



    <Route path="*" element={<NotFound/>} exact/>




    </Routes>
    </BrowserRouter>
  );
}

export default App;
