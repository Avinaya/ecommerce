import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./style/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { ContexMenuDataProvider } from "./components/contexApi/contexMenuData/ContexMenuData";
import {StateProvider} from "./components/contexApi/stateProvider/StateProvider";
import reducer, { initialState } from "./components/contexApi/stateProvider/reducer";
import { BaseApiDataProvider } from "./components/contexApi/baseApiCall/BaseApiCall";


const App = lazy(() => import('./App'));


ReactDOM.render(
  <React.StrictMode>
  <Suspense fallback={<div className="lds-hourglass"></div>}>
  <ContexMenuDataProvider>
  <BaseApiDataProvider>
      <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <ScrollToTop >
        <App />
        </ScrollToTop>
        </StateProvider>
      </BrowserRouter>
    </BaseApiDataProvider>
    </ContexMenuDataProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
