import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route, Link} from 'react-router-dom'
import WineList from './components/WineList';
import NavBar from "./components/Navbar";
import Home from './components/Home';
import './App.css'
import WineName from './components/WineName';
import Favorites from './components/Favorites';
import { Button } from 'bootstrap';
import About from './components/About';


function App() {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path="/wines" element={<WineList />} />
          <Route path="/wine-details" element={<WineName/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/home" element={<About/>}/>
        </Routes>

      </div>

  
  );
}

export default App;