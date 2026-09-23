import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>ShopEase<span>.</span></h2>

          <p>
            Shop smart. Shop easy.
            Discover quality products at amazing prices.
          </p>

          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/cart">Cart</Link>
        </div>


        {/* CUSTOMER SERVICE */}
        <div className="footer-column">
          <h3>Customer Service</h3>

          <a href="#">Contact Us</a>
          <a href="#">Shipping & Delivery</a>
          <a href="#">Returns & Refunds</a>
          <a href="#">Privacy Policy</a>
        </div>


        {/* CONTACT */}
        <div className="footer-column">
          <h3>Contact</h3>

          <p>📧 support@shopease.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Tamil Nadu, India</p>
        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 <strong>ShopEase</strong>. All Rights Reserved.
        </p>

        <p>
          Made with ❤️ using React.js
        </p>

      </div>

    </footer>
  );
}

export default Footer;