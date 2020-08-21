import React,{useEffect} from "react";
import Home from "./pages/home/Home";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";
import Mobheader from "./components/mob-header/Mobheader";
import Menu from "./components/menu/Menu";
import Footer from './components/footer/Footer'

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <React.Fragment>
      <Navbar />
      <Mobheader />
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Product/:productId" component={ProductDetail} />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
