import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useFavorites } from "../Context/FavoritesContext";

function Navbar() {
  const { cart } = useCart();
  const { favorites } = useFavorites();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          ShopEase
        </Link>
      </div>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>
        </li>

        <li>
          <Link to="/favorites" onClick={closeMenu}>
            Favorites ❤️ ({favorites.length})
          </Link>
        </li>

        <li>
          <Link to="/cart" onClick={closeMenu}>
            Cart 🛒 ({cart.length})
          </Link>
        </li>

        <li>
          <Link to="/login" onClick={closeMenu}>
            Login 🔐
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;