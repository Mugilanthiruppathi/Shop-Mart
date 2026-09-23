import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./Context/CartContext";
import { FavoritesProvider } from "./Context/FavoritesContext";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Footer from "./Components/Footer";
import CartToast from "./Components/CartToast";


function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Navbar />
          <CartToast />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/product/:id"
                element={<ProductDetails />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favorites" element={<Favorites/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/products" element={<Products/>} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </FavoritesProvider>
    </CartProvider>
  );
}


export default App;