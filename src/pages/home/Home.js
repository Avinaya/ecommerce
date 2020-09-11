import React from 'react'
import Highlight from '../../components/highlight/Highlight';
import Banner from '../../components/banner/Banner';
import Featured from '../../components/featured/Featured';
import Latest from '../../components/products/latest/Latest';
import Recommended from '../../components/products/recommended/Recommended';
import PopularCategories from '../../components/popularCategories/PopularCategories';
import Banner2 from '../../components/banner/banner2/Banner2';
import BestSelling from '../../components/products/bestSelling/BestSelling';
import Banner3 from '../../components/banner/banner3/Banner3';
import About from '../../components/about/About';
import Banner4 from '../../components/banner/banner4/Banner4';


 function Home() {
    return (
       <React.Fragment>
    
       <Highlight/>
       <Banner/>
       <Recommended/>
       <Featured/>
       <Latest/>
       <PopularCategories/>
       <Banner2/>
       <BestSelling/>
       <Banner4/>
       <Banner3/>
       <About/>
       </React.Fragment>
    )
}
export default Home;
