import React from "react";
import Sidebar from "react-sidebar";
import './SideBar.scss'
 
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <div className="acharya">
      
      </div>
    );
  }
}
 
export default SideBar;