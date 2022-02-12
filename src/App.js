import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import WineList from './components/WineList';
import NavBar from "./components/Navbar";
import Home from './components/Home';
import WineName from './components/WineName';
import './App.css'
import axios from 'axios';


function App() {

  const [wineList, setWineList] = useState([]);

  const getWines = async () => {
    const { data } = await axios.get('https://quiniwine.com/api/pub/wineCategory/p/0/10');
    setWineList(data);
  }

  useEffect(() => {
    getWines();
  }, [])
  
  
  console.log(wineList)

  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path="/wines" element={<WineList wineList={wineList} />} />
          <Route path="/favorites" element={<WineName/>}/>
        </Routes>

    </div>
  );
}

export default App;