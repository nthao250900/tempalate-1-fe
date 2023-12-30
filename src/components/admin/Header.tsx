import { Avatar, Badge, Button, Popover } from "antd";
import React from "react";
import {
 UserOutlined,
 MenuUnfoldOutlined,
 MenuFoldOutlined,
} from "@ant-design/icons";
import Notification from "./Notification";
import { StyleHeaderAdmin } from "./styled";

interface TProps {
 collapsed: boolean;
 setCollapsed: Function;
}

const Header = ({ setCollapsed, collapsed }: TProps) => {
 return (
  <StyleHeaderAdmin>
   <Button
    type='text'
    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    onClick={() => setCollapsed(!collapsed)}
    style={{
     fontSize: "16px",
    }}
   />
   <div className='header__right'>
    <Popover placement='bottomRight' content={<Notification />} trigger='click'>
     <Button type='text'>
      <Badge dot>
       <i className='fa-regular fa-bell'></i>
      </Badge>
     </Button>
    </Popover>
    <Button type='text'>
     <Badge dot>
      <i className='fa-solid fa-message'></i>
     </Badge>
    </Button>
    <Avatar size='large' icon={<UserOutlined />} />
   </div>
  </StyleHeaderAdmin>
 );
};

export default Header;
