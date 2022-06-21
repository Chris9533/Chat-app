import './App.css';
import { Profile } from "./components/profile"
import { Home } from './components/home';
import Chat from "./components/chat"
import { Friends } from './components/friends';
import {Routes, Route, Link} from "react-router-dom"


const App = () => {

  return (
  <>
  <header>
    <h1 className='title'>NC-Chat</h1>
    <nav className='navbar'>
    <Link className="nav-title" to="/">
            <span className="material-symbols-outlined">Home</span>
    </Link>
    <Link className="nav-title" to="/friends">
            <span className="material-symbols-outlined">Friends</span>
    </Link>
    <Link className="nav-title" to="/profile">
            <span className="material-symbols-outlined">Profile</span>
    </Link>
    </nav>

  </header>

  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/friends" element={<Friends />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="anything" element={<Profile />} />
  </Routes>
    
  </>
  );
}

export default App;
