import React from "react";
import {
 Button,
 Col,
 Flex,
 Form,
 Input,
 InputNumber,
 Row,
 Select,
 Spin,
 Tag,
 Typography,
 message,
} from "antd";
import type { CustomTagProps } from "rc-select/lib/BaseSelect";
import UploadComponent from "common/Upload";
import TextEditor from "common/TextEditor";
import _, { isObject } from "lodash";
import {
 QUERY_PRODUCT_ADMIN,
 getQueryHelper,
 patchQueryHelper,
 postQueryHelper,
} from "helpers";
import { theme } from "theme";
import { useQueryClient } from "react-query";
import {
 saveProductQuery,
 updateProductQuery,
 TFromValueAddProduct,
} from "./query";
import CurrencyInput from "react-currency-input-field";

type TProps = {
 formUpdate?: any;
 imageListUpdate?: any;
 type?: "update" | "add";
 idProduct?: string;
 setVisibleUpdateModal?: Function;
};

type TCategoryOption = {
 label: string;
 value: string;
};
interface YourObjectType {
 [key: string]: string;
}

const { Title } = Typography;

const style = {
 input: {
  height: 45,
 },
 form: {
  width: "100%",
 },
};

const optionSize = [
 {
  value: "S",
  label: "S",
 },
 {
  value: "M",
  label: "M",
 },
 {
  value: "L",
  label: "L",
 },
 {
  value: "XL",
  label: "XL",
 },
 {
  value: "XXL",
  label: "XXL",
 },
];

