import React from "react";

export default function Price() {
  return (
      
    <div className="card">
      <div
        className="card-header filterAccordion panel-heading collapsed"
        id="headingTwo"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <span className="filterAccordion-heading accordion-toggle">Price</span>
      </div>

      <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo">
        <div className="card-body filterAccordion-body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          dolore minima aliquam optio perspiciatis sequi voluptatem possimus
          sed, mollitia distinctio quas praesentium repudiandae culpa suscipit
          exercitationem? Repellendus deleniti deserunt fugiat?
        </div>
      </div>
    </div>
  );
}
