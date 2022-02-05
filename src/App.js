import 'bootstrap/dist/css/bootstrap.css';
import WineList from './components/WineList';
import {NavBar} from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/wines" element={<WineList />} />
        </Routes>
    </div>
  );
}

export default App;