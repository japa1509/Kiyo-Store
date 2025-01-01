import { useContext } from "react";
import { ShoppingContext } from "../../context";
import { PropTypes } from "prop-types";
import { FaCartPlus, FaCheck } from "react-icons/fa";
import { useRating } from "../../hooks/useRating";

export function Card({ data }) {
  const {
    openProductDetail,
    setProductToShow,
    cartProducts,
    openCheckoutSideMenu,
    closeProductDetail,
    setCartProducts,
  } = useContext(ShoppingContext);

  const { rating, renderStars } = useRating(data.rating || 0);

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
  };

  const handleAddToCart = (event, productData) => {
    event.stopPropagation();
    const isInCart = cartProducts.some(product => product.id === productData.id);

    if (isInCart) {
      const updatedCart = cartProducts.map(product =>
        product.id === productData.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCartProducts(updatedCart);
    } else {
      const newProduct = { ...productData, quantity: 1 };
      setCartProducts([...cartProducts, newProduct]);
    }

    if (window.innerWidth >= 768) {
      openCheckoutSideMenu();
    }
    closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart = cartProducts.some(product => product.id === id);
    return (
      <div
        className="bg-gradient-to-r from-[#ffba00] to-[#ff6c00] flex justify-center items-center bg- w-8 h-8 rounded-full m-2 p-1 shadow-md cursor-pointer"
        onClick={(event) => !isInCart && handleAddToCart(event, data)}
      >
        {isInCart ? (
          <FaCheck className="text-white" />
        ) : (
          <FaCartPlus className="text-white"><p>Add to Cart</p></FaCartPlus>
        )}
      </div>
    );
  };

  return (
    <div
  className="hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-shadow duration-300 cursor-pointer px-2 sm:px-4 py-2 md:w-64 w-full rounded-lg overflow-hidden"
  onClick={() => showProduct(data)}
>
  <figure className="relative mb-4 w-full sm:h-44 h-36">
    <span className="absolute bottom-2 left-2 bg-white/70 rounded-lg text-black text-xs m-2 px-3 py-0.5 shadow-md">
      {data.category}
    </span>
    <img
      className="h-full w-full object-cover"
      src={data.image}
      alt={data.title}
    />
  </figure>
  <div className="flex flex-col justify-between min-h-[80px]">
    {/* Título con altura mínima */}
    <span
      className="text-sm font-semibold text-gray-700 line-clamp-2 min-h-[40px]"
    >
      {data.title}
    </span>
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center gap-3 mt-2">
        <span className="text-xl font-bold text-gray-900">${data.price}</span>
        <span className="text-[#cccccc] text-xl line-through"> $999</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="flex"> {renderStars()} </span>
        {renderIcon(data.id)}
      </div>
    </div>
  </div>
</div>

  );
}

Card.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
