import { BrowserRouter, Route,Routes,Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home  from './pages/Home';
import { About }  from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

function App() {
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
        <li>
          <Link to="/post">Post</Link>
        </li>





      </ul>
    </div>
    <Routes>
    <Route path='/' element={<Home/>} exact/>
    <Route path='/about' element={<About/>} exact/>
    <Route path='/profile' element={<Profile/>} exact/>
    <Route path='/post/:id' element={<Post/>} exact/>

    <Route path="*" element={<NotFound/>} exact/>
    <div>post</div>




    </Routes>
    </BrowserRouter>
  );
}

export default App;
