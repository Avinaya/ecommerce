import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'



const CategoriesContex = React.createContext();


const ContexApiCategoryProdiver = (props) => {

    const [categories,setCategories] = useState([])

    useEffect(()=>{
        axios
        .get(`https://saptasoch.herokuapp.com/category`)
        .then((res) => {
            const posts = res.data.map((obj) => obj);
            setCategories(posts)
          })
          .catch(function (error) {
            console.log(error);
          });

    },[])

    return (
        <CategoriesContex.Provider value={categories}>
        {props.children}
      </CategoriesContex.Provider>
    )
}

const CategoryConsumer = CategoriesContex.Consumer;


export {ContexApiCategoryProdiver, CategoryConsumer };
export default CategoriesContex
