import React from "react";
import SidebarLinks from "./SidebarLinks";
import routes from "routes";
import { StyleSidebar } from "./styled";

const Sidebar = () => {
 return (
  <StyleSidebar>
   <div className='top'>
    <div className='logo'>
     {/* <img src='/images/logo.png' alt='logo' /> */}
     <p>Evaly</p>
    </div>
    <div className='toggle'>
     {/* <img src='/images/toggle-sidebar.png' alt='toggle' /> */}
    </div>
   </div>
   <ul className='mb-auto pt-1'>
    <SidebarLinks routes={routes} />
   </ul>
  </StyleSidebar>
 );
};

export default Sidebar;
