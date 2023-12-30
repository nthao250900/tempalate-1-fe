import {
 Button,
 Col,
 Empty,
 Flex,
 Form,
 Modal,
 Popconfirm,
 Row,
 Typography,
 Tree,
 message,
} from "antd";
import React from "react";
import type { DirectoryTreeProps } from "antd/es/tree";
import { CategoryAdminStyled } from "./styled";
import { useQuery, useQueryClient } from "react-query";
import { QUERY_CATEGORY_ADMIN, QUERY_PRODUCT_ADMIN } from "helpers";
import { deleteCategoryQuery, getCategoryQuery } from "./query";
import { deleteProductQuery, getProductQuery } from "../products/query";
import _ from "lodash";
import { theme } from "theme";
import InformationProduct from "./InformationProduct";
import { TProduct } from "@types";
import {
 EditOutlined,
 DeleteOutlined,
 PlusOutlined,
 QuestionCircleOutlined,
} from "@ant-design/icons";
import LoadingV2 from "common/LoadingV2";
import ContentModal from "./ContentModal";

const { DirectoryTree } = Tree;
const { Text } = Typography;

type TCategoryAdmin = {
 id: string;
 title: string;
 href: string;
};
interface TStateSelectedTree {
 isSelected: boolean;
 dataSelect: TCategoryAdmin;
}
type TStateModal = {
 visible: boolean;
 type: "update" | "add";
 title: string;
 okText: string;
 cancelText: string;
};

