import { Dropdown, Flex, Typography } from "antd";
import { MenuProps } from "antd/lib";
import { IconCart } from "icons";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "store";
import { logout } from "features/slices/Auth";
const items: MenuProps["items"] = [
 {
  key: "1",
  label: <NavLink to='/cart'>Thông tin cá nhân</NavLink>,
 },
 {
  key: "2",
  label: <NavLink to='/cart'>Thông tin cá nhân</NavLink>,
 },
];

const { Text, Link } = Typography;

const DropdownAccount = () => {
 const dispatch = useDispatch<AppDispatch>();

 const handleLogout = () => {
  dispatch(logout());
 };
 const items: MenuProps["items"] = [
  // {
  //  key: "1",
  //  label: <Link to='/cart'>Thông tin cá nhân</Link>,
  // },
  {
   key: "1",
   label: <Link onClick={handleLogout}>Logout</Link>,
  },
 ];

 const { user } = useSelector((state: RootState) => state.auth);
 return (
  <Dropdown menu={{ items }} placement='bottomLeft'>
   <Flex className='' align='center' gap={10}>
    <Text style={{ textTransform: "capitalize", cursor: "pointer" }}>
     {user?.infoUser.accountName}
    </Text>
    <DownOutlined />
   </Flex>
  </Dropdown>
 );
};

export default DropdownAccount;
