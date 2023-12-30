import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
 Button,
 Col,
 Form,
 Input,
 Radio,
 RadioChangeEvent,
 Result,
 Row,
 Typography,
 message,
} from "antd";
import Colors from "modules/Colors";
import { AppDispatch, RootState } from "store";
import { useNavigate } from "react-router-dom";
import Container from "common/Container";
import CardOption from "./cartCredit";
import PaymentOnDeliveryOption from "./paymentOnDelivery";
import { StyledPay } from "./styled";
import { formatter } from "components/admin/common/formatPrice";
import { TCart } from "../cart/Table";
import OrderComponent from "./Order";
import { postQueryHelper } from "helpers";
import { selectCart } from "features/slices/Cart";
import { getAllOrder } from "features/slices/Order";

const { Text } = Typography;

const Component = () => {
 const { user } = useSelector((state: RootState) => state.auth);
 const { idCart } = useSelector((state: RootState) => state.cart);
 const [formSendOrder] = Form.useForm();
 const [isLoadingPage, setIsLoadingPage] = React.useState<boolean>(false);
 const [valuePaymentType, setValue] = React.useState("paymentoOnDelivery");
 const [valueGiftCode, setValueGiftCode] = React.useState<string>("");
 const { cartItems } = useSelector((state: RootState) => state.cart);
 const navigate = useNavigate();
 const dispatch = useDispatch<AppDispatch>();
 if (!user)
  return (
   <StyledPay>
    <Result
     status='404'
     title={
      <h1
       style={{
        color: Colors.yellowColor,
       }}
      >
       WARNING
      </h1>
     }
     subTitle='Please login to make payment.'
     extra={
      <Button onClick={() => navigate("/auth/sign-in")} type='primary'>
       Login
      </Button>
     }
    />
   </StyledPay>
  );

 var shipping = "15000";
 const onChange = (e: RadioChangeEvent) => {
  setValue(e.target.value);
 };
 let cartTotalAmount = 0;
 cartItems?.forEach((item: TCart) => {
  cartTotalAmount += Number(item.cartQuantity) * Number(item.productPrice);
 });

 const onSubmitOrder = React.useCallback(
  async (value: any) => {
   setIsLoadingPage(true);
   const parameters = {
    userId: user.infoUser.accountId,
    productList: JSON.stringify(cartItems),
    information_user: JSON.stringify(value),
    payment_type: valuePaymentType,
    giftCode: valueGiftCode,
    total: cartTotalAmount + Number(shipping),
    status: 0,
    notes: "",
    idCart,
   };
   const response: any = await postQueryHelper(
    "/order/create-order",
    parameters
   );
   setIsLoadingPage(false);
   if (response?.type === "error") {
    message.error("Đặt hàng thất bại");
   } else {
    dispatch(selectCart(user.infoUser.accountId));
    dispatch(getAllOrder(user.infoUser.accountId));
    message.success("Đặt hàng thành công");
    navigate("/order");
   }
  },
  [user]
 );

 const renderContent = (view: string) => {
  switch (view) {
   //  case "card":
   //   return <CardOption />;
   case "bank":
    return <h1>bank</h1>;
   case "paymentoOnDelivery":
    return (
     <PaymentOnDeliveryOption form={formSendOrder} onSubmit={onSubmitOrder} />
    );

   default:
    return <></>;
  }
 };
 return (
  <StyledPay>
   <Container>
    <div className='pay'>
     <div className='pay__left'>
      <div className='title'>
       <h3>Payment</h3>
      </div>
      {user.infoUser.accountActive === 0 && (
       <Text type='danger'>Tài khoản chưa được kích hoạt</Text>
      )}
      <div className='pay__with'>
       <div className='pay__with-title'>
        <h4>Pay With</h4>
       </div>
       <div className='pay__with-option'>
        <Radio.Group onChange={onChange} value={valuePaymentType}>
         <Radio value={"paymentoOnDelivery"}>Payment on delivery</Radio>
         {/* <Radio value={"card"}>Card</Radio> */}
         <Radio value={"bank"}>Bank</Radio>
        </Radio.Group>
       </div>
      </div>
      {renderContent(valuePaymentType)}
      <Row gutter={[12, 12]}>
       <Col span={16}>
        <Button
         type='primary'
         disabled={user.infoUser.accountActive === 0}
         block
         loading={isLoadingPage}
         style={{
          backgroundColor: Colors.secondaryColor1,
          marginTop: 20,
         }}
         onClick={() => formSendOrder.submit()}
        >
         {formatter.format(cartTotalAmount + Number(shipping))}
        </Button>
       </Col>
      </Row>
     </div>
     <div className='pay__right'>
      <div className='title'>
       <h1>Order Summary</h1>
      </div>
      <div className='pay__right-content'>
       {cartItems?.map((record: TCart) => (
        <div key={record.productId}>
         <OrderComponent record={record} total={cartTotalAmount} />
        </div>
       ))}
      </div>
      <div className='pay__right-gift_code'>
       <Input
        className='input'
        onChange={(value) => setValueGiftCode(value.target.value.toUpperCase())}
        placeholder='Gift or discount code'
       />
       <Button className='button'>Apply</Button>
      </div>
      <div className='pay__right-info'>
       <p className='label'>Subtotal</p>
       <p className='text'>{formatter.format(Number(cartTotalAmount))}</p>
      </div>
      <div className='pay__right-info'>
       <p className='label'>Shipping</p>
       <p className='text'>{formatter.format(Number(shipping))}</p>
      </div>
      <div className='pay__right-info'>
       <div className='label'>
        <p>Total</p>
        <span>Including $2.24 in taxes</span>
       </div>
       <p className='text'>
        {formatter.format(Number(cartTotalAmount) + Number(shipping))}
       </p>
      </div>
     </div>
    </div>
   </Container>
  </StyledPay>
 );
};

export default Component;
