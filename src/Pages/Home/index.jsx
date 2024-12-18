import { useContext } from "react"
import { ShoppingContext } from "../../context"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
export function Home() {

    const {setSearchByTitle, filteredProducts } = useContext(ShoppingContext)

    const renderView = () => {
        if (filteredProducts?.length > 0) {
            return (
                filteredProducts?.map(product => (
                    <Card key={product.id} data={product} />
                ))
            )
        } else {
            return(
                <div>No se encontraron resultados</div>
            ) 
        }
    }

    return (
        <Layout>
            <div>
                <h1 className="text-red-500 text-2xl mb-4">Exclusive Products</h1>
            </div>
            <input
                type="text"
                placeholder="Search a product"
                onChange={(event) => setSearchByTitle(event.target.value)}
                className="rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none" />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    )
}