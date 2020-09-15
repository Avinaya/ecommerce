import React,{useState} from "react";
import "./ProductCategoryMob.scss";
import DeliveryAddress from "./../../../components/deliveryAddress/DeliveryAddress";
import SideBar from "react-sidebar";
function ProductCategoryMob() {
  const viewHeight = window.outerHeight;
  const [sideBarOpen,setSideBarOpen]=useState(false);
  const onSetSidebarOpen = (open) => {
    setSideBarOpen(open);
  };

  const sidebarStyles = {
    sidebar: {
      width: 295,
      height: viewHeight,
      background: "white",
      float: "right",
      position: "fixed",
      zIndex: 999,
      
    },
   
  };
  return (
    <React.Fragment>
      <div className="productCategory-mob">
        
        
      <SideBar
                    className="hey"
                      sidebar={
                        <div className="sideBar">
                          <div className="sideTop">
                            <span>Address Form</span>
                            <button
                            className="ram"
                              onClick={() => onSetSidebarOpen(false)}
                            >
                              close
                            </button>
                          </div>

                          <div className="del">
                            <DeliveryAddress data={onSetSidebarOpen}/>
                          </div>
                        </div>
                      }
                      open={sideBarOpen}
                      // docked={sideBarDocked}
                      // matchMedia={mediaQueryChanged}
                      onSetOpen={onSetSidebarOpen}
                      styles={sidebarStyles}
                    ></SideBar>
        <div className="productCategory-mob-item" ><span onClick={() => onSetSidebarOpen(true)}>Filter</span></div>
        <div className="productCategory-mob-item">|</div>
        <div className="productCategory-mob-item">Sort</div>
      </div>
    </React.Fragment>
  );
}

export default ProductCategoryMob;
