import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./style/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { RecommendedProductProvider } from "./components/contexApi/contexApiRecommended/ContexApiRecommended";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";



ReactDOM.render(
  <React.StrictMode>
    <RecommendedProductProvider>
      <BrowserRouter>
        <ScrollToTop >
        <App />
        </ScrollToTop>
      </BrowserRouter>
    </RecommendedProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
