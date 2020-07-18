import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/menu/Menu';
import Mobheader from './components/mob-header/Mobheader';
import Highlight from './components/highlight/Highlight';
import Banner from './components/banner/Banner';
import Featured from './components/featured/Featured';
import Latest from './components/products/latest/Latest';
import Recommended from './components/products/recommended/Recommended';
import PopularCategories from './components/popularCategories/PopularCategories';

function App() {
  return (
   <React.Fragment>
   <Navbar/>
   <Mobheader/>
   <Menu/>
   <Highlight/>
   <Banner/>
   <Recommended/>
   <Featured/>
   <Latest/>
   <PopularCategories/>
   </React.Fragment>
  );
}

export default App;
