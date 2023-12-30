import { Checkbox, Col, Form, Input, Row } from "antd";
import React from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import {
 formatCVC,
 formatCreditCardNumber,
 formatExpirationDate,
} from "./until";
import { CheckboxChangeEvent } from "antd/es/checkbox";
const CardOption = () => {
 const [formCardOption] = Form.useForm();
 const [focus, SetFocus] = React.useState<
  "name" | "number" | "expiry" | "cvc" | ""
 >("");
 const [name, setName] = React.useState<string>("");
 const [number, setNumber] = React.useState<string>("");
 const [expiry, setExpiry] = React.useState<string>("");
 const [cvc, setCVC] = React.useState<string>("");

 const onSubmit = (values: any) => {};
 const onChangeCardNumber = (evt: any) => {
  const { value } = evt.target;
  setNumber(value);
  formCardOption.setFieldsValue({
   cardNumber: formatCreditCardNumber(value),
  });
 };
 const onChangeExpirationDate = (evt: any) => {
  const { value } = evt.target;
  setExpiry(value);
  formCardOption.setFieldsValue({
   expirationDate: formatExpirationDate(value),
  });
 };
 const onChangeCVC = (evt: any) => {
  const { value } = evt.target;
  setCVC(value);
  formCardOption.setFieldsValue({
   CVC: formatCVC(value),
  });
 };
 const handleInputFocus = ({ target }: any) => {
  SetFocus(target.name);
 };

 const onChangeCheckBox = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
 };

 return (
  <>
   <Cards
    name={name}
    number={number}
    expiry={expiry}
    cvc={cvc}
    focused={focus}
   />
   <Form
    form={formCardOption}
    onFinish={onSubmit}
    layout='vertical'
    autoComplete='off'
    style={{
     marginTop: 20,
    }}
   >
    <Row gutter={[12, 12]}>
     <Col span={16}>
      <Form.Item name='name' label='Name' required>
       <Input
        onFocus={handleInputFocus}
        type='text'
        name='name'
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
       />
      </Form.Item>
      <Form.Item name='cardNumber' label='Card Number' required>
       <Input
        onFocus={handleInputFocus}
        type='tel'
        name='number'
        pattern='[\d| ]{16,22}'
        placeholder='Card Number'
        onChange={onChangeCardNumber}
       />
      </Form.Item>
      <Row gutter={[12, 12]}>
       <Col span={16}>
        <Form.Item name='expirationDate' label='Expiration Date' required>
         <Input
          onFocus={handleInputFocus}
          type='tel'
          name='expiry'
          pattern='\d\d/\d\d'
          placeholder='Expiration Date'
          onChange={onChangeExpirationDate}
         />
        </Form.Item>
       </Col>
       <Col span={8}>
        <Form.Item name='CVC' label='CVC' required>
         <Input
          onFocus={handleInputFocus}
          type='tel'
          name='cvc'
          pattern='\d{3,4}'
          placeholder='CVC'
          onChange={onChangeCVC}
         />
        </Form.Item>
       </Col>
       <Checkbox onChange={onChangeCheckBox}>Save card details</Checkbox>
      </Row>
     </Col>
    </Row>
   </Form>
  </>
 );
};

export default CardOption;
