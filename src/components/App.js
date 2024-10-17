import '../styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from './Navbar';
import Services from '../pages/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* change contact and info to "services" */}
          <Route path="services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      {/* <HeroSection /> */}
    </div>
  );
}

export default App;
