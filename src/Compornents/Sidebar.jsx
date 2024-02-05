import SidebarItem from "./SidebarItem"
import items from "../Data/sidebar.json"
import Logout from "./Logout";
import "./Sidebarstyle.css";

export default function Sidebar(){
  
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