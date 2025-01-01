import { FaTimes } from "react-icons/fa";
import { OrderCard } from "../OrderCard";
import { formatTotalPrice } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { useCart } from "../../hooks/useCart";

export function CheckoutSideMenu() {
  const {
    cartProducts,
    isCheckoutSideMenu,
    closeCheckoutSideMenu,
    handleDelete,
    handleQuantityChange,
    handleCheckout
  } = useCart();

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBuy = () => {
    if (!user) {
      navigate("/sign-in");
    } else {
      handleCheckout();
      navigate("/my-Orders/last");
    }
  };

  return (
    <aside
      className={`w-full md:w-[360px] flex-col fixed right-0 top-[68px] h-[calc(100vh-68px)] border border-gray-300 shadow-lg rounded-lg bg-white overflow-hidden z-50 ${isCheckoutSideMenu ? "flex" : "hidden"
        }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="font-medium text-xl">My Order</h2>
        <button onClick={closeCheckoutSideMenu} aria-label="Close menu">
          <FaTimes />
        </button>
      </div>
      <div className="p-6 overflow-y-auto flex-1">
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              {...product}
              handleDelete={handleDelete}
              handleQuantityChange={handleQuantityChange}
              showQuantityButtons={true}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}
      </div>
      <div className="px-6 py-4 border-t border-gray-200">
        <p className="flex justify-between items-center mb-4">
          <span className="font-light text-gray-600">Total:</span>
          <span className="font-medium text-2xl">
            {cartProducts.length > 0 ? formatTotalPrice(cartProducts) : 0}
          </span>
        </p>
        <button
          className="w-full bg-gradient-to-r from-[#ffba00] to-[#ff6c00] py-3 rounded-lg text-white font-bold transition duration-300"
          onClick={handleBuy}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
}
