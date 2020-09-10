import React from "react";

function BrowseCategories(props) {

  const data = props.data

  return (
    <div className="card">
      <div
        className="card-header filterAccordion panel-heading collapsed"
        id="headingOne"
        data-toggle="collapse"
        data-target="#collapseOne"
        aria-expanded="false"
      >
        <span className="filterAccordion-heading accordion-toggle">
          Browse Categories
        </span>
      </div>

      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne">
        <div className="card-body filterAccordion-body">

        {console.log("category",data)}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          dolore minima aliquam optio perspiciatis sequi voluptatem possimus
          sed, mollitia distinctio quas praesentium repudiandae culpa suscipit
          exercitationem? Repellendus deleniti deserunt fugiat?
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;
