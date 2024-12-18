import { NavLink } from "react-router-dom";
import { ShoppingContext } from "../../context";
import { useContext } from "react";
import { CartIcon } from "../Icons";
export function Navbar() {
  const {countCart,setSearchByCategory} = useContext(ShoppingContext)

  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 font-light text-sm">
      <ul className="flex items-center gap-3">
        <li className="font-semibold">
          <NavLink
            to={"/"}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/"}
            onClick={() => setSearchByCategory ()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/clothes"}
            onClick={() => setSearchByCategory ('jewelery')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/electronics"}
            onClick={() => setSearchByCategory ('electronics')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/furnitures"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/toys"}
             className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/others"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">shopi.dev@gmail.com</li>
        <li>
          <NavLink
            to={"/my-orders"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MyOrders
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/my-account"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MyAccount
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/sign.in"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SignIn
          </NavLink>
        </li>
        <li className="flex items-center"><CartIcon/>{countCart}</li>
      </ul>
    </nav>
  );
}
