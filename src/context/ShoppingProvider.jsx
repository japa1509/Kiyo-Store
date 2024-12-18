import { useState,useEffect } from "react";
import { ShoppingContext } from ".";

export const ShoppingProvider = ({ children }) => {
  const [countCart, setCountCart] = useState(0);

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const openProductDetail = () => setIsDetailOpen(true);
  const closeProductDetail = () => setIsDetailOpen(false);
  // Checkout Side Menu . Open/Close
  const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

  const [productToShow, setProductToShow] = useState( {} )

    //shopping Cart | Add products to cart
  const [cartProducts, setCartProducts] = useState( [] )

  //shopping Cart | Order
  const [order, setOrder] = useState([])

  //get product
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState(null)
  // get pruduct by title
  const [searchByTitle, setSearchByTitle] = useState(null)
  const [searchByCategory, setSearchByCategory ] = useState(null)

  useEffect ( () => {
          fetch('https://fakestoreapi.com/products?Limit=30') 
          .then (response => response.json())
          .then (data =>{ 
              setProducts(data)
          })
          .catch (error => {
              console.error('Error fetching the products:', error)
          })
      },[])

      const filteredProductsByTitle = (products,searchByTitle) => {
        return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }
      const filteredProductsByCategory = (products,searchByCategory) => {
        return products?.filter(product => product.category.toLowerCase().includes(searchByCategory.toLowerCase()))
      }

      const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
          return filteredProductsByTitle(products, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
          return filteredProductsByCategory(products, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredProductsByCategory(products, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
          return products
        }
      }
      useEffect ( () => {
        if (searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', products, searchByTitle, searchByCategory))
          if (searchByTitle && !searchByCategory) setFilteredProducts(filterBy('BY_TITLE', products, searchByTitle, searchByCategory))
          if (!searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory))
          if (!searchByTitle && !searchByCategory) setFilteredProducts(filterBy(null, products, searchByTitle, searchByCategory))
    },[products,searchByTitle,searchByCategory])
    
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
        searchByCategory
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
