import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { FaChevronDown, FaUser } from "react-icons/fa";

export const UserMenu = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); 
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser ? setUser(currentUser) : (setUser(null), setMenuOpen(false));
    });

    return () => unsubscribe();
  }, [auth]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sesión cerrada");
        navigate("/sign-in");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión: ", error.message);
      });
  };

  return (
    <div className="relative" ref={menuRef}>
      {user ? (
        <button onClick={toggleMenu} className="flex items-center space-x-2">
          <img
            src={user?.photoURL || "/Avatar.webp"}
            alt={user.displayName || "User"}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-black hidden md:flex">{user.displayName || "Usuario"}</span>
          <FaChevronDown />
        </button>
      ) : (
        <NavLink to="/sign-in" className="text-[#222222] font-medium" aria-label="User">
          <FaUser className="h-5 w-5" />
        </NavLink>
      )}
      {menuOpen && (
        <ul className="absolute right-0 mt-2 w-32 bg-white text-normal font-normal border border-gray-300 rounded-lg shadow-lg">
          <li className="hover:bg-gray-500 hover:text-white">
            <NavLink to={"/my-Orders"} className="block px-4 py-2">My Orders</NavLink>
          </li>
          <li className="hover:bg-gray-500 hover:text-white">
            <NavLink to={"/my-account"} className="block px-4 py-2">My Account</NavLink>
          </li>
          <li className="hover:bg-gray-500 hover:text-white cursor-pointer block px-4 py-2">
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
};
