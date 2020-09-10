import React from 'react'
import './CollasableMenu.scss'

const CollasableMenu = () => {
    return (
        <section className="collapsMenu ">
  <button className="btn btn-primary collapsMenu-btn " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample/">
  <i className="fa fa-bars" ></i>
  </button>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
       
      </section>
    )
}

export default CollasableMenu
