import React from 'react'
import './ProductCategoriesProducts.scss'
import SecondProductCard from '../../../components/productCard/secondProductCard/SecondProductCard'


function ProductCategoriesProducts(props) {
    const data = props.data

//   console.log("adnlanfdklajd value",props.data)
    return (
        <div className="productCategoriesProducts">

        {data && data.map((val,index)=>{
            return(
             <div key={index} className="productCategoriesProducts-items"><SecondProductCard data={val}/></div>
             
            )
        })}
        </div>
    )
}

export default ProductCategoriesProducts
