import { Dropdown } from "antd";
import { MenuProps } from "antd/lib";
import { IconCart } from "icons";
import React from "react";
import { NavLink } from "react-router-dom";
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
const DropdownCart = () => {
 return (
  <Dropdown menu={{ items }} placement='bottomLeft'>
   <IconCart className='icon icon-cart' />
  </Dropdown>
 );
};

export default DropdownCart;
