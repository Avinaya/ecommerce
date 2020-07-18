import React from 'react'
import {Link} from 'react-router-dom'

const electronic_data = [
    {

        sub_heading: 'Computer and Laptops Peripherals',
        item1:'monitors',
        item2:'keyboard',
        item3:'mouse',
        item4: 'storage devices'
    },
    {
        sub_heading: 'Mobile Phones & tablets',
        item1:'Nokia',
        item2:'Xiaomi',
        item3:'Samsung',
        item4: 'Realme',
        item5: 'Oppo',
        item6:'Vivo',
        item7:'Colors'
    },
    {
        sub_heading: 'Large home appliences',
        item1:'refrigerators',
        item2:'washing machine',
        item3:'microwave ovens',
        item4: 'air conditioners',
        item5: 'Air coolers',
       
    },
    {
        sub_heading: 'Audio accessories',
        item1:'headphones',
        item2:'Earphones',
        item3:'Gaming headphones',
        item4: 'speakers',
        item5: 'bluetooth speakers',
        item6:'sound System',
    },
    {
        sub_heading: 'telivisons',
        item1: 'sony',
        item2:'Vodeocon',
        item3:'thomson',
        item4: 'palsonic',
        item5: 'colors',
        item6: 'other brands'
    }
]

const Electronic = () => {
    return(
        
            <div className="menu-item">
        <div className="menu-item-tools">
        {electronic_data.map((val,ind)=>{
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


export default Electronic