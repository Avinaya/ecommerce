import React from 'react'
import './NoProducts.scss'

function NoProduct() {
    return (
        <div className="noProducts">
            <h2>We're sorry. We cannot find any matches for you.</h2>
            <i className="fa fa-search"/>
        </div>
    )
}

export default NoProduct
