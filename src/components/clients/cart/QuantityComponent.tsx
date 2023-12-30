import { InputNumber } from "antd";
import { updateQuantity } from "features/slices/Cart";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
interface Props {
 quantity: number;
 itemProduct?: any;
}
const QuantityComponent = ({ quantity, itemProduct }: Props) => {
 const dispatch = useDispatch<AppDispatch>();
 const handleUpdateQuantity = (value: number | string | null) => {
  dispatch(updateQuantity({ ...itemProduct, quantityUpdate: value }));
 };
 return (
  <>
   <InputNumber
    min={1}
    max={10}
    defaultValue={Number(quantity)}
    onChange={handleUpdateQuantity}
   />
  </>
 );
};

export default QuantityComponent;
