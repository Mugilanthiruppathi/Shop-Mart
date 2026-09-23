import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../Components/productCard";
function Home() {
  const featuredProducts = products.slice(0, 4);
  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            ✨ NEW COLLECTION 2026
          </span>
          <h1>
            Shop Smart.
            <br />
            <span>Live Better.</span>
          </h1>
          <p>
            Discover amazing products, exclusive deals
            and everything you need in one place.
          </p>
          <div className="hero-buttons">
            <Link to="/products">
              <button className="shop-btn">
                Shop Now 🛍️
              </button>
            </Link>
            <Link to="/products">
              <button className="explore-btn">
                Explore Products →
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* CATEGORY SECTION */}
      <section className="home-section categories-section">
        <div className="category-heading">
          <span>EXPLORE COLLECTION</span>
          <h2>Shop By Category</h2>
          <p>Find everything you need in one place</p>
        </div>
        <div className="category-cards">
          <div className="category-card category-fashion">
            <div className="category-icon">
              👕
            </div>
            <div className="category-content">
              <h3>Fashion</h3>
              <p>Trending styles & outfits</p>
              <Link to="/products">
                Explore →
              </Link>
            </div>
            <div className="category-number">
              01
            </div>
          </div>
          <div className="category-card category-electronics">
            <div className="category-icon">
              📱
            </div>
            <div className="category-content">
              <h3>Electronics</h3>
              <p>Smart gadgets & devices</p>
              <Link to="/products">
                Explore →
              </Link>
            </div>
            <div className="category-number">
              02
            </div>
          </div>
          <div className="category-card category-home">
            <div className="category-icon">
              🏠
            </div>
            <div className="category-content">
              <h3>Home</h3>
              <p>Make your home beautiful</p>
              <Link to="/products">
                Explore →
              </Link>
            </div>
            <div className="category-number">
              03
            </div>
          </div>
          <div className="category-card category-accessories">
            <div className="category-icon">
              🎒
            </div>
            <div className="category-content">
              <h3>Accessories</h3>
              <p>Complete your style</p>
              <Link to="/products">
                Explore →
              </Link>
            </div>
            <div className="category-number">
              04
            </div>
          </div>
        </div>
      </section>
      {/* FEATURED PRODUCTS */}
      <section className="home-section featured-section">

        <div className="section-header">
          <div>
            <span className="section-label">
              ⭐ HANDPICKED FOR YOU
            </span>
            <h2>Featured Products</h2>
            <p>
              Explore our most popular products
            </p>
          </div>
          <Link to="/products" className="view-all">
            View All →
          </Link>
        </div>
        <div className="featured-products">
          {featuredProducts.map((product, index) => (
            <div
              className={`featured-card card-${index + 1}`}
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
      {/* SPECIAL OFFER */}
        <section className="offer-banner">
          <div className="offer-content">
            <span>🔥 LIMITED TIME OFFER</span>
            <h2>
              Get Up To <strong>30% OFF</strong>
            </h2>
            <p>
              Grab your favorite products before the offer ends.
            </p>
            <Link to="/products">
              <button>
                Shop Offers →
              </button>
            </Link>
          </div>
          <div className="offer-shape">
            🛍️
          </div>
        </section>
        {/* CUSTOMER REVIEWS */}
        <section className="reviews-section">
          <div className="reviews-heading">
            <span>WHAT OUR CUSTOMERS SAY</span>
            <h2>Customer Reviews</h2>
            <p>Trusted by shoppers who love ShopEase</p>
          </div>
          <div className="reviews-container">
            <div className="review-card">
              <div className="review-top">
                <div className="review-avatar">A</div>
                <div>
                  <h3>Arun Kumar</h3>
                  <p>Verified Customer</p>
                </div>
              </div>
              <div className="review-stars">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="review-text">
                "Amazing shopping experience! The products
                are really good and the website is easy to use."
              </p>
            </div>
            <div className="review-card">
              <div className="review-top">
                <div className="review-avatar">S</div>
                <div>
                  <h3>Surya</h3>
                  <p>Verified Customer</p>
                </div>
              </div>
              <div className="review-stars">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="review-text">
                "I really liked the product quality.
                The cart and checkout process are very smooth."
              </p>
            </div>
            <div className="review-card">
              <div className="review-top">
                <div className="review-avatar">P</div>
                <div>
                  <h3>Priya</h3>
                  <p>Verified Customer</p>
                </div>
              </div>
              <div className="review-stars">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="review-text">
                "Beautiful website and easy navigation.
                I would definitely shop again!"
              </p>
            </div>
          </div>
        </section>
        {/* NEWSLETTER */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <span>📩 STAY UPDATED</span>
            <h2>Get Exclusive Offers</h2>
            <p>
              Subscribe to our newsletter and receive
              latest products, offers and updates.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
              <button type="submit">
                Subscribe →
              </button>
            </form>
            <small>
              🔒 We respect your privacy. No spam.
            </small>
          </div>
        </section>
    </main>
    );
  }

export default Home;