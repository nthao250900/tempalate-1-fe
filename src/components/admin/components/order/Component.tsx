import { ADMIN_QUERY_ORDER } from "components/admin/common/QueryKey";
import React from "react";
import { useQuery } from "react-query";
import { getSelectOrder } from "./query";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Table } from "antd";
import { columns } from "./column";

const Component = () => {
 const { user } = useSelector((state: RootState) => state.auth);

 const { data, isLoading }: any = useQuery(ADMIN_QUERY_ORDER, () =>
  getSelectOrder(user?.infoUser.accountId)
 );

 return (
  <>
   <Table columns={columns} dataSource={data} loading={isLoading} />
  </>
 );
};

export default Component;
