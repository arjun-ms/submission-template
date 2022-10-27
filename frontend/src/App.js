import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Pages/Home';
import Handicraft from './Pages/Handicrafts';
import Painting from './Pages/Painting';
import Digitalart from './Pages/Digitalart';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/handicraft" element={<Handicraft />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/digitalart" element={<Digitalart />} />
      </Routes>
    </div>
  );
}

export default App;
