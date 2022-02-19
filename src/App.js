import 'bootstrap/dist/css/bootstrap.css';
import WineList from './components/WineList';
import {NavBar} from "./components/Navbar";
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import { Button } from 'bootstrap';


function App() {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path="/wines" element={<WineList />} />
        </Routes>

        <div>
          <button path='/' element={<WineList/>}/>
        </div>
    </div>
    
  );
}

export default App;