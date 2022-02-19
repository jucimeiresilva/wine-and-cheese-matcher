import React, { useState } from 'react';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom'
import WineList from './components/WineList';
import NavBar from "./components/Navbar";
import Home from './components/Home';
import './App.css'
import WineDetail from './components/WineDetail';
import Favorites from './components/Favorites';
import { Button } from 'bootstrap';
import About from './components/About';
import Footer from './components/Footer';

const winesMock = [
  {
    _id: "61f5e9ec1bbc4151e0d11e9d",
    id: "61f5e9ec1bbc4151e0d11e9d",
    Name: "Chalk Hill Pinoit Noir Sonoma Coast 2018",
    Winery: "Chalk Hill",
    Area: "Sonoma Coast",
    Province: "California",
    Country: "United States",
    Varietal: "Pinot Noir",
    vintage: "2018",
    nameClean: "Chalk Hill Pinoit Noir Sonoma Coast 2018 Chalk Hill Pinot Noir",
    Style: "",
    Tags: "",
    Type: "Red",
    count: 1,
    rating: 80.1189466,
  },
  {
    _id: "61dcac62398a7f695149d426",
    id: "61dcac62398a7f695149d426",
    Name: "Maggio Estates Chardonnay 2020",
    Winery: "Oak Ridge Winery",
    Area: "Lodi",
    Province: "California",
    Country: "United States",
    Varietal: "Chardonnay",
    vintage: "2020",
    nameClean: "Maggio Estates Chardonnay 2020 Oak Ridge Winery Chardonnay",
    Style: "",
    Tags: "",
    Type: "White",
    count: 99,
    rating: 77.68064496470588,
  },
  {
    _id: "61eade515846da33135c52d0",
    id: "61eade515846da33135c52d0",
    Name: "Cakebread Cabernet Sauvignon 2018",
    Winery: "Cakebread Cellars",
    Area: "Napa Valley",
    Province: "California",
    Country: "United States",
    Varietal: "Cabernet Sauvignon",
    vintage: "2018",
    nameClean:
      "Cakebread Cabernet Sauvignon 2018 Cakebread Cellars Cabernet Sauvignon",
    Style: "",
    Tags: "",
    Type: "Red",
    count: 27,
    rating: 86.66419288000002,
  },
  {
    _id: "61b8f5e176187524a86fb196",
    id: "61b8f5e176187524a86fb196",
    Name: "Dirty Laundry 'Hush' Red 2020 VQA",
    Winery: "Dirty Laundry Vineyard",
    Area: "Okanagan Valley",
    Province: "British Columbia",
    Country: "Canada",
    Varietal: "Red Blend",
    vintage: "2020",
    nameClean:
      "Dirty Laundry 'Hush' Red 2020 VQA Dirty Laundry Vineyard Red Blend",
    Style: "",
    Tags: "",
    Type: "Red",
    count: 25,
    rating: 74.94556380000002,
  },
  {
    _id: "61b8f44e76187524a86fb195",
    id: "61b8f44e76187524a86fb195",
    Name: "Evolve Pinot Gris 2020 VQA",
    Winery: "Evolve Cellars",
    Area: "Okanagan Valley",
    Province: "British Columbia",
    Country: "Canada",
    Varietal: "Pinot Gris",
    vintage: "2020",
    nameClean: "Evolve Pinot Gris 2020 VQA Evolve Cellars Pinot Gris",
    Style: "",
    Tags: "",
    Type: "White",
    count: 27,
    rating: 75.02919288000001,
  },
  {
    _id: "61661757df79fd5fce1cfb5e",
    id: "61661757df79fd5fce1cfb5e",
    Name: "Chronos Sauvignon Blanc 2020",
    Winery: "TIME Family of Wines",
    Area: "Okanagan Valley",
    Province: "British Columbia",
    Country: "Canada",
    Varietal: "Sauvignon Blanc",
    vintage: "2020",
    nameClean:
      "Chronos Sauvignon Blanc 2020 TIME Family of Wines Sauvignon Blanc",
    Style: "",
    Tags: "",
    Type: "White",
    count: 35,
    rating: 73.81778385263158,
  },
  {
    _id: "616619677305131be7ef8155",
    id: "616619677305131be7ef8155",
    Name: "Dirty Laundry Sparkling 2020 VQA",
    Winery: "Dirty Laundry Vineyard",
    Area: "Okanagan Valley",
    Province: "British Columbia",
    Country: "Canada",
    Varietal: "White Blend",
    vintage: "2020",
    nameClean:
      "Dirty Laundry Sparkling 2020 VQA Dirty Laundry Vineyard White Blend",
    Style: "Sparkling",
    Tags: "",
    Type: "White",
    count: 39,
    rating: 78.28037586666667,
  },
  {
    _id: "617c9ff8810ec1371e5a855f",
    id: "617c9ff8810ec1371e5a855f",
    Name: "Painted Rock Merlot 2018 VQA",
    Winery: "Painted Rock Estate Winery",
    Area: "Okanagan Valley",
    Province: "British Columbia",
    Country: "Canada",
    Varietal: "Merlot",
    vintage: "2018",
    nameClean: "Painted Rock Merlot 2018 VQA Painted Rock Estate Winery Merlot",
    Style: "",
    Tags: "",
    Type: "Red",
    count: 5,
    rating: 70.01572329999999,
  },
  {
    _id: "61b8f493771092772f92692b",
    id: "61b8f493771092772f92692b",
    Name: "Chronos Riesling 2020 VQA",
    Winery: "TIME Family of Wines",
    Area: "Okanagan Valley",
    Province: "British Columbia",
    Country: "Canada",
    Varietal: "Riesling",
    vintage: "2020",
    nameClean: "Chronos Riesling 2020 VQA TIME Family of Wines Riesling",
    Style: "",
    Tags: "",
    Type: "White",
    count: 26,
    rating: 82.71468228965517,
  },
  {
    _id: "615bd4bff99a6a6428f4c370",
    id: "615bd4bff99a6a6428f4c370",
    Name: "M. Chapoutier Les Meysonniers Syrah 2016",
    Winery: "M. Chapoutier",
    Area: "Crozes-Hermitage",
    Province: "",
    Country: "France",
    Varietal: "Syrah",
    vintage: "2016",
    nameClean: "M. Chapoutier Les Meysonniers Syrah 2016 M. Chapoutier Syrah",
    Style: "",
    Tags: "",
    Type: "Red",
    count: 1,
    rating: 79.14394659999999,
  },
  {
    _id: "6185b74424c44135120f86d4",
    id: "6185b74424c44135120f86d4",
    Name: "Joseph Phelps Freestone Vineyards Sonoma Coast Pinot Noir 2019",
    Winery: "Joseph Phelps",
    Area: "Sonoma",
    Province: "California",
    Country: "United States",
    Varietal: "Pinot Noir",
    vintage: "2019",
    nameClean:
      "Joseph Phelps Freestone Vineyards Sonoma Coast Pinot Noir 2019 Joseph Phelps Pinot Noir",
    Style: "Red",
    Tags: "",
    Type: "Red",
    count: 98,
    rating: 80.98540382574257,
  },
];

function App() {

  const [wines, setWines] = useState(winesMock);
  

  return (
      <div className="App">
        <NavBar/>
          <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path="/wines" element={<WineList wineList={wines} />} />
            <Route path="/wine/:id" element={<WineDetail wineList={wines}/>}/>
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        <Footer/>
      </div>
  );
}

export default App;