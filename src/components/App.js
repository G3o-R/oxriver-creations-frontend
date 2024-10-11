import '../styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import HeroSection from './HeroSection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <HeroSection /> */}
    </div>
  );
}

export default App;
