import React, { useState, useEffect } from "react";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import WineList from "./components/WineList";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import WineDetail from "./components/WineDetail";
import Favorites from "./components/Favorites";
import About from "./components/About";
import axios from "axios";


function App() {

  const [wineList, setWineList] = useState([]);

  const getWines = async () => {
    const { data } = await axios.get('https://quiniwine.com/api/pub/wineCategory/p/0/200');
    setWineList(data);
  }

  useEffect(() => {
    getWines();
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wines" element={<WineList wineList={wineList} />} />
        <Route path="/wine/:id" element={<WineDetail wineList={wineList} />} />
        <Route path="/favorites" element={<Favorites wineList={wineList} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
