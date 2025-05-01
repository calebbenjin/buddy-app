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
import ProtectedRoute from "./store/services/auth/ProtectedRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ToastContainer, toast } from "react-toastify";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/auth/login", element: <LoginPage /> },
  { path: "/auth/register", element: <RegisterPage /> },
  { path: "/auth/verify-email", element: <VerifyEmail /> },
  { path: "/auth/email-verified", element: <EmailVerified /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/settings",
    element: (
      <ProtectedRoute>
        <SettingPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/pack",
    element: (
      <ProtectedRoute>
        <PackPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/analytics",
    element: (
      <ProtectedRoute>
        <AnalyticsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/my-group",
    element: (
      <ProtectedRoute>
        <MyGroupPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/messages",
    element: (
      <ProtectedRoute>
        <MessagesPage />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
