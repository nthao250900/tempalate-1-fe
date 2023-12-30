import React from "react";
import { Button, Flex, Form, Input } from "antd";
import Container from "common/Container";
import { postQueryHelper } from "helpers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { login } from "features/slices/Auth";

type FieldType = {
 username?: string;
 password?: string;
};

const boxStyle: React.CSSProperties = {
 width: "100%",
 height: "100vh",
};

const Component = () => {
 const dispatch = useDispatch<AppDispatch>();
 const onFinish = async (values: any) => {
  dispatch(login(values));
 };

 return (
  <Container>
   <Flex style={boxStyle} justify='center' align='center'>
    <Form name='basic' onFinish={onFinish} autoComplete='off'>
     <Form.Item<FieldType>
      label='Tài khoản:'
      name='username'
      rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
     >
      <Input />
     </Form.Item>

     <Form.Item<FieldType>
      label='Mật khẩu:'
      name='password'
      rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
     >
      <Input.Password />
     </Form.Item>

     <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type='primary' htmlType='submit'>
       Đăng nhập
      </Button>
     </Form.Item>
    </Form>
   </Flex>
  </Container>
 );
};

export default Component;
