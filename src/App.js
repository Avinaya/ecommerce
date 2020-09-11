import React,{useEffect} from "react";
import Home from "./pages/home/Home";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";
import Mobheader from "./components/mob-header/Mobheader";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import DeliveryAddress from "./components/deliveryAddress/DeliveryAddress";
import Login from "./components/login/Login";
import Signup from "./components/signup/SignUp";
import OtpVerify from "./components/signup/OtpVerify";
import ProductTagAll from './pages/productTagAll/ProductTagAll';
import ProductCategory from './pages/productCategories/ProductCategory';
import Categories from './components/category/Categories';
import SideBarMob from './components/sideBar/sideBarMob/SideBarMob';
function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
});

const AuthenticatedRoute= () => {
  return (
    <React.Fragment>
    <SideBarMob/>
      <Navbar />
      <Mobheader /> 
      <Categories/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Product/:productId" component={ProductDetail} />
        <Route exact path="/product-tag/:title" component={ProductTagAll} />
        <Route exact path="/category/:categoriesName" component={ProductCategory}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/delivery" component={DeliveryAddress}/>
        <Route exact path="*" component={Home}/>
      </Switch>
    </React.Fragment>
  );
}

return (
  <Switch>
  
  <Route exact path="/signup" component={Signup} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/verify" component={OtpVerify} />
  <Route component={AuthenticatedRoute}/>
</Switch>
);
}

export default App;