const Component = () => {
 const [treeDataState, setTreeDataState] = React.useState<any>([]);
 const [selectedProduct, setSelectedProduct] = React.useState<
  TProduct | undefined
 >(undefined);
 const [selectedProductChildren, setSelectedProductChildren] = React.useState<
  string[]
 >([]);
 const [buttonTreeState, setButtonTreeState] =
  React.useState<TStateSelectedTree>({
   isSelected: false,
   dataSelect: { id: "", title: "", href: "" },
  });
 const [modalCategory, setModalCategory] = React.useState<TStateModal>({
  visible: false,
  type: "add",
  title: "THÊM DANH MỤC SẢN PHẨM",
  cancelText: "Hủy",
  okText: "Thêm",
 });
 const [formUpdateAndAddCategory] = Form.useForm();
 const { data: dataCategory, isLoading: isLoadingCategory }: any = useQuery(
  QUERY_CATEGORY_ADMIN,
  () => getCategoryQuery()
 );
 const { data: dataProduct, isLoadinG: isLoadingProduct }: any = useQuery(
  QUERY_PRODUCT_ADMIN,
  () => getProductQuery()
 );
 const queryClient = useQueryClient();

 const formatDataTree = (category: any, productParam: any) => {
  const result = category.map((category: any) => {
   const resultFilterProduct = _.filter(productParam, {
    categoryCode: category.id,
   }).map((product: any) => {
    return {
     ...product,
     title: product.productName,
     key: product.productId,
     isLeaf: true,
    };
   });

   return {
    href: category.href,
    title: `${category.title} (${resultFilterProduct.length})`,
    titleDefault: category.title,
    key: category.id,
    children: resultFilterProduct,
   };
  });
  setTreeDataState(result);
 };

 const refreshSelectProduct = () => {
  if (selectedProduct) {
   const result = _.filter(dataProduct, {
    productId: selectedProduct.productId,
   })[0];
   if (!_.isArray(result.productImages))
    result.productImages = JSON.parse(result.productImages);
   setSelectedProduct(result);
  }
 };

 React.useEffect(() => {
  refreshSelectProduct();
  if (!isLoadingCategory && !isLoadingProduct) {
   formatDataTree(dataCategory, dataProduct);
  }
 }, [dataCategory, dataProduct, isLoadingCategory, isLoadingProduct]);

 const onSelect: DirectoryTreeProps["onSelect"] = (keys, info) => {
  if (info.selectedNodes[0].children) {
   const { key, href, titleDefault }: any = info.node;
   setButtonTreeState({
    isSelected: true,
    dataSelect: {
     id: key,
     href: href,
     title: titleDefault,
    },
   });
   setSelectedProductChildren(
    info.selectedNodes[0].children.map((item: any) => item.productId)
   );
   return setSelectedProduct(undefined);
  }
  const { key, isLeaf, title, ...product }: any = info.selectedNodes[0];
  if (!_.isArray(product.productImages))
   product.productImages = JSON.parse(product.productImages || "[]");
  setButtonTreeState({
   isSelected: false,
   dataSelect: {
    id: "",
    href: "",
    title: "",
   },
  });
  setSelectedProduct(product);
 };

 const handleOptionModal = (type: "update" | "add") => {
  if (type === "update") {
   setModalCategory({
    visible: true,
    cancelText: "Hủy",
    okText: "Cập nhật",
    title: buttonTreeState.dataSelect.title,
    type,
   });
   formUpdateAndAddCategory.setFieldsValue(buttonTreeState.dataSelect);
  } else {
   setModalCategory({
    visible: true,
    cancelText: "Hủy",
    okText: "Thêm",
    title: "Thêm mới danh mục",
    type,
   });
  }
 };

 const handleDeleteCategory = async () => {
  const responseCategory = await deleteCategoryQuery(
   buttonTreeState.dataSelect.id
  );
  if (selectedProductChildren?.length > 0) {
   selectedProductChildren?.map(async (id) => {
    const responseDeleteProduct = await deleteProductQuery(id);
    if (responseCategory || responseDeleteProduct) {
     message.success(`Xóa ${buttonTreeState.dataSelect.title} thành công`);
     queryClient.invalidateQueries(QUERY_CATEGORY_ADMIN);
     queryClient.invalidateQueries(QUERY_PRODUCT_ADMIN);
    } else {
     message.error(`Xóa ${buttonTreeState.dataSelect.title} thất bại`);
    }
   });
   return;
  }
  if (responseCategory) {
   message.success(`Xóa ${buttonTreeState.dataSelect.title} thành công`);
   queryClient.invalidateQueries(QUERY_CATEGORY_ADMIN);
   queryClient.invalidateQueries(QUERY_PRODUCT_ADMIN);
  } else {
   message.error(`Xóa ${buttonTreeState.dataSelect.title} thất bại`);
  }
 };

 return (
  <CategoryAdminStyled>
   <Modal
    title={modalCategory.title}
    open={modalCategory.visible}
    okText={modalCategory.okText}
    cancelText={modalCategory.cancelText}
    onOk={() => {
     formUpdateAndAddCategory.submit();
     setModalCategory((prev: TStateModal) => ({
      ...prev,
      visible: false,
     }));
    }}
    onCancel={() => {
     formUpdateAndAddCategory.resetFields();
     setModalCategory((prev: TStateModal) => ({
      ...prev,
      visible: false,
     }));
    }}
   >
    <ContentModal
     form={formUpdateAndAddCategory}
     type={modalCategory.type}
     idCategory={buttonTreeState.dataSelect.id}
    />
   </Modal>

   <Row
    style={{
     minHeight: "80vh",
     height: "100%",
    }}
    justify='space-between'
   >
    <Col
     span={16}
     push={6}
     style={{
      marginLeft: 20,
      backgroundColor: theme.colors.white,
      borderRadius: 6,
      padding: 20,
     }}
    >
     {selectedProduct ? (
      <InformationProduct productInformation={selectedProduct} />
     ) : (
      <Flex
       justify='center'
       align='center'
       style={{
        width: "100%",
        height: "100%",
       }}
      >
       <Empty description={<span>KHÔNG CÓ DỮ LIỆU</span>}></Empty>
      </Flex>
     )}
    </Col>
    <Col
     span={6}
     pull={18}
     style={{
      backgroundColor: theme.colors.white,
      borderRadius: 6,
      padding: 20,
     }}
    >
     <Flex wrap='wrap' gap='small'>
      <Button
       type='dashed'
       onClick={() => handleOptionModal("add")}
       icon={<PlusOutlined />}
      />
      {buttonTreeState.isSelected && (
       <>
        <Button
         type='primary'
         onClick={() => handleOptionModal("update")}
         icon={<EditOutlined />}
        />
        <Popconfirm
         title='Xóa sản phẩm'
         description={
          <>
           <p>
            Bạn có chắc chắn muốn xóa ${buttonTreeState.dataSelect.title} ?`
           </p>
           <Text strong type='danger'>
            Khi bạn xóa danh mục tất cả các sảm phẩm danh mục sẽ bị xóa.
           </Text>
          </>
         }
         icon={<QuestionCircleOutlined style={{ color: "red" }} />}
         okText='Xóa'
         cancelText='Hủy'
         onConfirm={handleDeleteCategory}
        >
         <Button type='primary' danger icon={<DeleteOutlined />} />
        </Popconfirm>
       </>
      )}
     </Flex>
     {isLoadingCategory ? (
      <LoadingV2 />
     ) : (
      <DirectoryTree
       multiple
       defaultExpandAll
       onSelect={onSelect}
       treeData={treeDataState}
      />
     )}
    </Col>
   </Row>
  </CategoryAdminStyled>
 );
};

export default Component;
