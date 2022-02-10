import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';
import WineList from './components/WineList';
import NavBar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import './App.css'


function App() {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path="/wines" element={<WineList />} />
          <Route path="/favorites"/>
        </Routes>

    </div>
  );
}

export default App;