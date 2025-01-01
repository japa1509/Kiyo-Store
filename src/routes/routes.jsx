import { Home } from "../pages/Home";
import { MyAccount } from "../pages/MyAccount";
import { MyOrder } from "../pages/MyOrder";
import { MyOrders } from "../pages/MyOrders";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import Register from "../pages/Register";
import { ProtectedRoute } from "./ProtectedRoute";

export const routesConfig = [
  { path: "/", element: <Home /> },
  { path: "/clothes", element: <Home /> },
  { path: "/electronics", element: <Home /> },
  { path: "/jewelery", element: <Home /> },
  { path: "/my-Account",
     element:(
      <ProtectedRoute>
        <MyAccount />
      </ProtectedRoute>
    )  },
  { path: "/my-Order", element: <MyOrder /> },
  { path: "/my-Orders", element: (
      <ProtectedRoute>
        <MyOrders />
      </ProtectedRoute>
    )  },
  { path: "/my-Orders/last", element: <MyOrder /> },
  { path: "/my-Orders/:id", element: <MyOrder /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/register", element: <Register /> },
  { path: "/*", element: <NotFound /> },
];

