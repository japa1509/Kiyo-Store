import { useContext } from "react";
import { ShoppingContext } from "../../context";
import PropTypes from "prop-types";
import { CheckIcon, PlusIcon } from "../Icons";
export function Card({ data }) {
  const {
    openProductDetail,
    setCountCart,
    countCart,
    setProductToShow,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
    closeProductDetail,
  } = useContext(ShoppingContext);

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    setCountCart(countCart + 1);
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
    closeProductDetail();
    console.log(cartProducts);
  };

  const renderIcon = (id) => {
    const isInCart = cartProducts.filter(product => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon />
        </div>
      );
    }else{
      return(
        
      <div
        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        onClick={(event) => addProductsToCart(event, data)}
      >
        <PlusIcon />
      </div>
      )
    }
   
  };
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          className="h-full w-full object-cover"
          src={data.image}
          alt={data.title}
        />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
