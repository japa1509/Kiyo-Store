import { useContext } from "react";
import { ShoppingContext } from "../../context";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { OfferSection } from "../../Components/OfferSection";
import { Features } from "../../Components/Features";

export function Home() {
  const { filteredProducts } = useContext(ShoppingContext);

  return (
    <Layout>
      <OfferSection />
      <Features />
      <div className="max-w-screen-lg w-full px-6 mb-6">
        <h1 className="text-start font-medium text-3xl mb-4">Exclusive Products</h1>
      </div>

      {filteredProducts?.length > 0 ? (
        <div className="grid mb-10 w-full justify-center sm:gap-6 gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 md:max-w-screen-lg">
          {filteredProducts.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-40 text-gray-500">
          <p className="text-lg font-light">No se encontraron resultados</p>
        </div>
      )}

      <ProductDetail />
    </Layout>
  );
}
