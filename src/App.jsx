import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import OrderHistory from "./Pages/OrderHistory";
import User from "./Pages/User";
import BreakfastDetail from "./Pages/BreakfastDetail";
import Checkout from "./Pages/Checkout";
import AdminLogin from "./Pages/AdminLogin";
import ShopLogin from "./Pages/ShopLogin";
import OrderConfirm from "./Pages/OrderConfirm";
import AdminBackstage from "./Pages/AdminBackstage";
import ShopRegister from "./Pages/ShopRegister";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route index path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/history" element={<OrderHistory />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/order/detail" element={<BreakfastDetail />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/auth/admin" element={<AdminLogin />} />
                    <Route
                        path="/auth/admin/backstage"
                        element={<AdminBackstage />}
                    />
                    <Route path="/auth/shop" element={<ShopLogin />} />
                    <Route path="/auth/shop/order" element={<OrderConfirm />} />
                    <Route path="/shop/register" element={<ShopRegister />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
