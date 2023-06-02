import React from "react";
import "./CSS/SidebarOption.css"



function SidebarOption({ text, Icon }) {
    return(
      <div className="link">
          <Icon />
          <h2>{text}</h2>
      </div>
    );
  }
export default SidebarOption;