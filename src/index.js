import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./style/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { RecommendedProductProvider } from "./components/contexApi/contexApiRecommended/ContexApiRecommended";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { ContexApiCategoryProdiver } from "./components/contexApi/contexApiCategory/ContexApiCategory";
import { ContexMenuDataProvider } from "./components/contexApi/contexMenuData/ContexMenuData";

const App = lazy(() => import('./App'));


ReactDOM.render(
  <React.StrictMode>
  <Suspense fallback={<div>Loading.....</div>}>

  <ContexMenuDataProvider>
    <RecommendedProductProvider>
    <ContexApiCategoryProdiver>
      <BrowserRouter>
        <ScrollToTop >
        <App />
        </ScrollToTop>
      </BrowserRouter>
      </ContexApiCategoryProdiver>
    </RecommendedProductProvider>
    </ContexMenuDataProvider>
    </Suspense>

  </React.StrictMode>,
  document.getElementById("root")
);
