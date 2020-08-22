import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Mobheader from "./components/mob-header/Mobheader";
import Menu from "./components/menu/Menu";

const Home = lazy(() => import("./pages/home/Home"));
const Footer = lazy(() => import("./components/footer/Footer"));
const ProductDetail = lazy(() => import("./pages/productDetail/ProductDetail"));
const ProductTagAll = lazy(() => import("./pages/productTagAll/ProductTagAll"));

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Mobheader />
      <Menu />
      <Suspense fallback={<div>Loading.....</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route path="/:title" component={ProductTagAll} />
        </Switch>
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default App;
