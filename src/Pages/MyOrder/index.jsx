import { Layout } from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingContext } from "../../context"
import { OrderCard } from "../../Components/OrderCard"
import { Link } from "react-router-dom"
import { CloseIcon } from "../../Components/Icons"
export function MyOrder() {

    const { order } = useContext(ShoppingContext)
    const currenPath = window.location.pathname
    let index = currenPath.substring(currenPath.lastIndexOf('/') + 1)
    if (index === 'last') index =  order?.length - 1
    return (
        
        <Layout>
            <div className="flex w-80 items-center justify-center relative">
            <Link to='/my-Orders' className="absolute left-0">
            <button><CloseIcon/></button>
            </Link>
            <h1 className="text-red-500">MyOrder</h1>
            </div>
            <div className="flex flex-col w-80">
                {
                    order?.[index]?.products.map(product => {
                        return (
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                            />
                        )
                    })
                }
            </div>
        </Layout>
    )
}