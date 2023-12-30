import { Col, Form, Input, Row, message } from "antd";
import { postQueryHelper } from "helpers";
import moment from "moment";
import React from "react";
import { ContactFormStyled } from "./styled";

type TValueForm = {
 name: string;
 email: string;
 subject: string;
 message: string;
};

const ContactForm = () => {
 const [formContact] = Form.useForm();

 const onFinish = async (values: TValueForm) => {
  // const time = moment().format("DD/MM/YYYY HH:mm:ss");
  // const customerInformation = {
  //  "Họ tên": values.name,
  //  Email: values.email,
  // };
  // const parameters = {
  //  title: values.subject,
  //  customerInformation: JSON.stringify(customerInformation),
  //  message: JSON.stringify({ "Tin nhắn": values.message }),
  //  time,
  // };
  // const response: any = await postQueryHelper(
  //  "/message/send-information-to-server",
  //  parameters
  // );
  // if (response.type == "error") {
  //  return message.error(response.message);
  // }
  // formContact.resetFields();
  // message.success(
  //  "Gửi thông tin thành công. Chúng tôi sẽ liên hệ lại bạn trong thời gian sớm nhất"
  // );
 };
 return (
  <ContactFormStyled>
   <div className='contact-form'>
    <div className='contact-form__heading'>
     <h2>NHẮN TIN CHO CHÚNG TÔI</h2>
    </div>
    <div className='contact-form__form'>
     <Form form={formContact} onFinish={onFinish}>
      <Row gutter={[12, 12]} className='info'>
       <Col span={8}>
        <Form.Item name='name' rules={[{ required: true }]}>
         <Input className='form-input' placeholder='Họ tên *' />
        </Form.Item>
       </Col>
       <Col span={8}>
        <Form.Item
         name='email'
         rules={[
          {
           required: true,
           type: "email",
           message: "Email không đúng định dạng.",
          },
         ]}
        >
         <Input type='email' className='form-input' placeholder='Email *' />
        </Form.Item>
       </Col>
       <Col span={8}>
        <Form.Item name='subject' rules={[{ required: true }]}>
         <Input className='form-input' placeholder='Tiêu đề *' />
        </Form.Item>
       </Col>
      </Row>
      <Form.Item name='message'>
       <textarea
        className='form-input'
        placeholder='Tin nhắn *'
        cols={30}
        rows={10}
        required
       />
      </Form.Item>
      <div className='contact-form__submit'>
       <button>GỬI</button>
      </div>
     </Form>
    </div>
   </div>
  </ContactFormStyled>
 );
};

export default ContactForm;
