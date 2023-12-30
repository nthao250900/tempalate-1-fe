import { Button, Table } from "antd";
import Heading from "components/admin/common/Header";
import { QUERY_PRODUCT_ADMIN, getQueryHelper } from "helpers";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { columns } from "./column";
import { getProductQuery } from "./query";

export type TProduct = {
 productId: string;
 productName: string;
 productCode: string;
 productHref: string;
 productTrademark: string | null;
 productImages: string;
 productParameter: string;
 productDescription: string;
 productActive: 0 | 1;
 categoryTitle: string;
 categoryCode: string;
 productColors: string;
 productSize: string;
 productPrice: string;
 productDiscount: string;
};

const Component = () => {
 const navigate = useNavigate();

 const { data, isLoading }: any = useQuery(QUERY_PRODUCT_ADMIN, () =>
  getProductQuery()
 );
 return (
  <div>
   <Heading title='Tất cả sản phẩm'>
    <Button
     onClick={() => navigate("add")}
     type='primary'
     icon={<i className='fa-solid fa-plus'></i>}
    >
     Thêm sản phẩm
    </Button>
   </Heading>
   <Table loading={isLoading} columns={columns} dataSource={data} />
  </div>
 );
};

export default Component;
