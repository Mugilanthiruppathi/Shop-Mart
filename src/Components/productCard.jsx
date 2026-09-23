import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useFavorites } from "../Context/FavoritesContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="product-card">

      {/* IMAGE */}
      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

        {/* FAVORITE */}
        <button
          className="favorite-btn"
          onClick={() => toggleFavorite(product)}
        >
          {isFavorite(product.id) ? "❤️" : "🤍"}
        </button>

        {/* DISCOUNT */}
        <span className="discount-badge">
          20% OFF
        </span>

      </div>


      {/* PRODUCT DETAILS */}
      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        {/* RATING */}
        <div className="rating">
          ⭐⭐⭐⭐⭐
          <span> (4.8)</span>
        </div>

        {/* PRICE */}
        <div className="price-section">
          <h4>₹{product.price}</h4>
          <span className="old-price">
            ₹{product.price + 500}
          </span>
        </div>


        {/* BUTTONS */}
        <div className="product-buttons">

          <Link to={`/product/${product.id}`}>
            <button className="view-btn">
              View Details
            </button>
          </Link>

          <button
            className="cart-btn"
            onClick={() => addToCart(product)}
          >
            🛒 Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;