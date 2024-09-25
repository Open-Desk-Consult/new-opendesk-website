import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./custom.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { themeConfig } from "./theme.ts";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <HelmetProvider>
        <ConfigProvider theme={themeConfig}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </HelmetProvider>
    </StyleProvider>
  </React.StrictMode>
);
