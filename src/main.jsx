import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomerCustomerProcess from "./pages/CustomerCustomerProcess/CustomerCustomerProcess";
import CustomerSearchProcess from "./pages/CustomerSearchProcess/CustomerSearchProcess";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { AppProvider } from "./context/AppContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerSearchProcess />,
  },
  {
    path: "/customerInfo/:custId",
    element: <CustomerCustomerProcess />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);
