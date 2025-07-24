import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import LandingPage from "./Pages/LandingPage";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
