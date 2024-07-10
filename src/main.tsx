import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./custom.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { themeConfig } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <ConfigProvider theme={themeConfig}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>
);
