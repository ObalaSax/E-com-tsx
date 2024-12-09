import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Cart from "./Pages/Cart/Cart";
import ProductItem from "./Pages/ProductItem/ProductItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="main-section">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/id" element={<ProductItem />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
