import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <main className="cart-page">
      <h1>Shopping Cart 🛒</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div className="quantity">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
                <Link to="/checkout">
                    <button className="checkout-btn">
                        Proceed to Checkout 💳
                    </button>
                </Link>
              </div>
            </div>
          ))}
          <h2>Total: ₹{totalPrice}</h2>
        </>
      )}
    </main>
  );
}

export default Cart;