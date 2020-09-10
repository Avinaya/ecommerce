import React from "react";
import "./Menu.scss";
import Home from "./menu_data/Home";
import Electronic from "./menu_data/Electronic";
import Mens from "./menu_data/Mens_Fashions";
import Womens from "./menu_data/Womens_Fashions";
import Other from "./menu_data/Other";

const Menu_heading = [
  {
    heading: "Home and Living",
  },
  {
    heading: "electronics",
  },
  {
    heading: "Mens Fashions",
  },
  {
    heading: "Womens Fashions",
  },
  {
    heading: "other categories",
  },
];
const Menu = () => {
  return (
    <React.Fragment>
      <div className="menu">
        <div className="menu-tools">
          <div className="menu-tools-item m1">
            <div className="dropdown drop-menu">
              <button className="btn  menu-dropdown">{Menu_heading[0].heading}</button>
              <div
                className="dropdown-menu-tools dropdown-menu "
                aria-labelledby="dropdownMenuButton"
              >
            <Home/>
              </div>
            </div>
          </div>

             <div className="menu-tools-item m1">
            <div className="dropdown drop-menu">
              <button className="btn  menu-dropdown">{Menu_heading[1].heading}</button>
              <div
                className="dropdown-menu-tools dropdown-menu "
                aria-labelledby="dropdownMenuButton"
              >
            <Electronic/>
              </div>
            </div>
          </div>

                       <div className="menu-tools-item m1">
            <div className="dropdown drop-menu">
              <button className="btn  menu-dropdown">{Menu_heading[2].heading}</button>
              <div
                className="dropdown-menu-tools dropdown-menu "
                aria-labelledby="dropdownMenuButton"
              >
            <Mens/>
              </div>
            </div>
          </div>


             <div className="menu-tools-item m1">
            <div className="dropdown drop-menu">
              <button className="btn  menu-dropdown">{Menu_heading[3].heading}</button>
              <div
                className="dropdown-menu-tools dropdown-menu "
                aria-labelledby="dropdownMenuButton"
              >
            <Womens/>
              </div>
            </div>
          </div>

                       <div className="menu-tools-item m1">
            <div className="dropdown drop-menu">
              <button className="btn  menu-dropdown">{Menu_heading[4].heading}</button>
              <div
                className="dropdown-menu-tools dropdown-menu "
                aria-labelledby="dropdownMenuButton"
              >
            <Other/>
              </div>
            </div>
          </div>





        </div>
      </div>
    </React.Fragment>
  );
};
export default Menu;
