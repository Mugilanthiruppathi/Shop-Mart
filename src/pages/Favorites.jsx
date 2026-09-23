import { Link } from "react-router-dom";
import { useFavorites } from "../Context/FavoritesContext";

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <main className="favorites-page">
      <h1>My Favorites ❤️</h1>

      {favorites.length === 0 ? (
        <h2>No favorite products yet</h2>
      ) : (
        <section className="products">
          {favorites.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <h4>₹{product.price}</h4>

                <Link to={`/product/${product.id}`}>
                  <button>View Details</button>
                </Link>

                <button
                  onClick={() => toggleFavorite(product)}
                >
                  Remove ❤️
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default Favorites;