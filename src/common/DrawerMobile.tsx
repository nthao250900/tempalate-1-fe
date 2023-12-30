import { DrawerStyled } from "assets/styles/common/_drawerMobile";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface TProps {
 visible: boolean;
 setVisible: Function;
 dataNavbar: any;
}

const DrawerMobile = ({ visible, setVisible, dataNavbar }: TProps) => {
 const wrapperRef = React.useRef<any>(null);
 const [open, setOpen] = React.useState<number>(0);
 const navigate = useNavigate();

 const handleSwitchLink = (href: string) => {
  navigate(href);
  setVisible(false);
 };

 const toggleSubMenu = (key: number) => {
  setOpen(key);
 };

 React.useEffect(() => {
  if (!visible) return;
  function handleClickOutside(event: any) {
   if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
    setVisible(false);
   }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
   document.removeEventListener("mousedown", handleClickOutside);
  };
 }, [wrapperRef, visible]);

 return (
  <DrawerStyled ref={wrapperRef}>
   <div className={`drawer ${visible ? "active" : ""}`}>
    <ul className='dropdown-menu'>
     {/* <SearchInput visibleDrawer={setVisible} /> */}
     <div className='close' onClick={() => setVisible(!visible)}>
      <i className='fa-regular fa-rectangle-xmark'></i>
     </div>
     <li>
      <p onClick={() => handleSwitchLink("/")}>Trang Chủ</p>
     </li>
     {dataNavbar.map((nav: any, key: number) => {
      const openSubMenu = open !== 0 && open === key + 1;
      const isLink = nav.subMenu.length > 0;
      return (
       <li key={key} className={openSubMenu ? "active-parent" : ""}>
        {!isLink && (
         <p onClick={() => handleSwitchLink(nav.href)}>{nav.title}</p>
        )}
        {nav.subMenu.length > 0 && (
         <>
          <div
           onClick={() => toggleSubMenu(openSubMenu ? 0 : key + 1)}
           style={{
            cursor: "pointer",
           }}
          >
           <p>{nav.title}</p>
           <i
            className={`icon-menu fas ${
             openSubMenu ? "fa-chevron-right" : "fa-chevron-down"
            }`}
           ></i>
          </div>
          {openSubMenu && (
           <ul
            className='sub-menu'
            style={openSubMenu ? { display: "block" } : { display: "none" }}
           >
            {nav.subMenu.map((subMenu: any, keySubMenu: number) => (
             <li key={keySubMenu}>
              <p
               onClick={() => handleSwitchLink(`${nav.href}/${subMenu.href}`)}
              >
               {subMenu.title}
              </p>
             </li>
            ))}
           </ul>
          )}
         </>
        )}
       </li>
      );
     })}
    </ul>
   </div>
  </DrawerStyled>
 );
};

export default DrawerMobile;
