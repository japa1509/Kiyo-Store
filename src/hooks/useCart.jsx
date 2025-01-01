// hooks/useCart.js
import { useContext } from "react";
import { ShoppingContext } from "../context";
import { formatTotalPrice, totalProducts } from "../utils";

export function useCart() {
  const {
    cartProducts,
    setCartProducts,
    setCountCart,
    setOrder,
    order,
    setSearchByTitle,
    isCheckoutSideMenu,
    closeCheckoutSideMenu,
  } = useContext(ShoppingContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(filteredProducts);
    setCountCart(filteredProducts.reduce((sum, product) => sum + product.quantity, 0));
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedProducts = cartProducts.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setCartProducts(updatedProducts);
    setCountCart(updatedProducts.reduce((sum, product) => sum + product.quantity, 0));
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: cartProducts,
      totalProducts: totalProducts(cartProducts),
      totalPrice: formatTotalPrice(cartProducts)
    };
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setSearchByTitle(null);
    setCountCart(0);
    closeCheckoutSideMenu()
  };

  return { 
    cartProducts, 
    isCheckoutSideMenu, 
    closeCheckoutSideMenu, 
    handleDelete, 
    handleQuantityChange, 
    handleCheckout  };
}
