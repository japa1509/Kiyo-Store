import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { useContext } from "react"
import { ShoppingContext } from "../../context"
import { Link } from "react-router-dom"

export function MyOrders() {
    const { order } = useContext(ShoppingContext)
    return (
        <Layout>
        <h1 className="text-xl mb-4">My Oders</h1>
            {
                order.map((order, index) => {
                    return(

                    <Link key={index} to={`/my-Orders/${index}`}>
                        <OrdersCard
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts} />
                    </Link>
                    )
                })
            }
        </Layout>
    )
}