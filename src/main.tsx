import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/register";
import App from "./App";
import VerifyEmail from "./pages/auth/verify-email";
import EmailVerified from "./pages/auth/email-verified";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/auth/login", element: <LoginPage /> },
  { path: "/auth/register", element: <RegisterPage /> },
  { path: "/auth/verify-email", element: <VerifyEmail /> },
  { path: "/auth/email-verified", element: <EmailVerified /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
