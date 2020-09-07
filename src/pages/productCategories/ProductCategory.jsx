import React,{useEffect,useState} from 'react'
import './ProductCategory.scss'
import ProductCategoryHeader from './productCatHeader/ProductCategoryHeader'
import ProductCategoriesFilter from './productCatFilter/ProductCategoriesFilter';
import ProductCategoriesProducts from './productCatProducts/ProductCategoriesProducts';
import  axios  from 'axios';


function ProductCategory(props) {

    const[data,setData]= useState([])
    const param = props.match.params.categoriesName

    useEffect(()=>{
        const categories = props.location.state.detail;
        async function fetchData() {
            let formData = new FormData();
            formData.append("category",categories.cat)
            formData.append("subCategory",categories.subCat)
            formData.append("subCategoryType",categories.subCatType) 
            formData.append("pageNo",0) 
            formData.append("pageSize",10)  
            const response = await axios.post('https://saptasoch.herokuapp.com/productSearch/filter',formData);
            setData(response.data)
            console.log("filter",response.data)
          }
          fetchData();

    },[props.location.state])


    return (
        <div className="productCategory">
        
        <ProductCategoryHeader data={props.location.state.detail}
                                filter={data}
                                urlData={param}/>
        <div className="productCategory-mob">
        <div className="productCategory-mob-item">Filter</div>
        <div className="productCategory-mob-item">|</div>
        <div className="productCategory-mob-item">Sort</div>
        </div>
        <div className="productCategory-tools">
        <div className="productCategory-tools-item">
        <ProductCategoriesFilter/>
        </div>
        <div className="productCategory-tools-item">
        <ProductCategoriesProducts data={data.content}/>
        </div>
        </div>
       
        

        </div>
    )
}

export default ProductCategory
