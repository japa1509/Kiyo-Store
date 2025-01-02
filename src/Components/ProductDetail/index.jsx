import { useContext } from "react";
import { ShoppingContext } from "../../context";
import { FaTimes } from "react-icons/fa";

export const ProductDetail = () => {
  const { closeProductDetail, isDetailOpen, productToShow, addProductsToCart,openCheckoutSideMenu } = useContext(ShoppingContext);

  const handleAddToCart = (product) => { addProductsToCart(product); 
    if (window.innerWidth >= 768) {
       openCheckoutSideMenu(); 
      } 
      closeProductDetail(); };

  return (
    <aside className={`${isDetailOpen ? "flex" : "hidden"} w-full md:w-[360px] flex-col fixed right-0 top-[68px] h-[calc(100vh-68px)] border border-gray-300 shadow-lg rounded-lg bg-white overflow-hidden z-50`}>
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="font-medium text-xl">Product Detail</h2>
        <button onClick={closeProductDetail}>
          <FaTimes className="text-gray-600 hover:text-gray-900" />
        </button>
      </div>
      <div className="flex flex-col overflow-y-auto p-6 space-y-4">
        <figure className="flex flex-col items-center">
          <img
            className="w-full h-64 object-cover rounded-2xl mb-4"
            src={productToShow.image}
            alt={productToShow.title}
          />
          <figcaption className="w-full">
            <span className="block text-xl font-bold text-[#ffba00] mb-1">${productToShow.price}</span>
            <span className="block text-md font-medium text-gray-700 mb-2">{productToShow.title}</span>
            <span className="block text-sm font-light text-gray-600">{productToShow.description}</span>
          </figcaption>
        </figure>
        <button onClick={() => handleAddToCart(productToShow)} className="w-full bg-gradient-to-r from-[#ffba00] to-[#ff6c00] text-white font-bold py-2 rounded-lg transition duration-300">
          Add to Cart
        </button>
      </div>
    </aside>
  );
}
