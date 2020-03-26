import "antd/dist/antd.css";
import "./App.css";
import React from "react";

import Line from "./components/Line.js";
import Pie from "./components/Pie.js";

import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <h1 className="title">SmartKarma Dashboard</h1>
        </Header>
        <Content style={{ padding: "40px" }}>
          <div className="site-layout-content">
            <div className="line">
              <Line />
            </div>
            <div className="pie">
              <Pie />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {"\u00A9"} SmartKarma Dashboard by NUS Fintech Society 2020
        </Footer>
      </Layout>
    </div>
  );
}
