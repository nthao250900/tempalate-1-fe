import { DashboardAdmin } from "components/admin/components/Dashboard";
import { CategoryPageAdmin } from "components/admin/components/category";
import { OrderPageAdmin } from "components/admin/components/order";
import {
 AddProductManage,
 ProductManage,
} from "components/admin/components/products";
import {
 CarbonProduct,
 DashiconsCategory,
 DashiconsPlus,
 MessageIcon,
} from "icons";

import { TRoutes } from "types";

const AdminRoute: TRoutes[] = [
 {
  layout: "admin",
  path: "/admin",
  title: "main",
  views: [
   {
    name: "Dashboard",
    path: "/",
    component: <DashboardAdmin />,
    icon: <MessageIcon />,
   },
   {
    name: "Đơn hàng",
    path: "order",
    component: <OrderPageAdmin />,
    icon: <MessageIcon />,
   },
  ],
 },
 {
  layout: "admin",
  path: "/admin",
  title: "Quản lý sản phẩm",
  views: [
   {
    name: "Tất cả sản phẩm",
    path: "product",
    component: <ProductManage />,
    icon: <CarbonProduct />,
   },
   {
    name: "Thêm sản phẩm",
    path: "product/add",
    component: <AddProductManage />,
    icon: <DashiconsPlus />,
   },
   {
    name: "Danh mục sản phẩm",
    path: "danh-muc-san-pham",
    component: <CategoryPageAdmin />,
    icon: <DashiconsCategory />,
   },
  ],
 },
];
export default AdminRoute;
