import { Table } from "antd";
import React from "react";

import { TProduct } from "@types";
import { columnsCart } from "./Column";

export interface TCart extends TProduct {
 cartQuantity: number;
 status: number;
}

interface Props {
 records: TCart[];
}

const TableComponent = ({ records }: Props) => {
 return (
  <Table
   bordered={false}
   columns={columnsCart}
   dataSource={records}
   pagination={false}
  />
 );
};

export default TableComponent;
