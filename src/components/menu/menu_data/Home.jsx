import React from 'react'
import {Link} from 'react-router-dom'

const home_data = [
            {
                sub_heading: 'Small Home Appliance',
                item1:'Water Purifiers',
                item2:'Iron & Garment steamer',
                item3:'juicer Mixer Grinders',
                item4: 'vacuum Clearner',
                item5: 'Fan & Humidifiers',
                item6:'coffee Maker',
                item7:'solar water heater'
            },
            {
                sub_heading: 'kichen & dining',
                item1: 'pressure cookers',
                item2: 'kitchen utiensils',
                item3: 'kicthen tools',
                item4: 'Induction cooker',
                item5: 'lunch box & water bottles',
                item6: 'Glassware'
            },
            {
                sub_heading: 'Home decor & furnishing',
                item1: 'bedsheet',
                item2: 'curtains',
                item3: 'blanket & Quilts',
                item4: 'Pillows & cushions',
                item5: 'cushions covers',
                item6: 'Doormat',
                item7: 'floding bed',
                item8:'mosquito nets'
            },
            { 
                sub_heading: 'furniture',
                item1: 'Comfortable Chair',
                item2: 'Mattresses',
                item3: 'coffee Table',
                item4: 'Shoe rack',
                item5: 'floding table',
                item6: 'dining table & chair' 
            }
]

const Home = () => {
    return(

            <div className="menu-item">
        <div className="menu-item-tools">
        {home_data.map((val,ind)=>{
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

export default Home;