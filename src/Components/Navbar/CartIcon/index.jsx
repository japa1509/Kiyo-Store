import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ShoppingContext } from "../../../context";

export const CartIcon = () => {
  const { countCart, isCheckoutSideMenu, openCheckoutSideMenu, closeCheckoutSideMenu } = useContext(ShoppingContext);

  const toggleCheckoutSideMenu = () => (isCheckoutSideMenu ? closeCheckoutSideMenu() : openCheckoutSideMenu());

  return (
    <span className="flex items-center cursor-pointer relative" onClick={toggleCheckoutSideMenu}>
      <FaShoppingCart className="w-5 h-5 mr-2" />
      {countCart > 0 && (
        <span className="absolute right-0 top-[-6px] py-0.5 px-1.5 bg-black text-xs text-white rounded-full">
          {countCart}
        </span>
      )}
    </span>
  );
};