const AddProduct = ({
 formUpdate = undefined,
 imageListUpdate = [],
 type = "add",
 idProduct = "",
 setVisibleUpdateModal = undefined,
}: TProps) => {
 const [form] = Form.useForm();
 const [typeView, setTypeView] = React.useState<"update" | "add">(type);
 const [imageList, setImageList] = React.useState([]);
 const [valuePrice, setValuePrice] = React.useState<string>();
 const [valuePriceDiscount, setValuePriceDiscount] = React.useState<string>();
 const [colorOption, setColorOption] = React.useState<
  { value: string; label: string }[]
 >([]);
 const [productParameter, setProductParameter] = React.useState<string>(
  type === "add" ? "" : formUpdate.getFieldsValue().productParameter
 );
 const [productDescription, setProductDescription] = React.useState<string>(
  type === "add" ? "" : formUpdate.getFieldsValue().description
 );
 const [categoryOption, setCategoryOption] = React.useState<TCategoryOption[]>(
  []
 );
 const [isLoading, setIsLoading] = React.useState<boolean>(false);
 const queryClient = useQueryClient();
 const colorsTheme: any = theme.colors;

 React.useEffect(() => {
  setImageList(imageListUpdate);
 }, [typeView === "update"]);

 const onSaveProduct = async (values: TFromValueAddProduct) => {
  if (imageList.length === 0)
   return message.error("Vui lòng tải hình ảnh sản phẩm.");
  setIsLoading(true);
  const imageSuccessUpload = _.filter(imageList, { status: "done" }).map(
   (item: any) => item.name
  );
  const parameters = {
   ...values,
   images: JSON.stringify(imageSuccessUpload),
   productName: values.productName,
   productParameter,
   price: valuePrice,
   colors: JSON.stringify(values.colors),
   size: JSON.stringify(values.size),
   description: productDescription,
  };
  let response: any;
  if (type === "add") {
   response = await saveProductQuery(parameters);
  } else {
   response = await updateProductQuery(parameters, idProduct);
  }
  queryClient.invalidateQueries(QUERY_PRODUCT_ADMIN);
  setTypeView("add");
  if (response.type === "error") {
   message.error(response.message);
   setIsLoading(false);
   return;
  } else {
   message.success("Thêm sản phẩm thành công.");
   form.resetFields();
   if (type === "add") setImageList([]);
   setIsLoading(false);
   if (setVisibleUpdateModal) setVisibleUpdateModal(false);
  }
 };

 const onGetCategoryData = async () => {
  const categoryData: any = await getQueryHelper("/category/get-all-category");
  const options = categoryData.map(
   (category: { title: string; href: string; id: string }) => ({
    label: category.title,
    value: category.id,
   })
  );
  setCategoryOption(options);
 };

 React.useEffect(() => {
  onGetCategoryData();
 }, []);

 const optionColor = React.useCallback(() => {
  const colorCustom: { value: string; label: string }[] = [];
  Object.keys(colorsTheme).map((keysColor: string) => {
   const color: YourObjectType = colorsTheme[keysColor];
   if (!isObject(color)) return;
   return Object.keys(color).map((key: string) =>
    colorCustom.push({ value: color[key], label: `${keysColor}-${key}` })
   );
  });
  setColorOption(colorCustom);
 }, [colorsTheme]);

 React.useEffect(() => {
  optionColor();
 }, [optionColor]);

 const tagRender = (props: CustomTagProps) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
   event.preventDefault();
   event.stopPropagation();
  };
  return (
   <Tag
    color={value}
    onMouseDown={onPreventMouseDown}
    closable={closable}
    onClose={onClose}
    style={{ marginRight: 3 }}
   >
    {label}
   </Tag>
  );
 };

 if (isLoading)
  return (
   <Flex
    justify='center'
    align='center'
    style={{
     width: "100%",
     height: "100%",
    }}
   >
    <Spin spinning={isLoading} />
   </Flex>
  );

 return (
  <div>
   {!formUpdate && (
    <Title style={{ textAlign: "center" }} level={3}>
     THÊM SẢN PHẨM
    </Title>
   )}
   <Flex>
    <Form
     form={formUpdate || form}
     style={style.form}
     layout='vertical'
     onFinish={onSaveProduct}
    >
     <Form.Item label={"Tên sản shẩm:"} name='productName' required>
      <Input
       styles={{
        input: style.input,
       }}
      />
     </Form.Item>
     <Row gutter={[12, 12]}>
      <Col span={8}>
       <Form.Item label={"Giá:"} name='price' required>
        <Flex align='center' gap={5}>
         <CurrencyInput
          className='input-price'
          style={{
           height: 45,
           width: "100%",
           border: "1px solid #d9d9d9",
           borderRadius: 6,
           padding: "0 10px",
          }}
          intlConfig={{ locale: "vn", currency: "VND" }}
          groupSeparator='.'
          onValueChange={(value: any) => {
           setValuePrice(value);
          }}
         />
        </Flex>
       </Form.Item>
      </Col>
      <Col span={8}>
       <Form.Item
        label='Giảm giá'
        name='discount'
        rules={[
         {
          type: "number",
          max: 100,
          min: 0,
          message: "Định dạng không đúng, tối đa 100 và tối thiểu 0",
          transform(value) {
           return Number(value);
          },
         },
        ]}
       >
        <Flex align='center' gap={5}>
         <InputNumber
          style={{
           height: 45,
          }}
          min={0}
          max={100}
         />
         %
        </Flex>
       </Form.Item>
      </Col>
     </Row>
     <Row gutter={[12, 12]}>
      <Col span={8}>
       <Form.Item label={"Mã sản shẩm:"} name='productCode' required>
        <Input
         styles={{
          input: style.input,
         }}
        />
       </Form.Item>
      </Col>
      <Col span={8}>
       <Form.Item label={"Thương hiệu:"} name='trademark'>
        <Input
         styles={{
          input: style.input,
         }}
        />
       </Form.Item>
      </Col>
      <Col span={8}>
       <Form.Item label={"Loại sản phẩm:"} name='categoryCode' required>
        <Select
         showSearch
         style={{ height: 45 }}
         placeholder='Loại sản phẩm'
         optionFilterProp='children'
         filterOption={(input: string, option: any) =>
          (option?.label ?? "").includes(input)
         }
         filterSort={(optionA: TCategoryOption, optionB: TCategoryOption) =>
          (optionA?.label ?? "")
           .toLowerCase()
           .localeCompare((optionB?.label ?? "").toLowerCase())
         }
         options={categoryOption}
        />
       </Form.Item>
      </Col>
     </Row>
     <Row gutter={[12, 12]}>
      <Col span={8}>
       <Form.Item label={"Màu:"} name='colors' required>
        <Select
         mode='multiple'
         tagRender={tagRender}
         style={{ width: "100%", height: 45 }}
         options={colorOption}
        />
       </Form.Item>
      </Col>
      <Col span={8}>
       <Form.Item label={"Kích thước:"} name='size'>
        <Select
         mode='multiple'
         style={{ width: "100%", height: 45 }}
         options={optionSize}
        />
       </Form.Item>
      </Col>
     </Row>
     <Form.Item label='Thông số:' name='productParameter' required>
      <TextEditor onChange={setProductParameter} />
     </Form.Item>
     <Form.Item label='Mô tả chi tiết:' name='description'>
      <TextEditor onChange={setProductDescription} />
     </Form.Item>
     <UploadComponent resultUploadImage={setImageList} imageList={imageList} />
     {!formUpdate && (
      <Form.Item label={" "}>
       <Button type='primary' htmlType='submit'>
        Thêm sản phẩm
       </Button>
      </Form.Item>
     )}
    </Form>
   </Flex>
  </div>
 );
};

export default AddProduct;
