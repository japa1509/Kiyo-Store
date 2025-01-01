import { Layout } from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingContext } from "../../context"
import { OrderCard } from "../../Components/OrderCard"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6"
export const MyOrder = () => {

    const { order } = useContext(ShoppingContext)
    const currenPath = window.location.pathname
    let index = currenPath.substring(currenPath.lastIndexOf('/') + 1)
    if (index === 'last') index =  order?.length - 1
    return (
        <Layout>
            <section className=" py-10">
            <div className="flex w-80 items-center justify-center gap-12 mb-6">
                <Link to='/my-Orders' className="">
                    <FaArrowLeft className="size-6" />
                </Link>
                <h1 className=" font-medium text-3xl">MyOrder</h1>
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
                                quantity={product.quantity}
                                showQuantityButtons={false}
                            />
                        )
                    })
                }
            </div>
            </section>
        </Layout>
    )
}