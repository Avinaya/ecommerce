import React from "react";
import "./SideBarMob.scss";
import { slide as Menu } from "react-burger-menu";

function SideBarMob() {

  return (
      <div className="sideBarMob">
      <Menu pageWrapId={"page-wrap"} width={"80%"} className="sideBarMob-menu" isOpen={ false }>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          eos consequatur velit enim quia, earum repellat rerum iste minima nisi
          fuga molestiae, tempore reiciendis obcaecati quasi illo error sint
          provident?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Velit nesciunt reiciendis quasi error. Accusamus voluptatibus ab vel
          voluptatum, asperiores ex earum nam aliquid. Saepe inventore nam ullam
          ipsam molestias. Sapiente!
        </span>
      </Menu>
      </div>
  );
}

export default SideBarMob;
