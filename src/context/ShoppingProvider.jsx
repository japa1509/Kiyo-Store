import { useState, useEffect } from "react";
import { ShoppingContext } from ".";
import PropTypes from "prop-types";

export const ShoppingProvider = ({ children }) => {
  const [countCart, setCountCart] = useState(0);

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const openProductDetail = () => setIsDetailOpen(true);
  const closeProductDetail = () => setIsDetailOpen(false);

  const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [searchByCategory, setSearchByCategory] = useState(null);

  // Función para agregar productos al carrito
  const addProductsToCart = (productData) => {
    setCartProducts((prevCartProducts) => {
      const isInCart = prevCartProducts.some(
        (product) => product.id === productData.id
      );

      if (isInCart) {
        // Incrementa la cantidad del producto en el carrito
        return prevCartProducts.map((product) =>
          product.id === productData.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        // Agrega un nuevo producto con cantidad inicial de 1
        return [...prevCartProducts, { ...productData, quantity: 1 }];
      }
    });

    closeProductDetail();
  };

  // Actualiza el contador de productos en el carrito automáticamente
  useEffect(() => {
    const totalCount = cartProducts.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    setCountCart(totalCount);
  }, [cartProducts]);

  // Fetch inicial de productos
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?Limit=30")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });
  }, []);

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredProductsByCategory = (products, searchByCategory) => {
    return products?.filter((product) =>
      product.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredProductsByTitle(products, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredProductsByCategory(products, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredProductsByCategory(
        products,
        searchByCategory
      ).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return products;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredProducts(
        filterBy("BY_TITLE_AND_CATEGORY", products, searchByTitle, searchByCategory)
      );
    if (searchByTitle && !searchByCategory)
      setFilteredProducts(filterBy("BY_TITLE", products, searchByTitle, searchByCategory));
    if (!searchByTitle && searchByCategory)
      setFilteredProducts(filterBy("BY_CATEGORY", products, searchByTitle, searchByCategory));
    if (!searchByTitle && !searchByCategory)
      setFilteredProducts(filterBy(null, products, searchByTitle, searchByCategory));
  }, [products, searchByTitle, searchByCategory]);

  return (
    <ShoppingContext.Provider
      value={{
        countCart,
        setCountCart,
        openProductDetail,
        closeProductDetail,
        isDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isCheckoutSideMenu,
        order,
        setOrder,
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        filteredProducts,
        setSearchByCategory,
        searchByCategory,
        addProductsToCart,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

ShoppingProvider.propTypes = { children: PropTypes.node };
