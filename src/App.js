import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideBarMob from './components/sideBar/sideBarMob/SideBarMob';
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import ProductDetail from "./pages/productDetail/ProductDetail"
import ProductTagAll from "./pages/productTagAll/ProductTagAll"
import Categories from './components/category/Categories'
import ProductCategory from './pages/productCategories/ProductCategory';



const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SideBarMob/>
      <Categories/>
        <Switch>
          <Route exact path="/product/:productId" component={ProductDetail} />
          <Route exact path="/product-tag/:title" component={ProductTagAll} />
          <Route exact path="/category/:categoriesName" component={ProductCategory}/>
          <Route exact path="/" component={Home} />
          <Route path="*" component={Home}/>
        </Switch>
        <Footer/>
        </div>
          );
};

export default App;
