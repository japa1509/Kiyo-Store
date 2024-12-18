import { useRoutes,BrowserRouter } from "react-router-dom"
import { Home } from "../Home"
import { ShoppingProvider } from "../../context/ShoppingProvider"
import { MyAccount } from "../MyAccount"
import { MyOrder } from "../MyOrder"
import { MyOrders } from "../MyOrders"
import { NotFound } from "../NotFound"
import { SignIn } from "../SignIn"
import { Navbar } from "../../Components/Navbar"
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu"

const AppRoutes = () => {
  let routes = useRoutes( [
    { path:'/', element: <Home/> },
    { path:'/clothes', element: <Home/> },
    { path:'/electronics', element: <Home/> },
    { path:'/my-Account', element: <MyAccount/> },
    { path:'/my-Order', element: <MyOrder/> },
    { path:'/my-Orders', element: <MyOrders/> },
    { path:'/my-Orders/last', element: <MyOrder/> },
    { path:'/my-Orders/:id', element: <MyOrder/> },
    { path:'/sign-in', element: <SignIn/> },
    { path:'/*', element: <NotFound/> },
  ] )
  return  routes
}
function App() {

  
  return (
    <ShoppingProvider>   
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingProvider>
  )
}

export default App
