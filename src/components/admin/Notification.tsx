import { Avatar, Divider } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { StyleLayoutNotification } from "./styled";

const Notification = () => {
 return (
  <StyleLayoutNotification>
   <div className='top'>
    <p className='title'>THÔNG BÁO</p>
    <NavLink to='#'>Xem toàn bộ</NavLink>
   </div>
   <div className='content__notification'>
    {Array.from({ length: 10 }).map((item: any, index: number) => (
     <div className='item' key={index}>
      <div className='content'>
       <Avatar icon={<UserOutlined />} size={38} />
       <div>
        <p className='title'>Notification Title</p>
        <p className='des'>Content </p>
        <p className='date'>14/11/2024</p>
       </div>
      </div>
      <Divider className='hr' />
     </div>
    ))}
   </div>
  </StyleLayoutNotification>
 );
};

export default Notification;
