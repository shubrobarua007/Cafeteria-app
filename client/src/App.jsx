import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import MenuDisplay from "./components/MenuDisplay/MenuDisplay";
import { FoodProvider } from "./components/FoodContext/FoodContext";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="main">
      <FoodProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menulist" element={<MenuDisplay />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/placeorder" element={<PlaceOrder/>}/>
        </Routes>
        <Contact/>
      </FoodProvider>
    </div>
  );
}

export default App;
