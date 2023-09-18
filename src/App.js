import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDeatailsPage from "./pages/ProductDeatailsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserProfilePage } from "./pages/user/UserProfilePage";
import { UserOrdersPage } from "./pages/user/UserOrdersPage";
import { UserCartDetailsPage } from "./pages/user/UserCartDetailsPage";
import { ProtectedRoutesComponet } from "./components/ProtectedRoutesComponet";
import { AdminAnalyticsPage } from "./pages/admin/AdminAnalyticsPage";
import { AdminChatsPage } from "./pages/admin/AdminChatsPage";
import { AdminCreateProductPage } from "./pages/admin/AdminCreateProductPage";
import { AdminEditProductPage } from "./pages/admin/AdminEditProductPage";
import { AdminEditUserPage } from "./pages/admin/AdminEditUserPage";
import { AdminOrderPage } from "./pages/admin/AdminOrderPage";
import { AdminProductsPag } from "./pages/admin/AdminProductsPag";
import { AdminUserPage } from "./pages/admin/AdminUserPage";
import HeaderComponent  from "./components/HeaderComponent";
import { FooterComponents } from "./components/FooterComponents";
import { RouteWithUserChatComponent } from "./components/user/RouteWithUserChatComponent";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route element={<RouteWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route
            path="/product-details/:id"
            element={<ProductDeatailsPage />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

            </Route>
          {/* User Protected Route */}
          <Route element={<ProtectedRoutesComponet admin={false} />}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrdersPage />} />
            <Route
              path="/user/cart-details"
              element={<UserCartDetailsPage />}
            />
            <Route path="/user/order-details" element={<UserOrdersPage />} />
          </Route>
        {/* Admin protected routes */}
        <Route element={<ProtectedRoutesComponet admin={true} />}>
          <Route path="/admin/users" element={<AdminUserPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPag />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/chat" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          <Route path="/admin/order" element={<AdminOrderPage />} />
        </Route>

        <Route path="*" element="Page not exist 404" />
      </Routes>
      <FooterComponents />
    </BrowserRouter>
  );
}

export default App;
