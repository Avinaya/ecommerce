import React from 'react'
import {Link} from 'react-router-dom'

const mens_data = [
    {
        sub_heading:'Accessories',
        item1: 'Watches',
        item2: 'Raincoats',
        item3: 'BagPAcks',
        item4: 'Wallets',
        item5: 'Belts',
        item6: 'SunGlasses',
    },
    {
        sub_heading:'clothing',
        item1: 'casual and formal shirt',
        item2: 'windcheater',
        item3: 'sports wears',
        item4: 'jeans',
        item5: 'shorts',
        item6: 'kurtha',
        item7: 'boxers and innerware',
        item8: 'formal pant and chinos',
        item9: 'jackets'
    },
    {
        sub_heading:'FootWear',
        item1: 'sport shoe',
        item2: 'casual',
        item3: 'treakking shoes',
        item4: 'sandals and slippers',
        item5: 'loafers',
        item6: 'boots',
    },
    {
        sub_heading:'Grooming',
        item1: 'Perfume and cologne',
        item2: 'mens hair care'
    }
    

]

const Mens_Fashions = () =>{
    return(
        
            <div className="menu-item">
        <div className="menu-item-tools">
        {mens_data.map((val,ind)=>{
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
export default Mens_Fashions