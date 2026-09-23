import { useCart } from "../Context/CartContext";

function CartToast() {
  const { cartMessage } = useCart();

  if (!cartMessage) return null;

  return (
    <div className="toast-popup">

      <img
        src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
        alt="Success"
        className="success-gif"
      />

      <div className="toast-text">
        <strong>Added to Cart! 🎉</strong>

        <p>{cartMessage}</p>
      </div>

    </div>
  );
}

export default CartToast;