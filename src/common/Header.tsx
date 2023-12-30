import React from "react";
import Container from "./Container";
import { HeaderStyled } from "assets/styles/common/_header";
import { NavLink, useNavigate } from "react-router-dom";
import {
 BarIcon,
 IconCart,
 IconHeart,
 IconSearch,
 IconUser,
 MenuIcon,
} from "icons";
import { FormatDataHeader } from "helpers/FormatMenu";
import DrawerMobile from "./DrawerMobile";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Badge, Dropdown, MenuProps } from "antd";
import { API_SERVER } from "helpers/variable";
import DropdownCart from "./components/DropdownCart";
import DropdownAccount from "./components/DropwdownAccount";
const dataPage: any[] = [
 {
  id: "fbb0bb5e-e4c1-4e3b-ae36-069a8e61330e",
  title: "Home",
  idParent: null,
  href: "/",
 },
 {
  id: "d77ce25b-2324-4239-af6d-3773a4f669a9",
  title: "Shop",
  idParent: null,
  href: "/shop",
 },
 {
  id: "c23a4562-ba69-49d5-9ef4-1c7e1570855d",
  title: "About",
  idParent: null,
  href: "/about",
 },
 {
  id: "8e23bcfa-4568-4d23-a800-603f0a965d46",
  title: "Contact",
  idParent: null,
  href: "/contact",
 },
];

const items: MenuProps["items"] = [
 {
  key: "1",
  label: <NavLink to='/cart'>Giỏ hàng</NavLink>,
 },
 {
  key: "2",
  label: <NavLink to='/order'>Đơn hàng</NavLink>,
 },
];
const itemsAccount: MenuProps["items"] = [
 {
  key: "1",
  label: <NavLink to='/cart'>Giỏ hàng</NavLink>,
 },
 {
  key: "2",
  label: <NavLink to='/order'>Đơn hàng</NavLink>,
 },
];

const Header = () => {
 const [visibleToggle, setVisibleToggle] = React.useState<boolean>(false);
 const { cartItems } = useSelector((state: RootState) => state.cart);
 const { user } = useSelector((state: RootState) => state.auth);
 const { wishListItem }: any = useSelector(
  (state: RootState) => state.wishlist
 );
 const navigate = useNavigate();

 return (
  <HeaderStyled>
   <Container>
    <div className='header'>
     <div className='header__logo'>
      <img src={`${API_SERVER}/Logo.png`} alt='logo-template-1' />
      {/* <h1>Furniro</h1> */}
     </div>
     <div className='header__navbar'>
      <ul>
       {dataPage.map((navbar: any) => (
        <li key={navbar.id}>
         <NavLink className='nav-link' to={navbar.href}>
          {navbar.title}
         </NavLink>
        </li>
       ))}
      </ul>
     </div>
     <div className='header__icon-list'>
      {user ? (
       <DropdownAccount />
      ) : (
       <IconUser
        className='icon icon-user'
        onClick={() => navigate("/auth/sign-in")}
       />
      )}
      <IconSearch className='icon' />
      <Badge count={wishListItem.length}>
       <IconHeart
        className='icon icon-heart'
        onClick={() => navigate("/wishlist")}
       />
      </Badge>
      <DropdownCart />
      <BarIcon className={"icon-bar"} onClick={() => setVisibleToggle(true)} />
     </div>
    </div>
    <DrawerMobile
     dataNavbar={FormatDataHeader(dataPage)}
     setVisible={setVisibleToggle}
     visible={visibleToggle}
    />
   </Container>
  </HeaderStyled>
 );
};

export default Header;
