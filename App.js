import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/banner_women.jpg";
import men_banner from "./Components/Assets/banner_mens.jpg";
import kid_banner from "./Components/Assets/banner_kids.jpg";
import LoginSignup from "./Pages/LoginSignup";
import Philosophy from "./Pages/Philosophy";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/kitchenessentials" element={<ShopCategory banner={men_banner} category="kitchenessentials" />} />
          <Route path="/breakfastandsnacks" element={<ShopCategory banner={women_banner} category="breakfastandsnacks" />} />
          <Route path="/combo" element={<ShopCategory banner={kid_banner} category="combo" />} />
     
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/philosophy" element={<Philosophy />} />

          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
