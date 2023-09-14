import { createBrowserRouter, RouterProvider, Outlet, Route, createRoutesFromElements } from "react-router-dom";
import { productData } from "./api/api";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ScrollRestoration } from "react-router-dom"; //scroll to top auto
import Signin from "./pages/Signin";
import Register from "./pages/Register";
const Layout = () => {
    return (
        <div>
            <Header />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    );
};
function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} loader={productData}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Route>
                <Route path="/signin" element={<Signin />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Route>
        )
    );

    return (
        <div className="bg-gray-100">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
