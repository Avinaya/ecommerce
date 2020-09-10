import React from 'react'

function Brand() {
    return (
        
    <div className="card">
    <div className="card-header filterAccordion panel-heading collapsed" id="headingThree"
          data-toggle="collapse"
          data-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseThree"
          >
        <span
        className="filterAccordion-heading accordion-toggle"
        >
          Brand
        </span>

    </div>

    <div
      id="collapseThree"
      className="collapse show"
      aria-labelledby="headingThree"
    >
      <div className="card-body filterAccordion-body">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
        dolore minima aliquam optio perspiciatis sequi voluptatem possimus
        sed, mollitia distinctio quas praesentium repudiandae culpa suscipit
        exercitationem? Repellendus deleniti deserunt fugiat?
      </div>
    </div>
  </div>
  
    )
}

export default Brand
