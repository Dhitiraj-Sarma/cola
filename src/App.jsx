import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Brands from "./Pages/Brands";

import Impact from "./Pages/Impact";
import Shop from "./Pages/Shop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./Pages/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:id" element={<Products />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
