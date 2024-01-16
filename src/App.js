import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SearchResultScreen from "./screens/SearchResultScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import HowToOrder from "./components/HowToOrder";
import container from "./components/categories/Container";
import { Box } from "@material-ui/core";
import ShopPage from "./pages/Shop";
import Footers from "./components/Footers";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="" style={{ backgroundColor: "#f1f4f6; margin: 0px;" }}>
        <Route path="/how-to-order" component={HowToOrder} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/shop" component={ShopPage} />

        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/product" component={container} exact />
        <Box>
          <Route path="/product/:id" component={ProductScreen} exact />
        </Box>
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/admin/userlist" component={UserListScreen} />
        <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        <Route path="/admin/productlist" component={ProductListScreen} exact />
        <Route
          path="/admin/productlist/:pageNumber"
          component={ProductListScreen}
          exact
        />
        <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        <Route path="/admin/orderlist" component={OrderListScreen} />
        <Route path="/search/:keyword" component={SearchResultScreen} exact />
        <Route path="/page/:pageNumber" component={HomeScreen} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomeScreen}
          exact
        />
        <Route path="/" component={HomeScreen} exact />
      </main>
      <Footer />
      {/* <Footers /> */}
      //{" "}
    </Router>
  );
};

export default App;
