import React from 'react'
import './Search.scss'

function Search() {
  return (
    <div class="searchBar">
      <input type="text" class="searchTerm" placeholder="Search For Products, Brands and Categories... "/>
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
  )
}

export default Search
