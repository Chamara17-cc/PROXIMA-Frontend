import React from 'react'
import SidebarItem from '../Compornents/SidebarItem';
import Logout from '../Compornents/Logout';
import "../Compornents/Sidebarstyle.css";
import items from "../Data/ProjectManagerSideBar.json"


export default function ProjectManagerSidebar() {
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
