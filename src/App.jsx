import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./page/Shop";
import Cart from "./page/Cart";
import Error from "./Components/Error";
import { CartContenxt } from "./context/CartContext";

function App() {
  return (
    <CartContenxt>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </CartContenxt>
  );
}

export default App;
