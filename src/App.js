import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Mobheader from "./components/mob-header/Mobheader";
import SideBarMob from './components/sideBar/sideBarMob/SideBarMob';
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import ProductDetail from "./pages/productDetail/ProductDetail"
import ProductTagAll from "./pages/productTagAll/ProductTagAll"
import Categories from './components/category/Categories'



const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SideBarMob/>
      <Mobheader />
      <Categories/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:productId" component={ProductDetail} />
          <Route exact path="/:title" component={ProductTagAll} />
        </Switch>
        <Footer/>
        </div>
          );
};

export default App;
