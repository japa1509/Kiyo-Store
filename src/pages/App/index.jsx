import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingProvider } from "../../context/ShoppingProvider";
import { AuthProvider } from "../../context/AuthProvider";
import { Navbar } from "../../Components/Navbar";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import { Footer } from "../../Components/Footer";
import { SubscribeSection } from "../../Components/SubscribeSection";
import { ScrollToTop } from "../../Components/ScrollToTop";
import { WhatsApp } from "../../Components/WhatsApp";
import { routesConfig } from "../../routes/routes";

const AppRoutes = () => {
  return useRoutes(routesConfig);
};

function App() {
  return (
    <ShoppingProvider>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <CheckoutSideMenu />
          <SubscribeSection />
          <WhatsApp />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ShoppingProvider>
  );
}

export default App;
