
import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ProtectedRoute from "./store/services/auth/ProtectedRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ToastContainer } from "react-toastify";

// Lazy imports
const App = lazy(() => import("./App"));
const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("./pages/auth/register"));
const VerifyEmail = lazy(() => import("./pages/auth/verify-email"));
const EmailVerified = lazy(() => import("./pages/auth/email-verified"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const MessagesPage = lazy(() => import("./pages/dashboard/messages"));
const SettingPage = lazy(() => import("./pages/dashboard/settings"));
const PackPage = lazy(() => import("./pages/dashboard/pack"));
const MyGroupPage = lazy(() => import("./pages/dashboard/my-group"));
const AnalyticsPage = lazy(() => import("./pages/dashboard/analytics"));

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
