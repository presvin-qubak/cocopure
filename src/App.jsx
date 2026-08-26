import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Benefits from "./pages/Benefits/Benefits";
import Products from "./pages/Product/Products";
import Contact from "./pages/Contact/Contact";
import ViewProducts from "./pages/ViewProducts/ViewProducts";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

        {/* Product Details */}
        <Route
          path="/view-products/:id"
          element={<ViewProducts />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;