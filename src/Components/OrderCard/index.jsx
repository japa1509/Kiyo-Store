import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import PropTypes from "prop-types";
export const OrderCard = (props) => {
  const { title, image, price, id, quantity, handleDelete, handleQuantityChange, showQuantityButtons = true } = props;

  const handleIncrement = () => handleQuantityChange(id, quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) {
      handleQuantityChange(id, quantity - 1);
    }
  };
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price * quantity);

  return (
    <div className="flex items-center gap-4 mb-3 p-2 rounded-lg">
      <figure className="w-16 h-16 flex-shrink-0">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={image}
          alt={title}
        />
      </figure>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <p className="text-sm font-light">{title}</p>
          {handleDelete && (
            <button onClick={() => handleDelete(id)}
             className="text-red-500 hover:text-red-700"
             aria-label="Remove item">
              <FaTimes />
            </button>
          )}
        </div>
        <div className="flex justify-between items-center mt-2">
          {showQuantityButtons ? (
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecrement}
                className="p-1 bg-gradient-to-r from-[#ffba00] to-[#ff6c00] rounded-full transition-colors duration-200"
                aria-label="Decrement quantity"
              >
                <FaMinus className="text-white" />
              </button>
              <span className="px-2">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="p-1 bg-gradient-to-r from-[#ffba00] to-[#ff6c00] rounded-full transition-colors duration-200"
                aria-label="Increment quantity"
              >
                <FaPlus className="text-white" />
              </button>
            </div>
          ) : (
            <span>Cantidad: {quantity}</span>
          )}
          <p className="text-lg font-medium">{formattedPrice}</p>
        </div>
      </div>
    </div>
  );
}

OrderCard.propTypes = { 
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  quantity: PropTypes.number.isRequired,
  handleDelete: PropTypes.func,
  handleQuantityChange: PropTypes.func.isRequired,
  showQuantityButtons: PropTypes.bool }; 
  OrderCard.defaultProps = { showQuantityButtons: true };