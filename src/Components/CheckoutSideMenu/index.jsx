import { CloseIcon } from "../Icons"
import { useContext } from "react"
import { ShoppingContext } from "../../context"
import { OrderCard } from "../OrderCard"
import { totalPrice } from "../../utils"
import { Link } from "react-router-dom"
export function CheckoutSideMenu () {
    const { closeCheckoutSideMenu,setSearchByTitle, isCheckoutSideMenu, cartProducts, setCartProducts, setOrder, order,setCountCart} = useContext(ShoppingContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.24',
            products:cartProducts,
            totalProducts:cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setSearchByTitle(null)
        setCountCart(0)
    }

    
    return(
        <aside className={`${isCheckoutSideMenu ? "flex" : "hidden"} w-[360px] flex-col fixed right-0 top-[68px] h-[calc(100vh-68px)] border border-black rounded-lg bg-white `}>
            <div className=" flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <button 
                onClick={closeCheckoutSideMenu}
                ><CloseIcon/></button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
                {
                    cartProducts.map(product =>{
                        return(
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                                handleDelete={handleDelete}
                            />
                        )
                    }) 
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-ligth">Total:</span>
                    <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-Orders/last'>
                    <button
                    className="w-full bg-black py-3 rounded-md text-white"
                    onClick={()=> handleCheckout()}
                    >Checkout</button>
                </Link>
            </div>
        </aside>
    )
}