import { ClientComponent } from "components/Home";
import { HomeViewComponent } from "components/Home/HomeComponent";
import { ShopPageClient } from "components/clients/Shop";
import { AboutUsPage } from "components/clients/about";
import { CartPage } from "components/clients/cart";
import { CollectionPage } from "components/clients/collectionPage";
import { AccessEmail } from "components/clients/confirm";
import { ContactPage } from "components/clients/contact";
import { DetailProductPage } from "components/clients/detailtProduct";
import { OrderPage } from "components/clients/order";
import { PaymentPage } from "components/clients/payment";
import { WishlistPage } from "components/clients/wishlist";
import { TRoutes } from "types";

const ClientRoute: TRoutes = {
 layout: "client",
 component: <ClientComponent />,
 path: "",
 views: [
  {
   name: "home",
   path: "/",
   component: <HomeViewComponent />,
  },
  {
   name: "shop",
   path: "/shop",
   component: <ShopPageClient />,
  },
  {
   name: "shop-detail",
   path: "/shop/:slug",
   component: <DetailProductPage />,
  },
  {
   name: "wishlist-page",
   path: "/wishlist",
   component: <WishlistPage />,
  },
  {
   name: "cart-page",
   path: "/cart",
   component: <CartPage />,
  },
  {
   name: "pay-page",
   path: "/pay",
   component: <PaymentPage />,
  },
  {
   name: "order-page",
   path: "/order",
   component: <OrderPage />,
  },
  {
   name: "confirm-account",
   path: "/confirm-account",
   component: <AccessEmail />,
  },
  {
   name: "about",
   path: "/about",
   component: <AboutUsPage />,
  },
  {
   name: "contact",
   path: "/contact",
   component: <ContactPage />,
  },
  {
   name: "collection",
   path: "/collection/:slug",
   component: <CollectionPage />,
  },
 ],
};
export default ClientRoute;
