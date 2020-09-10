import React from 'react'
import {Link} from 'react-router-dom'

const women_data = [
    {
        sub_heading:'clothing',
        item1: 't-shirs',
        item2: 'tops and tunics',
        item3: 'dresses',
        item4: 'jeans',
        item5: 'shorts',
        item6: 'saree and lehenga',
        item7: 'sportswear'
    },
    {
        sub_heading:'accessories',
        item1: 'watches',
        item2: 'jewellery',
        item3: 'wallet',
        item4: 'Raincoats',
        item5: 'HandBags and clutches',
        item6: 'shoulder Bags',
        item7: 'tlte bags'
    },
    {
        sub_heading:'Beauty Care',
        item1: 'Hair dryer',
        item2: 'Epilater',
        item3: 'skin and body care',
        item4: 'hair care',
        item5: 'cosmetics',
        item6: 'bath products',
    },
    {
        sub_heading:'footwears',
        item1: 'sports shoes',
        item2: 'casual shoe',
        item3: 'flats',
        item4: 'heels',
        item5: 'shocks and accessories',
    }
]

const Womens_Fashions = ()=> {
    return(
        
            <div className="menu-item">
        <div className="menu-item-tools">
        {women_data.map((val,ind)=>{
          return(
                <div key={ind} className="menu-item-tools-item">
                <h5>{val.sub_heading}</h5>
                <ul className="list-group ">
                <li className="list-group-item">
                  <Link className="menu-link " to="#">{val.item1}</Link>
                </li>
                <li className="list-group-item">
                  <Link className="menu-link" to="#">{val.item2}</Link>
                </li>
                <li className="list-group-item">
                <Link className="menu-link" to="#">{val.item3}</Link>
              </li>
              <li className="list-group-item">
              <Link className="menu-link" to="#">{val.item4}</Link>
            </li>
            <li className="list-group-item">
            <Link className="menu-link" to="#">{val.item5}</Link>
          </li>
           <li className="list-group-item">
            <Link className="menu-link" to="#">{val.item6}</Link>
          </li> <li className="list-group-item">
            <Link className="menu-link" to="#">{val.item7}</Link>
          </li> <li className="list-group-item">
            <Link className="menu-link" to="#">{val.item8}</Link>
          </li>
                </ul>
              </div>
  )
        })}
        </div>
      </div>
    )
}

export default Womens_Fashions