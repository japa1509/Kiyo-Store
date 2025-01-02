import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";
import { CartIcon } from "./CartIcon";
import { ShoppingContext } from "../../context";
import { useContext } from "react";
export const Navbar = () => {
  const{setSearchByCategory}=useContext(ShoppingContext)
  return (
    <header className="fixed z-10 top-0 w-full bg-[#fff] shadow-lg text-[#1f1f1f]">
      <nav className="flex justify-between mx-auto items-center md:max-w-screen-xl w-full py-5 sm:px-8 px-4 font-medium text-sm">
        <div className="flex items-center">
          <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffba00] to-[#ff6c00]">
            <NavLink to="/">KiyoStore</NavLink>
          </span>
        </div>
        <SearchBar />
        <div className="relative flex gap-4 items-center">
          <UserMenu />
          <CartIcon />
        </div>
      </nav>
      <ul className="bg-[#222222] text-white sm:hidden flex justify-center items-center p-2 gap-4">
        <li>
          <NavLink to={"/"}
          onClick={() => setSearchByCategory ()}
          >All Category</NavLink>
        </li>
        <li>
          <NavLink to={"/clothes"}
          onClick={() => setSearchByCategory ("men's clothing", "women's clothing")}
          >Clothes</NavLink>
        </li>
        <li>
          <NavLink to={"/electronics"}
          onClick={() => setSearchByCategory ('electronics')}
          >Electronics</NavLink>
        </li>
        <li>
          <NavLink to={"/jewelery"}
          onClick={() => setSearchByCategory ('jewelery')}
          >Jewelery</NavLink>
        </li>
      </ul>
    </header>
  );
}
