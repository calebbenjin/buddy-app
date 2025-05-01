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
import MessagesPage from "./pages/dashboard/messages";
import SettingPage from "./pages/dashboard/settings";
import PackPage from "./pages/dashboard/pack";
import MyGroupPage from "./pages/dashboard/my-group";
import AnalyticsPage from "./pages/dashboard/analytics";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/auth/login", element: <LoginPage /> },
  { path: "/auth/register", element: <RegisterPage /> },
  { path: "/auth/verify-email", element: <VerifyEmail /> },
  { path: "/auth/email-verified", element: <EmailVerified /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard/settings", element: <SettingPage /> },
  { path: "/dashboard/pack", element: <PackPage /> },
  { path: "/dashboard/analytics", element: <AnalyticsPage /> },
  { path: "/dashboard/my-group", element: <MyGroupPage /> },
  { path: "/dashboard/messages", element: <MessagesPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
