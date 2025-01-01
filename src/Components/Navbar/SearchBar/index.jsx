import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShoppingContext } from "../../../context";

export const SearchBar = () => {
  const { setSearchByCategory, setSearchByTitle } = useContext(ShoppingContext);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const category = event.target.value;
    if (category === "Clothes") {
      setSearchByCategory("men's clothing", "women's clothing");
      navigate("/clothes");
    } else if (category === "Electronics") {
      setSearchByCategory("electronics");
      navigate("/electronics");
    } else if (category === "Jewelery") {
      setSearchByCategory("jewelery");
      navigate("/jewelery");
    } else if (category === "All Category") {
      setSearchByCategory();
      navigate("/");
    }
  };

  return (
    <div className="sm:flex items-center md:gap-10 gap-4 hidden">
      <div className="flex px-2">
        <select
          onChange={handleSelectChange}
          className="hidden sm:flex rounded-l-md cursor-pointer p-2 h-10 bg-[#222222] text-white"
        >
          <option value="All Category" className="bg-white text-black">All Category</option>
          <option value="Clothes" className="bg-white text-black">Clothes</option>
          <option value="Electronics" className="bg-white text-black">Electronics</option>
          <option value="Jewelery" className="bg-white text-black">Jewelery</option>
        </select>
        <div className="flex flex-grow items-center sm:rounded-none sm:rounded-r-md rounded-md border border-gray-300 hover:border-[#222222] focus:border-[#222222] lg:w-80 h-10">
          <input
            type="text"
            placeholder="Search a product"
            onChange={(event) => setSearchByTitle(event.target.value)}
            className="w-full p-2 focus:outline-none"
          />
          <FaSearch className="size-5 mr-2 cursor-pointer text-[#222222]" />
        </div>
      </div>
    </div>
  );
};
