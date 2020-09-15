import React from "react";

function Colour() {
  return (
    <div className="card">
      <div
        className="card-header filterAccordion panel-heading collapsed"
        id="headingColour"
        data-toggle="collapse"
        data-target="#collapseColour"
        aria-expanded="true"
        aria-controls="collapseColour"
      >
        <span className="filterAccordion-heading accordion-toggle">Colour</span>
      </div>

      <div
        id="collapseColour"
        className="collapse show"
        aria-labelledby="headingColour"
      >
        <div className="card-body filterAccordion-body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          dolore minima aliquam optio perspiciatis sequi voluptatem possimus
          sed, mollitia distinctio quas praesentium repudiandae culpa suscipit
          exercitationem? Repellendus deleniti deserunt fugiat? Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Debitis odio, aspernatur
          quisquam inventore beatae adipisci neque pariatur impedit eum quasi,
          ut ullam consequuntur qui incidunt quam tempore aliquid iste eius.
        </div>
      </div>
    </div>
  );
}

export default Colour;
