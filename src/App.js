import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom'
import WineList from './components/WineList';
import NavBar from "./components/Navbar";
import Home from './components/Home';
import './App.css'
import WineName from './components/WineName';
import Favorites from './components/Favorites';
import { Button } from 'bootstrap';
import About from './components/About';
import Footer from './components/Footer';
import CardAbout from './components/CardAbout';
import React from 'react';



function App() {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/wines" element={<WineList />} />
          <Route path="/wine-details" element={<WineName/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
      

  
  );
}

export default App;