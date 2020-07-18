import React from 'react'
import {Link} from 'react-router-dom'

const other_data = [
    {
        sub_heading: 'Food Essential',
        item1: 'Biscuit and cookies',
        item2: 'sugar salt masalas and spices',
        item3: 'hot & cold Beverage',
        item4: 'salty snacks & Namkeens',
        item5: 'rice & rice products',
        item6: 'chocolates & candies',
        item7: 'cooking oil & ghee',
        item8: 'Noodeles & pasta'
    },
    {
        sub_heading: 'frozen food',
        item1: 'Bajeko Sekuwa',
        item2: 'Gourmet vienna'
    },
    {
        sub_heading:'Liquors',
        item1: 'blended whisky',
        item2: 'borbon',
        item3: 'brut',
        item4: 'champagne',
        item5: 'Beer',
        item6: 'rum',
        item7: 'vodka',
        item8: 'wine',
    },
    {
        sub_heading: 'fresh',
        item1: 'fruits',
        item2: 'vegetable'
    }
]

const Other = ()=>{
    return(
        
            <div className="menu-item">
        <div className="menu-item-tools">
        {other_data.map((val,ind)=>{
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

export default Other