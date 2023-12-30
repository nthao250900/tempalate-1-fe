import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import { BrowserRouter } from "react-router-dom";
import Global from "assets/styles/global";
import { ConfigProvider, message } from "antd";
import { store } from "store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import "suneditor/dist/css/suneditor.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import viVN from "antd/locale/vi_VN";

const root = ReactDOM.createRoot(
 document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({
 defaultOptions: {
  queries: {
   refetchOnWindowFocus: false,
  },
 },
});
message.config({
 duration: 2,
 maxCount: 1,
 rtl: true,
 prefixCls: "my-message",
});
root.render(
 <React.StrictMode>
  <QueryClientProvider client={queryClient}>
   <Provider store={store}>
    <ThemeProvider theme={theme}>
     <ConfigProvider locale={viVN}>
      <BrowserRouter>
       <Global />
       <App />
      </BrowserRouter>
     </ConfigProvider>
    </ThemeProvider>
   </Provider>
  </QueryClientProvider>
 </React.StrictMode>
);
