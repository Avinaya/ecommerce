import React,{useEffect} from "react";
import Home from "./pages/home/Home";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";
import Mobheader from "./components/mob-header/Mobheader";
import Menu from "./components/menu/Menu"; 
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import DeliveryAddress from "./components/deliveryAddress/DeliveryAddress";
import Login from "./components/login/Login";
import Signup from "./components/signup/SignUp";
import OtpVerify from "./components/signup/OtpVerify";
function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
});

const AuthenticatedRoute= () => {
  return (
    <React.Fragment>
      <Navbar />
      <Mobheader />
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Product/:productId" component={ProductDetail} />
        <Route path="/cart" component={Cart}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/delivery" component={DeliveryAddress}/>
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
