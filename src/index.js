import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./style/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { ContexMenuDataProvider } from "./components/contexApi/contexMenuData/ContexMenuData";
import { StateProvider } from "./components/contexApi/stateProvider/StateProvider";
import reducer, {
  initialState,
} from "./components/contexApi/stateProvider/reducer";
import { BaseApiDataProvider } from "./components/contexApi/baseApiCall/BaseApiCall";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ContexMenuDataProvider>
      <BaseApiDataProvider>
        <BrowserRouter>
          <StateProvider initialState={initialState} reducer={reducer}>
            <ScrollToTop>
              <App />
            </ScrollToTop>
          </StateProvider>
        </BrowserRouter>
      </BaseApiDataProvider>
    </ContexMenuDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
