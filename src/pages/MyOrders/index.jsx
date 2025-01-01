import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { useContext } from "react";
import { ShoppingContext } from "../../context";
import { Link } from "react-router-dom";

export const MyOrders = () => {
  const { order } = useContext(ShoppingContext);

  return (
    <Layout>
      <section className="py-10 flex flex-col items-center">
        <h1 className="text-3xl font-medium mb-6">List Orders</h1>

        {order.length > 0 ? (
          order.map(({ totalPrice, date, totalProducts }, index) => (
            <Link
              key={index}
              to={`/my-orders/${index}`}
              aria-label={`View details for order ${index + 1}`}
              className="w-full max-w-lg mb-4"
            >
              <OrdersCard
                totalPrice={totalPrice}
                date={date}
                totalProducts={totalProducts}
              />
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-6">
            You have no orders yet. Start shopping to place your first order!
          </p>
        )}
      </section>
    </Layout>
  );
};
