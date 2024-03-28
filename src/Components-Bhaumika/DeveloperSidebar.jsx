import React from 'react'
import SidebarItem from '../Compornents/SidebarItem';
import items from "../Data/Developersidebar.json"
import Logout from '../Compornents/Logout';
import "../Compornents/Sidebarstyle.css";

function DeveloperSidebar() {


  return (
    
    <div className="sidebar">
    <hr />
    <span className="workspace">
     <font size="7" align="center">P</font><font>roxima workspace</font>
     <hr></hr>
    </span>
    { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    <Logout/>
  </div>
  
  )
}

export default DeveloperSidebar