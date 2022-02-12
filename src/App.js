import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom'
import WineList from './components/WineList';
import NavBar from "./components/Navbar";
import Home from './components/Home';
import './App.css'
import WineName from './components/WineName';
import Favorites from './components/Favorites';


function App() {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path="/wines" element={<WineList />} />
          <Route path="/wine-details" element={<WineName/>}/>
          <Route path="/favorites" element={<Favorites />}/>

        </Routes>

    </div>
  );
}

export default App;