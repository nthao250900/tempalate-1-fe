/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "routes";
import { TRouteChildren, TRoutes } from "types";
import { Layout } from "antd";
import Sidebar from "components/admin/Sidebar";

import { AdminHeader } from "components/admin";
import { theme } from "theme";
import { getAuthQuery } from "helpers";
import { useQuery } from "react-query";
import Loading from "common/Loading";
import { StyleAdminLayout } from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "store";

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
 color: "#fff",
 height: 64,
 lineHeight: "64px",
 backgroundColor: theme.colors.blue[300],
};

const contentStyle: React.CSSProperties = {
 padding: 24,
};

const siderStyle: React.CSSProperties = {
 overflow: "auto",
 minHeight: "100vh",
 width: "500px",
 maxWidth: "500px",
};

const AdminLayout = () => {
 const [collapsed, setCollapsed] = React.useState<boolean>(false);
 const { data, isLoading }: any = useQuery("QUERY-CHECK-AUTH", () =>
  getAuthQuery("/account/check-auth")
 );
 const { user } = useSelector((state: RootState) => state.auth);
 if (
  (data?.message !== "success" && !isLoading) ||
  user?.infoUser.accountRole !== "administrator"
 )
  return <Navigate to='/auth/sign-in' />;

 const getRoutes = (routes: TRoutes[]) => {
  return routes.map((props: TRoutes) => {
   if (props.layout === "admin") {
    return (
     <>
      {props.views.map((view: TRouteChildren, key: number) => (
       <Route path={`/${view.path}`} element={view.component} key={key} />
      ))}
     </>
    );
   } else {
    return null;
   }
  });
 };

 return (
  <StyleAdminLayout>
   {!isLoading ? (
    <Layout>
     <Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle}>
      <Sidebar />
     </Sider>
     <Layout>
      <Header style={headerStyle}>
       <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      </Header>
      <Content style={contentStyle}>
       <div
        style={{
         backgroundColor: theme.colors.white,
         minHeight: "80vh",
         padding: 20,
        }}
       >
        <Routes>
         {getRoutes(routes)}
         {/* <Route path='/' element={<Navigate to='/admin/' />} /> */}
        </Routes>
       </div>
      </Content>
     </Layout>
    </Layout>
   ) : (
    <Loading />
   )}
  </StyleAdminLayout>
 );
};

export default AdminLayout;
