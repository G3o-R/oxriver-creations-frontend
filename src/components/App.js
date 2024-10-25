import '../styles/App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from './Navbar';
import Services from '../pages/Services';
import ProductsPage from '../pages/ProductsPage';

function App() {
  const [categoriesArray, setCategoriesArray] = useState([])
  const [bestSellersArray, setBestSellersArray] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/resources")
    // fetch("/.netlify/functions/getResources")
        .then((res) => res.json())
        .then((data) => {
            setCategoriesArray(data.categories)
            setBestSellersArray(data.best_sellers)
            setIsLoading(false)
        });
}, []);

if (isLoading){
  return (
      <div>loading please wait</div>
  )
}

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home categoriesArray={categoriesArray} bestSellersArray={bestSellersArray}/>} />
          <Route path="/products" element={<ProductsPage categoriesArray={categoriesArray} />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
