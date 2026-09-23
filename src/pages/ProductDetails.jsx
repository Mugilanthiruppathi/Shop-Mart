import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../Context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <main className="product-details">

      {/* PRODUCT IMAGE */}
      <div className="product-details-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>


      {/* PRODUCT INFO */}
      <div className="product-details-info">

        <p className="product-category">
          {product.category}
        </p>

        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p className="product-description">
          {product.description}
        </p>


        {/* BUTTONS */}
        <div className="product-actions">

          <button onClick={() => addToCart(product)}>
            Add to Cart 🛒
          </button>

          <Link to="/cart">
            <button className="buy-btn">
              Go to Cart
            </button>
          </Link>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;